'use client';

import { useMarketNews, formatTimeAgo } from '@/lib/hooks/useMarketNews';
import { FaExternalLinkAlt, FaNewspaper } from 'react-icons/fa';

export default function MarketNews() {
  const { data, isLoading, isError } = useMarketNews();

  if (isLoading) {
    return (
      <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
        <div className="flex items-center gap-2 mb-4">
          <FaNewspaper className="text-neutral-400" />
          <h3 className="text-lg font-semibold">Market News</h3>
        </div>
        <div className="text-center text-neutral-400 py-8">Loading news...</div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
        <div className="flex items-center gap-2 mb-4">
          <FaNewspaper className="text-neutral-400" />
          <h3 className="text-lg font-semibold">Market News</h3>
        </div>
        <div className="text-center text-neutral-400 py-8">Failed to load news</div>
      </div>
    );
  }

  // Empty state
  if (!data.articles || data.articles.length === 0) {
    return (
      <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
        <div className="flex items-center gap-2 mb-4">
          <FaNewspaper className="text-neutral-400" />
          <h3 className="text-lg font-semibold">Market News</h3>
        </div>
        <div className="text-center text-neutral-400 py-8">No market news available</div>
      </div>
    );
  }

  return (
    <div className="p-6 bg-neutral-900 rounded-xl border border-neutral-800">
      <div className="flex items-center gap-2 mb-4">
        <FaNewspaper className="text-neutral-400" />
        <h3 className="text-lg font-semibold">Market News</h3>
      </div>

      <div className="space-y-4">
        {data.articles.map((article, index) => (
          <a
            key={`${article.url}-${index}`}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:bg-neutral-800/50 rounded-lg p-3 transition-colors duration-200"
          >
            <div className="flex gap-3">
              {/* Optional thumbnail */}
              {article.image && (
                <div className="flex-shrink-0 w-20 h-20 rounded-md overflow-hidden bg-neutral-800">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Hide image if it fails to load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              )}

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Title */}
                <h4 className="text-sm font-medium text-white mb-1 line-clamp-2 group-hover:text-blue-400 transition-colors">
                  {article.title}
                  <FaExternalLinkAlt className="inline-block ml-1 text-xs text-neutral-500 group-hover:text-blue-400" />
                </h4>

                {/* Description */}
                <p className="text-xs text-neutral-400 mb-2 line-clamp-2">
                  {article.description}
                </p>

                {/* Meta: Source + Time */}
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <span className="font-medium">{article.source}</span>
                  <span>•</span>
                  <span>{formatTimeAgo(article.publishedAt)}</span>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
