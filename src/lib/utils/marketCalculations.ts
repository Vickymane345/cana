/**
 * Market Calculation Utilities
 * Functions for calculating volatility, formatting data, and mapping coin symbols
 */

export interface ChartDataPoint {
  time: number;
  price: number;
  timestamp?: number;
}

/**
 * Calculate volatility from price history using standard deviation
 * @param priceHistory Array of historical prices
 * @returns Volatility percentage (0-100)
 */
export function calculateVolatility(priceHistory: number[]): number {
  if (!priceHistory || priceHistory.length < 2) {
    return 0;
  }

  // Calculate returns (percentage changes)
  const returns: number[] = [];
  for (let i = 1; i < priceHistory.length; i++) {
    if (priceHistory[i - 1] !== 0) {
      const returnValue = (priceHistory[i] - priceHistory[i - 1]) / priceHistory[i - 1];
      returns.push(returnValue);
    }
  }

  if (returns.length === 0) {
    return 0;
  }

  // Calculate mean
  const mean = returns.reduce((sum, r) => sum + r, 0) / returns.length;

  // Calculate variance
  const squaredDiffs = returns.map(r => Math.pow(r - mean, 2));
  const variance = squaredDiffs.reduce((sum, diff) => sum + diff, 0) / squaredDiffs.length;

  // Standard deviation as percentage
  const stdDev = Math.sqrt(variance) * 100;

  // Cap at 100 for display purposes
  return Math.min(Math.round(stdDev * 10) / 10, 100);
}

/**
 * Calculate volatility from 24h price changes of multiple coins
 * @param priceChanges Array of 24h percentage changes
 * @returns Volatility percentage (0-100)
 */
export function calculateMarketVolatility(priceChanges: number[]): number {
  if (!priceChanges || priceChanges.length === 0) {
    return 50; // Default neutral volatility
  }

  // Filter out invalid values
  const validChanges = priceChanges.filter(change => 
    typeof change === 'number' && !isNaN(change) && isFinite(change)
  );

  if (validChanges.length === 0) {
    return 50;
  }

  // Calculate mean
  const mean = validChanges.reduce((sum, change) => sum + change, 0) / validChanges.length;

  // Calculate standard deviation
  const squaredDiffs = validChanges.map(change => Math.pow(change - mean, 2));
  const variance = squaredDiffs.reduce((sum, diff) => sum + diff, 0) / squaredDiffs.length;
  const stdDev = Math.sqrt(variance);

  // Normalize to 0-100 scale (assuming typical crypto volatility range of 0-20%)
  const normalized = Math.min((stdDev / 20) * 100, 100);

  return Math.round(normalized * 10) / 10;
}

/**
 * Format CoinGecko market_chart data to our chart format
 * @param coinGeckoData Raw data from CoinGecko API
 * @returns Formatted chart data points
 */
export function formatChartData(coinGeckoData: [number, number][]): ChartDataPoint[] {
  if (!coinGeckoData || !Array.isArray(coinGeckoData)) {
    return [];
  }

  return coinGeckoData.map(([timestamp, price]) => ({
    time: timestamp,
    price: parseFloat(price.toFixed(2)),
    timestamp,
  }));
}

/**
 * Map trading symbols to CoinGecko coin IDs
 * @param symbol Trading symbol (e.g., 'BTC/USD', 'ETH/USD')
 * @returns CoinGecko coin ID
 */
export function getCoinId(symbol: string): string {
  const symbolMap: Record<string, string> = {
    'BTC/USD': 'bitcoin',
    'BTC': 'bitcoin',
    'ETH/USD': 'ethereum',
    'ETH': 'ethereum',
    'USDT/USD': 'tether',
    'USDT': 'tether',
    'XRP/USD': 'ripple',
    'XRP': 'ripple',
    'SOL/USD': 'solana',
    'SOL': 'solana',
    'USDT-BSC/USD': 'tether',
    'BNB/USD': 'binancecoin',
    'BNB': 'binancecoin',
    'ADA/USD': 'cardano',
    'ADA': 'cardano',
    'DOGE/USD': 'dogecoin',
    'DOGE': 'dogecoin',
    'MATIC/USD': 'matic-network',
    'MATIC': 'matic-network',
  };

  return symbolMap[symbol] || 'bitcoin';
}

/**
 * Timeframe configuration for CoinGecko API endpoints
 */
export interface TimeframeConfig {
  type: 'days' | 'range';
  value: number | 'max' | null;
}

/**
 * Map timeframe strings to CoinGecko API endpoint configuration
 * @param timeframe Timeframe string (e.g., '1D', '5D', '1M', '6M', 'YTD', '1Y', '5Y', 'Max')
 * @returns Configuration object with endpoint type and value
 */
export function getTimeframeConfig(timeframe: string): TimeframeConfig {
  const timeframeMap: Record<string, TimeframeConfig> = {
    '1D': { type: 'days', value: 1 },
    '5D': { type: 'range', value: 5 },
    '1M': { type: 'range', value: 30 },
    '6M': { type: 'range', value: 180 },
    'YTD': { type: 'range', value: null }, // Special case: from Jan 1 of current year
    '1Y': { type: 'range', value: 365 },
    '5Y': { type: 'range', value: 365 * 5 },
    'Max': { type: 'days', value: 'max' },
  };

  return timeframeMap[timeframe] || { type: 'days', value: 1 };
}

/**
 * Map timeframe strings to days for CoinGecko API (deprecated - use getTimeframeConfig)
 * @param timeframe Timeframe string (e.g., '1D', '1M', '1Y')
 * @returns Number of days
 * @deprecated Use getTimeframeConfig() instead for proper endpoint handling
 */
export function getTimeframeDays(timeframe: string): number {
  const timeframeMap: Record<string, number> = {
    '1D': 1,
    '5D': 5,
    '1M': 30,
    '6M': 180,
    'YTD': 365, // Approximate
    '1Y': 365,
    '5Y': 1825,
    'Max': 3650, // ~10 years
  };

  return timeframeMap[timeframe] || 1;
}

/**
 * Get volatility level label
 * @param volatility Volatility percentage (0-100)
 * @returns Label string
 */
export function getVolatilityLabel(volatility: number): string {
  if (volatility < 30) return 'Low';
  if (volatility < 70) return 'Moderate';
  return 'High';
}

/**
 * Get volatility color class
 * @param volatility Volatility percentage (0-100)
 * @returns Tailwind color class
 */
export function getVolatilityColor(volatility: number): string {
  if (volatility < 30) return 'text-green-400';
  if (volatility < 70) return 'text-yellow-400';
  return 'text-red-400';
}

/**
 * Get volatility message
 * @param volatility Volatility percentage (0-100)
 * @returns Descriptive message
 */
export function getVolatilityMessage(volatility: number): string {
  if (volatility < 30) {
    return 'Market conditions are stable. Good time for investments.';
  }
  if (volatility < 70) {
    return 'Moderate volatility. Monitor positions closely.';
  }
  return 'High volatility. Consider risk management strategies.';
}

/**
 * Asset volatility profile for realistic mock data generation
 */
interface VolatilityProfile {
  dailyVolatility: number; // Daily price volatility as decimal (e.g., 0.03 = 3%)
  trendBias: number; // Slight upward/downward bias (-0.001 to 0.001)
  typicalPrice: number; // Typical price for the asset
}

/**
 * Get volatility profile for different assets
 * @param coinId CoinGecko coin ID
 * @returns Volatility profile with typical characteristics
 */
export function getAssetVolatilityProfile(coinId: string): VolatilityProfile {
  const profiles: Record<string, VolatilityProfile> = {
    'bitcoin': {
      dailyVolatility: 0.035, // 3.5% daily volatility
      trendBias: 0.0002, // Slight upward bias
      typicalPrice: 45000,
    },
    'ethereum': {
      dailyVolatility: 0.045, // 4.5% daily volatility
      trendBias: 0.0003,
      typicalPrice: 2500,
    },
    'tether': {
      dailyVolatility: 0.002, // 0.2% daily volatility (stablecoin)
      trendBias: 0,
      typicalPrice: 1.0,
    },
    'ripple': {
      dailyVolatility: 0.055, // 5.5% daily volatility
      trendBias: 0.0001,
      typicalPrice: 0.6,
    },
    'solana': {
      dailyVolatility: 0.065, // 6.5% daily volatility
      trendBias: 0.0004,
      typicalPrice: 100,
    },
    'binancecoin': {
      dailyVolatility: 0.04, // 4% daily volatility
      trendBias: 0.0002,
      typicalPrice: 300,
    },
    'cardano': {
      dailyVolatility: 0.05, // 5% daily volatility
      trendBias: 0.0002,
      typicalPrice: 0.5,
    },
    'dogecoin': {
      dailyVolatility: 0.07, // 7% daily volatility
      trendBias: 0.0001,
      typicalPrice: 0.08,
    },
    'matic-network': {
      dailyVolatility: 0.055, // 5.5% daily volatility
      trendBias: 0.0003,
      typicalPrice: 0.8,
    },
  };

  // Default profile for unknown coins
  return profiles[coinId] || {
    dailyVolatility: 0.04,
    trendBias: 0.0002,
    typicalPrice: 100,
  };
}

/**
 * Generate realistic mock chart data using random walk algorithm
 * @param coinId CoinGecko coin ID
 * @param startTime Start timestamp in milliseconds
 * @param endTime End timestamp in milliseconds
 * @param basePrice Starting price (optional, uses typical price if not provided)
 * @param dataPoints Number of data points to generate
 * @returns Array of mock chart data points
 */
export function generateMockChartData(
  coinId: string,
  startTime: number,
  endTime: number,
  basePrice?: number,
  dataPoints: number = 100
): ChartDataPoint[] {
  const profile = getAssetVolatilityProfile(coinId);
  const startPrice = basePrice || profile.typicalPrice;
  
  const timeInterval = (endTime - startTime) / (dataPoints - 1);
  const mockData: ChartDataPoint[] = [];
  
  let currentPrice = startPrice;
  
  for (let i = 0; i < dataPoints; i++) {
    const timestamp = startTime + (i * timeInterval);
    
    // Random walk with trend
    // Generate random change: normal distribution approximation using Box-Muller transform
    const u1 = Math.random();
    const u2 = Math.random();
    const randNormal = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
    
    // Apply volatility and trend
    const change = (randNormal * profile.dailyVolatility) + profile.trendBias;
    currentPrice = currentPrice * (1 + change);
    
    // Ensure price stays positive and within reasonable bounds
    currentPrice = Math.max(currentPrice, startPrice * 0.3); // Don't drop below 30% of start
    currentPrice = Math.min(currentPrice, startPrice * 3.0); // Don't rise above 300% of start
    
    mockData.push({
      time: Math.floor(timestamp),
      price: parseFloat(currentPrice.toFixed(coinId === 'tether' ? 4 : 2)),
      timestamp: Math.floor(timestamp),
    });
  }
  
  return mockData;
}

/**
 * Calculate smooth transition between mock and live data
 * Adjusts mock data to blend seamlessly with live data
 * @param mockData Array of mock data points
 * @param liveData Array of live data points
 * @returns Adjusted mock data with smooth transition
 */
export function calculateSmoothTransition(
  mockData: ChartDataPoint[],
  liveData: ChartDataPoint[]
): ChartDataPoint[] {
  if (mockData.length === 0 || liveData.length === 0) {
    return mockData;
  }
  
  // Get the last mock price and first live price
  const lastMockPrice = mockData[mockData.length - 1].price;
  const firstLivePrice = liveData[0].price;
  
  // Calculate the price difference
  const priceDiff = firstLivePrice - lastMockPrice;
  
  // If difference is small (< 5%), no adjustment needed
  if (Math.abs(priceDiff / lastMockPrice) < 0.05) {
    return mockData;
  }
  
  // Apply gradual adjustment to last 20% of mock data points
  const adjustmentWindow = Math.floor(mockData.length * 0.2);
  const adjustedMockData = [...mockData];
  
  for (let i = mockData.length - adjustmentWindow; i < mockData.length; i++) {
    const progress = (i - (mockData.length - adjustmentWindow)) / adjustmentWindow;
    const adjustment = priceDiff * progress;
    adjustedMockData[i] = {
      ...adjustedMockData[i],
      price: parseFloat((adjustedMockData[i].price + adjustment).toFixed(2)),
    };
  }
  
  return adjustedMockData;
}

/**
 * Determine appropriate number of data points based on timeframe
 * @param days Number of days in the timeframe
 * @returns Recommended number of data points
 */
export function getDataPointsForTimeframe(days: number): number {
  if (days <= 1) return 96; // 15-minute intervals for 1 day
  if (days <= 7) return 168; // Hourly for 1 week
  if (days <= 30) return 120; // Every 6 hours for 1 month
  if (days <= 180) return 180; // Daily for 6 months
  if (days <= 365) return 365; // Daily for 1 year
  return Math.min(days, 1825); // Daily, max 5 years
}
