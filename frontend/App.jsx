import React, { useState, useEffect } from 'react';
import CategoryTabs from './components/CategoryTabs';
import ArticleCard from './components/ArticleCard';
import SummaryModal from './components/SummaryModal';
import { fetchNews } from './fetchNews';
import { summarizeArticle } from './summarizeArticle';

function App() {
  const [category, setCategory] = useState('technology');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [summary, setSummary] = useState('');
  const [summarizing, setSummarizing] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchNews(category)
      .then(setArticles)
      .catch(err => setError('Failed to fetch news'))
      .finally(() => setLoading(false));
  }, [category]);

  const handleSummarize = async (article) => {
    setSelectedArticle(article);
    setModalOpen(true);
    setSummarizing(true);
    setSummary('');
    
    try {
      const result = await summarizeArticle(article.content || article.description || article.title);
      setSummary(result);
    } catch (err) {
      setSummary('Error summarizing article: ' + err.message);
    } finally {
      setSummarizing(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedArticle(null);
    setSummary('');
    setSummarizing(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-900 to-black text-white">
      {/* Enhanced Header */}
      <header className="gradient-header shadow-2xl relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-pink-400/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Logo and Title Section */}
            <div className="flex items-center space-x-6">
              {/* Animated Logo */}
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 rounded-3xl flex items-center justify-center animate-glow shadow-2xl">
                  <span className="text-4xl animate-bounce">🌟</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur opacity-30 animate-pulse"></div>
              </div>
              
              {/* Title Section */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black bg-gradient-to-r from-white via-pink-200 to-purple-300 bg-clip-text text-transparent text-glow leading-tight">
                  NewsFlow AI
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl opacity-90 font-light text-pink-200 animate-fade-in-up">
                  Your AI-Powered News Companion
                </p>
                <div className="flex items-center space-x-4 text-sm text-pink-300">
                  <span className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live Updates</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>🤖</span>
                    <span>AI Powered</span>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Status and Features */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="bg-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-500/30 text-sm font-medium text-pink-200 hover:bg-pink-500/30 transition-all duration-300">
                  📱 Mobile Ready
                </span>
                <span className="bg-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-500/30 text-sm font-medium text-purple-200 hover:bg-purple-500/30 transition-all duration-300">
                  ⚡ Real-time
                </span>
                <span className="bg-pink-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-pink-500/30 text-sm font-medium text-pink-200 hover:bg-pink-500/30 transition-all duration-300">
                  🎨 Beautiful UI
                </span>
              </div>
              
              {/* Stats */}
              <div className="flex items-center space-x-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-300">10+</div>
                  <div className="text-gray-400">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-300">24/7</div>
                  <div className="text-gray-400">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Category Tabs */}
        <div className="mb-8">
          <CategoryTabs onSelect={setCategory} activeCategory={category} />
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="spinner mx-auto mb-6 w-16 h-16"></div>
              <p className="text-xl opacity-75 font-medium text-pink-200">Fetching the latest news...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="glass rounded-2xl p-6 mb-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full mr-3"></div>
              <p className="text-red-200 font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* News Articles Grid - 2 Columns Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, index) => (
            <div 
              key={article.url} 
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArticleCard article={article} handleSummarize={() => handleSummarize(article)} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-16 animate-fade-in-up">
            <div className="text-8xl mb-6">📰</div>
            <h3 className="text-3xl font-bold mb-4 text-pink-200">No articles found</h3>
            <p className="opacity-75 text-lg">Try selecting a different category</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-black via-purple-900 to-black mt-16 border-t border-pink-500/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
                🌟 NewsFlow AI
              </h3>
              <p className="text-gray-400">
                Your intelligent news companion powered by cutting-edge AI technology.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-pink-200">Features</h4>
              <ul className="text-gray-400 space-y-2">
                <li>🤖 AI-Powered Summaries</li>
                <li>📱 Mobile Responsive</li>
                <li>⚡ Real-time News</li>
                <li>🎨 Beautiful Design</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-pink-200">Categories</h4>
              <ul className="text-gray-400 space-y-2">
                <li>💼 Business</li>
                <li>💻 Technology</li>
                <li>⚽ Sports</li>
                <li>🏥 Health</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-pink-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 NewsFlow AI. Built with ❤️ and AI.
            </p>
          </div>
        </div>
      </footer>

      {/* Summary Modal */}
      <SummaryModal
        isOpen={modalOpen}
        onClose={closeModal}
        summary={summary}
        article={selectedArticle}
        summarizing={summarizing}
      />
    </div>
  );
}

export default App; 