import { NextRequest, NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';

const CACHE_DURATION = 60; // 60 seconds

interface CoinGeckoPrice {
  usd: number;
  usd_24h_change: number;
}

interface CoinGeckoMarket {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

interface FearGreedData {
  value: number;
  value_classification: string;
}

const fetchPrices = async (): Promise<{
  btc: CoinGeckoPrice;
  eth: CoinGeckoPrice;
  top10: CoinGeckoMarket[];
  sentiment: FearGreedData;
}> => {
  try {
    // Fetch BTC and ETH prices
    const priceResponse = await fetch(
      'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true'
    );

    if (!priceResponse.ok) {
      throw new Error('Failed to fetch prices');
    }

    const prices = await priceResponse.json();

    // Fetch top 10 coins
    const marketResponse = await fetch(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
    );

    if (!marketResponse.ok) {
      throw new Error('Failed to fetch market data');
    }

    const top10 = await marketResponse.json();

    // Fetch fear & greed index
    const sentimentResponse = await fetch('https://api.alternative.me/fng/');

    let sentiment = { value: 50, value_classification: 'Neutral' }; // default

    if (sentimentResponse.ok) {
      const sentimentData = await sentimentResponse.json();
      if (sentimentData.data && sentimentData.data.length > 0) {
        sentiment = {
          value: parseInt(sentimentData.data[0].value),
          value_classification: sentimentData.data[0].value_classification,
        };
      }
    }

    return {
      btc: prices.bitcoin,
      eth: prices.ethereum,
      top10,
      sentiment,
    };
  } catch (error) {
    console.error('Error fetching market data:', error);
    // Return cached or default data on error
    return {
      btc: { usd: 0, usd_24h_change: 0 },
      eth: { usd: 0, usd_24h_change: 0 },
      top10: [],
      sentiment: { value: 50, value_classification: 'Neutral' },
    };
  }
};

const getCachedPrices = unstable_cache(fetchPrices, ['market-prices'], {
  revalidate: CACHE_DURATION,
});

export async function GET(request: NextRequest) {
  try {
    const data = await getCachedPrices();

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch market data' },
      { status: 500 }
    );
  }
}
