import { NextRequest, NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';
import { 
  getCoinId, 
  getTimeframeConfig, 
  formatChartData, 
  TimeframeConfig,
  generateMockChartData,
  calculateSmoothTransition,
  getDataPointsForTimeframe,
  ChartDataPoint
} from '@/lib/utils/marketCalculations';

const CACHE_DURATION = 300; // 5 minutes
const RECENT_DATA_THRESHOLD_DAYS = 30; // Use live data for last 30 days

interface FetchResult {
  data: ChartDataPoint[];
  source: 'live' | 'mock' | 'hybrid';
  error?: string;
  isRateLimited?: boolean;
}

interface HybridDataResult {
  data: ChartDataPoint[];
  source: 'live' | 'mock' | 'hybrid';
  liveDataPoints: number;
  mockDataPoints: number;
  transitionTimestamp?: number;
  metadata: {
    isRateLimited: boolean;
    usedFallback: boolean;
    message?: string;
  };
}

/**
 * Determine if a timeframe is within the recent period (last 30 days)
 */
const isRecentPeriod = (timeframe: string, config: TimeframeConfig): boolean => {
  if (config.type === 'days') {
    if (config.value === 'max') return false;
    return (config.value as number) <= RECENT_DATA_THRESHOLD_DAYS;
  }
  
  // For range type
  if (config.value === null) {
    // YTD - check if less than 30 days from Jan 1
    const currentYear = new Date().getFullYear();
    const jan1 = new Date(currentYear, 0, 1);
    const daysSinceJan1 = Math.floor((Date.now() - jan1.getTime()) / (1000 * 60 * 60 * 24));
    return daysSinceJan1 <= RECENT_DATA_THRESHOLD_DAYS;
  }
  
  return (config.value as number) <= RECENT_DATA_THRESHOLD_DAYS;
};

/**
 * Fetch historical chart data from CoinGecko using market_chart endpoint
 * Returns FetchResult with data source information
 */
const fetchChartDataByDays = async (
  coinId: string,
  days: number | 'max'
): Promise<FetchResult> => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`;
  
  console.log(`[Market Chart API] Fetching data using market_chart endpoint`);
  console.log(`[Market Chart API] URL: ${url}`);
  
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: CACHE_DURATION },
    });

    // Handle rate limiting (429)
    if (response.status === 429) {
      console.warn(`[Market Chart API] Rate limited by CoinGecko (429)`);
      return {
        data: [],
        source: 'mock',
        error: 'Rate limited',
        isRateLimited: true,
      };
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Market Chart API] CoinGecko API error: ${response.status}`, errorText);
      return {
        data: [],
        source: 'mock',
        error: `API error: ${response.status}`,
      };
    }

    const data = await response.json();
    console.log(`[Market Chart API] Received ${data.prices?.length || 0} data points`);

    if (!data.prices || !Array.isArray(data.prices) || data.prices.length === 0) {
      console.error('[Market Chart API] Invalid or empty response format:', data);
      return {
        data: [],
        source: 'mock',
        error: 'Invalid response format',
      };
    }

    return {
      data: formatChartData(data.prices),
      source: 'live',
    };
  } catch (error) {
    console.error('[Market Chart API] Fetch error:', error);
    return {
      data: [],
      source: 'mock',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Fetch historical chart data from CoinGecko using market_chart/range endpoint
 * Returns FetchResult with data source information
 */
const fetchChartDataByRange = async (
  coinId: string,
  from: number,
  to: number
): Promise<FetchResult> => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart/range?vs_currency=usd&from=${from}&to=${to}`;
  
  console.log(`[Market Chart API] Fetching data using market_chart/range endpoint`);
  console.log(`[Market Chart API] URL: ${url}`);
  console.log(`[Market Chart API] Range: ${new Date(from * 1000).toISOString()} to ${new Date(to * 1000).toISOString()}`);
  
  try {
    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
      next: { revalidate: CACHE_DURATION },
    });

    // Handle rate limiting (429)
    if (response.status === 429) {
      console.warn(`[Market Chart API] Rate limited by CoinGecko (429)`);
      return {
        data: [],
        source: 'mock',
        error: 'Rate limited',
        isRateLimited: true,
      };
    }

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Market Chart API] CoinGecko API error: ${response.status}`, errorText);
      return {
        data: [],
        source: 'mock',
        error: `API error: ${response.status}`,
      };
    }

    const data = await response.json();
    console.log(`[Market Chart API] Received ${data.prices?.length || 0} data points`);

    if (!data.prices || !Array.isArray(data.prices) || data.prices.length === 0) {
      console.error('[Market Chart API] Invalid or empty response format:', data);
      return {
        data: [],
        source: 'mock',
        error: 'Invalid response format',
      };
    }

    return {
      data: formatChartData(data.prices),
      source: 'live',
    };
  } catch (error) {
    console.error('[Market Chart API] Fetch error:', error);
    return {
      data: [],
      source: 'mock',
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
};

/**
 * Generate hybrid chart data combining live recent data with mock historical data
 */
const generateHybridChartData = async (
  coinId: string,
  timeframe: string,
  config: TimeframeConfig
): Promise<HybridDataResult> => {
  const now = Math.floor(Date.now() / 1000);
  const nowMs = Date.now();
  
  // Check if this is a recent-only period
  if (isRecentPeriod(timeframe, config)) {
    console.log(`[Market Chart API] Timeframe ${timeframe} is recent - fetching 100% live data`);
    
    let fetchResult: FetchResult;
    
    if (config.type === 'days') {
      fetchResult = await fetchChartDataByDays(coinId, config.value as number | 'max');
    } else {
      let from: number;
      if (timeframe === 'YTD') {
        const currentYear = new Date().getFullYear();
        from = Math.floor(new Date(currentYear, 0, 1).getTime() / 1000);
      } else if (config.value !== null) {
        from = now - (config.value as number) * 24 * 60 * 60;
      } else {
        throw new Error('Invalid timeframe configuration');
      }
      fetchResult = await fetchChartDataByRange(coinId, from, now);
    }
    
    // If live data fetch failed or was rate limited, use full mock
    if (fetchResult.data.length === 0 || fetchResult.isRateLimited) {
      console.log(`[Market Chart API] Live data unavailable, generating full mock dataset`);
      
      const days = config.type === 'days' && config.value !== 'max' 
        ? config.value as number 
        : config.value as number || 30;
      const startTime = nowMs - (days * 24 * 60 * 60 * 1000);
      const dataPoints = getDataPointsForTimeframe(days);
      
      const mockData = generateMockChartData(coinId, startTime, nowMs, undefined, dataPoints);
      
      return {
        data: mockData,
        source: 'mock',
        liveDataPoints: 0,
        mockDataPoints: mockData.length,
        metadata: {
          isRateLimited: fetchResult.isRateLimited || false,
          usedFallback: true,
          message: fetchResult.error || 'Using simulated data due to API unavailability',
        },
      };
    }
    
    return {
      data: fetchResult.data,
      source: 'live',
      liveDataPoints: fetchResult.data.length,
      mockDataPoints: 0,
      metadata: {
        isRateLimited: false,
        usedFallback: false,
      },
    };
  }
  
  // Hybrid mode: combine live recent data with mock historical data
  console.log(`[Market Chart API] Timeframe ${timeframe} requires hybrid data (live + mock)`);
  
  // Calculate time ranges
  const recentThresholdMs = nowMs - (RECENT_DATA_THRESHOLD_DAYS * 24 * 60 * 60 * 1000);
  const recentThresholdSec = Math.floor(recentThresholdMs / 1000);
  
  // Fetch live data for recent period
  console.log(`[Market Chart API] Fetching live data for last ${RECENT_DATA_THRESHOLD_DAYS} days`);
  const liveResult = await fetchChartDataByRange(coinId, recentThresholdSec, now);
  
  // Calculate historical period
  let historicalStartTime: number;
  if (timeframe === 'YTD') {
    const currentYear = new Date().getFullYear();
    historicalStartTime = new Date(currentYear, 0, 1).getTime();
  } else if (config.value !== null) {
    const totalDays = config.value as number;
    historicalStartTime = nowMs - (totalDays * 24 * 60 * 60 * 1000);
  } else if (config.value === 'max') {
    historicalStartTime = nowMs - (3650 * 24 * 60 * 60 * 1000); // 10 years
  } else {
    throw new Error('Invalid timeframe configuration');
  }
  
  // Generate mock data for historical period
  const historicalDays = Math.floor((recentThresholdMs - historicalStartTime) / (1000 * 60 * 60 * 24));
  const historicalDataPoints = getDataPointsForTimeframe(historicalDays);
  
  console.log(`[Market Chart API] Generating mock data for ${historicalDays} days (${historicalDataPoints} points)`);
  
  // Use first live price as base for mock data if available
  const basePrice = liveResult.data.length > 0 ? liveResult.data[0].price : undefined;
  let mockData = generateMockChartData(
    coinId,
    historicalStartTime,
    recentThresholdMs,
    basePrice,
    historicalDataPoints
  );
  
  // If we have live data, smooth the transition
  if (liveResult.data.length > 0) {
    mockData = calculateSmoothTransition(mockData, liveResult.data);
  }
  
  // Combine mock and live data
  const combinedData = [...mockData, ...liveResult.data];
  
  // Handle case where live data failed but we still want to provide data
  if (liveResult.data.length === 0 || liveResult.isRateLimited) {
    console.log(`[Market Chart API] Live data unavailable, extending mock data to present`);
    
    // Extend mock data to current time
    const totalDays = config.value === 'max' ? 3650 : (config.value as number || 365);
    const totalDataPoints = getDataPointsForTimeframe(totalDays);
    const fullMockData = generateMockChartData(
      coinId,
      historicalStartTime,
      nowMs,
      undefined,
      totalDataPoints
    );
    
    return {
      data: fullMockData,
      source: 'mock',
      liveDataPoints: 0,
      mockDataPoints: fullMockData.length,
      metadata: {
        isRateLimited: liveResult.isRateLimited || false,
        usedFallback: true,
        message: liveResult.error || 'Using simulated data due to API unavailability',
      },
    };
  }
  
  console.log(`[Market Chart API] Hybrid data: ${mockData.length} mock + ${liveResult.data.length} live = ${combinedData.length} total`);
  
  return {
    data: combinedData,
    source: 'hybrid',
    liveDataPoints: liveResult.data.length,
    mockDataPoints: mockData.length,
    transitionTimestamp: recentThresholdMs,
    metadata: {
      isRateLimited: false,
      usedFallback: false,
      message: `Combined ${mockData.length} simulated historical points with ${liveResult.data.length} live recent points`,
    },
  };
};

/**
 * Create cached version of hybrid chart data
 */
const getCachedHybridChartData = (coinId: string, timeframe: string, config: TimeframeConfig) => {
  return unstable_cache(
    async () => generateHybridChartData(coinId, timeframe, config),
    [`market-chart-hybrid-${coinId}-${timeframe}-${config.type}`],
    {
      revalidate: CACHE_DURATION,
    }
  )();
};

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const asset = searchParams.get('asset');
    const timeframe = searchParams.get('timeframe');

    console.log(`[Market Chart API] ========================================`);
    console.log(`[Market Chart API] Request received - asset: ${asset}, timeframe: ${timeframe}`);

    // Validate parameters
    if (!asset) {
      console.error('[Market Chart API] Missing asset parameter');
      return NextResponse.json(
        { error: 'Missing asset parameter' },
        { status: 400 }
      );
    }

    if (!timeframe) {
      console.error('[Market Chart API] Missing timeframe parameter');
      return NextResponse.json(
        { error: 'Missing timeframe parameter' },
        { status: 400 }
      );
    }

    // Convert asset symbol to CoinGecko coin ID
    const coinId = getCoinId(asset);
    console.log(`[Market Chart API] Mapped ${asset} to CoinGecko ID: ${coinId}`);

    // Get timeframe configuration
    const config = getTimeframeConfig(timeframe);
    console.log(`[Market Chart API] Timeframe config for ${timeframe}:`, JSON.stringify(config));

    // Fetch hybrid chart data (cached)
    const result = await getCachedHybridChartData(coinId, timeframe, config);

    if (!result.data || result.data.length === 0) {
      console.error('[Market Chart API] No chart data available after fetch');
      return NextResponse.json(
        { error: 'No chart data available', coinId, timeframe },
        { status: 404 }
      );
    }

    console.log(`[Market Chart API] ========================================`);
    console.log(`[Market Chart API] DATA SOURCE: ${result.source.toUpperCase()}`);
    console.log(`[Market Chart API] Live data points: ${result.liveDataPoints}`);
    console.log(`[Market Chart API] Mock data points: ${result.mockDataPoints}`);
    console.log(`[Market Chart API] Total data points: ${result.data.length}`);
    if (result.transitionTimestamp) {
      console.log(`[Market Chart API] Transition at: ${new Date(result.transitionTimestamp).toISOString()}`);
    }
    if (result.metadata.message) {
      console.log(`[Market Chart API] Message: ${result.metadata.message}`);
    }
    console.log(`[Market Chart API] ========================================`);

    return NextResponse.json({
      asset,
      timeframe,
      coinId,
      endpointType: config.type,
      prices: result.data,
      dataPoints: result.data.length,
      // Enhanced response fields
      dataSource: result.source,
      liveDataPoints: result.liveDataPoints,
      mockDataPoints: result.mockDataPoints,
      transitionTimestamp: result.transitionTimestamp,
      metadata: result.metadata,
    });
  } catch (error) {
    console.error('[Market Chart API] Unhandled error:', error);

    // Return error response with more details
    return NextResponse.json(
      {
        error: 'Failed to fetch chart data',
        message: error instanceof Error ? error.message : 'Unknown error',
        details: error instanceof Error ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
