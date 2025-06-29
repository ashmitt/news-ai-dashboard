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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white smooth-scroll">
      {/* Enhanced Header with Better Animations */}
      <header className="gradient-header shadow-2xl relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-10 left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 left-1/4 w-16 h-16 bg-pink-400/30 rounded-full blur-lg animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-400/25 rounded-full blur-lg animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
            {/* Logo and Title Section - Left Side */}
            <div className="flex items-center space-x-6">
              {/* Enhanced Animated Logo */}
              <div className="relative">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 rounded-3xl flex items-center justify-center animate-glow shadow-2xl">
                  <span className="text-3xl md:text-4xl animate-bounce-subtle">🌟</span>
                </div>
                <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-3xl blur opacity-30 animate-pulse"></div>
              </div>
              
              {/* Enhanced Title Section */}
              <div className="space-y-1 md:space-y-2">
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-gradient text-glow leading-tight">
                  NewsFlow AI
                </h1>
                <p className="text-base md:text-lg lg:text-xl opacity-90 font-light text-pink-200 animate-fade-in-up">
                  Your AI-Powered News Companion
                </p>
                <div className="flex items-center space-x-3 md:space-x-4 text-xs md:text-sm text-pink-300">
                  <span className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>Live Updates</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>🤖</span>
                    <span>AI Powered</span>
                  </span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Status and Features - Right Side */}
            <div className="flex flex-row items-center justify-end space-x-3 md:space-x-6">
              {/* Feature Badges */}
              <div className="flex flex-wrap gap-2 md:gap-3">
                <span className="bg-pink-500/20 backdrop-blur-sm px-2 md:px-3 py-1.5 md:py-2 rounded-full border border-pink-500/30 text-xs md:text-sm font-medium text-pink-200 hover:bg-pink-500/30 transition-all-smooth">
                  📱 Mobile
                </span>
                <span className="bg-purple-500/20 backdrop-blur-sm px-2 md:px-3 py-1.5 md:py-2 rounded-full border border-purple-500/30 text-xs md:text-sm font-medium text-purple-200 hover:bg-purple-500/30 transition-all-smooth">
                  ⚡ Real-time
                </span>
                <span className="bg-pink-500/20 backdrop-blur-sm px-2 md:px-3 py-1.5 md:py-2 rounded-full border border-pink-500/30 text-xs md:text-sm font-medium text-pink-200 hover:bg-pink-500/30 transition-all-smooth">
                  🎨 Beautiful
                </span>
              </div>
              
              {/* Enhanced Stats */}
              <div className="flex items-center space-x-4 md:space-x-6 text-xs md:text-sm">
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-pink-300">10+</div>
                  <div className="text-gray-400 text-xs">Categories</div>
                </div>
                <div className="text-center">
                  <div className="text-lg md:text-2xl font-bold text-purple-300">24/7</div>
                  <div className="text-gray-400 text-xs">Updates</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Enhanced Category Tabs */}
        <div className="mb-8">
          <CategoryTabs onSelect={setCategory} activeCategory={category} />
        </div>

        {/* Enhanced Loading State */}
        {loading && (
          <div className="flex items-center justify-center py-16">
            <div className="text-center">
              <div className="spinner mx-auto mb-6 w-16 h-16"></div>
              <p className="text-xl opacity-75 font-medium text-pink-200">Fetching the latest news...</p>
            </div>
          </div>
        )}

        {/* Enhanced Error State */}
        {error && (
          <div className="glass rounded-2xl p-6 mb-8 animate-fade-in-up max-w-2xl mx-auto">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-red-500 rounded-full mr-3"></div>
              <p className="text-red-200 font-medium">{error}</p>
            </div>
          </div>
        )}

        {/* Enhanced News Articles Grid - Responsive Layout */}
        <div className="articles-grid">
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

        {/* Enhanced Empty State */}
        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-16 animate-fade-in-up">
            <div className="text-8xl mb-6 animate-bounce-subtle">📰</div>
            <h3 className="text-3xl font-bold mb-4 text-pink-200">No articles found</h3>
            <p className="opacity-75 text-lg">Try selecting a different category</p>
          </div>
        )}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black mt-16 border-t border-pink-500/20">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gradient">
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