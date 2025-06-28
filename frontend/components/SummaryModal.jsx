import React from 'react';

function SummaryModal({ isOpen, onClose, summary, article, summarizing }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900 to-black rounded-2xl border border-pink-500/30 shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-pink-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center">
                <span className="text-lg">🤖</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">AI Summary</h2>
                <p className="text-sm text-pink-200">Powered by Google Gemini</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-200"
            >
              <span className="text-white text-lg">×</span>
            </button>
          </div>
        </div>

        {/* Article Info */}
        {article && (
          <div className="p-6 border-b border-pink-500/20">
            <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
              {article.title}
            </h3>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <span>{article.source?.name}</span>
              <span>•</span>
              <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
            </div>
          </div>
        )}

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6">
          {summarizing ? (
            <div className="flex items-center justify-center py-8">
              <div className="text-center">
                <div className="spinner mx-auto mb-4 w-12 h-12"></div>
                <p className="text-lg text-pink-200 font-medium">Generating AI summary...</p>
                <p className="text-sm text-gray-400 mt-2">This may take a few seconds</p>
              </div>
            </div>
          ) : summary ? (
            <div className="prose prose-invert max-w-none">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-pink-500/20">
                <p className="text-white leading-relaxed whitespace-pre-wrap">
                  {summary}
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">No summary available</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-pink-500/20">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-400">
              <span className="flex items-center space-x-1">
                <span>⚡</span>
                <span>AI Generated</span>
              </span>
            </div>
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SummaryModal; 