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

  const truncateText = (text, maxLength = 80) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="glass rounded-xl overflow-hidden card-hover group article-card-small shadow-glow-hover transition-all-smooth">
      {/* Article Image - Smaller aspect ratio */}
      <div className="relative w-full card-image overflow-hidden">
        <img
          src={article.urlToImage || 'https://via.placeholder.com/320x180/1a0033/ff1493?text=📰+News'}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/320x180/1a0033/ff1493?text=📰+News';
          }}
        />
        
        {/* Enhanced Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
        
        {/* Floating Source Badge */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium border border-pink-500/40 shadow-lg">
            <span className="inline-block w-2 h-2 bg-pink-500 rounded-full mr-2 animate-pulse"></span>
            {article.source?.name || 'News'}
          </span>
        </div>
        
        {/* Date Badge */}
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full font-medium border border-purple-500/40 shadow-lg">
            <span className="mr-1">📅</span>
            {formatDate(article.publishedAt)}
          </span>
        </div>

        {/* Read Time Badge */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-gradient-to-r from-pink-500/80 to-purple-500/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium shadow-lg">
            <span className="mr-1">⏱️</span>
            2 min read
          </span>
        </div>
      </div>

      {/* Article Content - Enhanced */}
      <div className="card-content relative">
        {/* Title with better typography */}
        <h3 className="card-title font-bold text-white group-hover:text-pink-100 transition-colors duration-300 leading-snug">
          {article.title}
        </h3>

        {/* Description with better spacing */}
        <p className="card-description text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
          {truncateText(article.description || article.content, 100)}
        </p>

        {/* Action Buttons - Enhanced Design */}
        <div className="mt-auto flex gap-2 relative z-10">
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 text-center py-2.5 px-3 rounded-lg text-sm font-medium transition-all-smooth hover:scale-105 group/btn"
          >
            <span className="flex items-center justify-center space-x-2">
              <span className="text-base group-hover/btn:animate-bounce-subtle">📖</span>
              <span>Read Full</span>
            </span>
          </a>

          <button
            onClick={handleSummarize}
            className="btn-primary py-2.5 px-4 rounded-lg text-sm font-medium transition-all-smooth hover:scale-105 group/btn relative overflow-hidden"
          >
            <span className="flex items-center justify-center space-x-2 relative z-10">
              <span className="text-base group-hover/btn:animate-bounce-subtle">🤖</span>
              <span>AI Summary</span>
            </span>
          </button>
        </div>

        {/* Author Info - Enhanced styling */}
        {article.author && (
          <div className="mt-3 pt-3 border-t border-pink-500/20">
            <p className="text-xs text-gray-400 flex items-center space-x-2">
              <span className="w-6 h-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                {article.author.charAt(0).toUpperCase()}
              </span>
              <span>
                By <span className="text-pink-300 font-medium hover:text-pink-200 transition-colors">{article.author}</span>
              </span>
            </p>
          </div>
        )}

        {/* Subtle background pattern */}
        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-5 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-tl from-pink-500 to-purple-500 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Hover overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"></div>
    </div>
  );
}

export default ArticleCard;