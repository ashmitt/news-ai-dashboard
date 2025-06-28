import React from 'react';

function ArticleCard({ article, handleSummarize }) {
  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  const truncateText = (text, maxLength = 50) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="glass rounded-lg overflow-hidden card-hover group h-full flex flex-col w-full">
      {/* Article Image - Perfect square */}
      <div className="relative w-full aspect-square overflow-hidden">
        <img
          src={article.urlToImage || 'https://via.placeholder.com/200x200/1a0033/ff1493?text=News'}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/200x200/1a0033/ff1493?text=News';
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        
        {/* Source Badge */}
        <div className="absolute top-2 left-2">
          <span className="bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium border border-pink-500/30">
            {article.source?.name || 'News'}
          </span>
        </div>
        
        {/* Date Badge */}
        <div className="absolute top-2 right-2">
          <span className="bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium border border-pink-500/30">
            {formatDate(article.publishedAt)}
          </span>
        </div>
      </div>

      {/* Article Content */}
      <div className="p-3 flex-1 flex flex-col">
        {/* Title */}
        <h3 className="text-xs font-bold mb-2 line-clamp-2 text-white group-hover:text-pink-200 transition-colors duration-300 flex-1">
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 text-xs mb-3 line-clamp-2 leading-relaxed flex-1">
          {truncateText(article.description || article.content, 50)}
        </p>

        {/* Action Buttons - Side by Side */}
        <div className="mt-auto flex gap-2">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 text-center py-1.5 px-2 rounded text-xs font-medium transition-all duration-300 hover:bg-pink-500/20"
          >
            <span className="flex items-center justify-center space-x-1">
              <span>📖</span>
              <span>Read</span>
            </span>
          </a>

          <button
            onClick={handleSummarize}
            className="btn-primary py-1.5 px-3 rounded text-xs font-medium transition-all duration-300"
          >
            <span className="flex items-center justify-center space-x-1">
              <span>🤖</span>
              <span>AI</span>
            </span>
          </button>
        </div>

        {/* Author Info */}
        {article.author && (
          <div className="mt-2 pt-2 border-t border-pink-500/20">
            <p className="text-xs text-gray-400">
              By <span className="text-pink-300 font-medium">{article.author}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ArticleCard;