import { NextRequest, NextResponse } from 'next/server';
import { unstable_cache } from 'next/cache';

const CACHE_DURATION = 300; // 5 minutes
const GNEWS_API_KEY = '6292a43ba8b97051a3a52eabd206b32f';
const MAX_ARTICLES = 10;

interface GNewsArticle {
  title: string;
  description: string;
  url: string;
  image?: string;
  source: {
    name: string;
  };
  publishedAt: string;
}

interface GNewsResponse {
  articles: GNewsArticle[];
}

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  image?: string;
  source: string;
  publishedAt: number;
}

interface NewsResponse {
  source: string;
  fetchedAt: number;
  articles: NewsArticle[];
}

const fetchMarketNews = async (): Promise<NewsResponse> => {
  try {
    const query = encodeURIComponent('bitcoin OR crypto OR markets OR economy OR stocks');
    const url = `https://gnews.io/api/v4/search?q=${query}&lang=en&max=${MAX_ARTICLES}&apikey=${GNEWS_API_KEY}`;

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('GNews API error:', response.status, response.statusText);
      throw new Error(`GNews API returned ${response.status}`);
    }

    const data: GNewsResponse = await response.json();

    // Transform GNews response to our schema
    const articles: NewsArticle[] = data.articles.map((article) => ({
      title: article.title,
      description: article.description,
      url: article.url,
      image: article.image || undefined,
      source: article.source.name,
      publishedAt: new Date(article.publishedAt).getTime(),
    }));

    return {
      source: 'gnews',
      fetchedAt: Date.now(),
      articles,
    };
  } catch (error) {
    console.error('Error fetching market news:', error);
    
    // Return empty list with metadata on error (graceful degradation)
    return {
      source: 'gnews',
      fetchedAt: Date.now(),
      articles: [],
    };
  }
};

const getCachedNews = unstable_cache(fetchMarketNews, ['market-news'], {
  revalidate: CACHE_DURATION,
});

export async function GET(request: NextRequest) {
  try {
    const data = await getCachedNews();

    return NextResponse.json(data);
  } catch (error) {
    console.error('API Error:', error);
    
    // Return empty response instead of error to maintain stable schema
    return NextResponse.json({
      source: 'gnews',
      fetchedAt: Date.now(),
      articles: [],
    });
  }
}
