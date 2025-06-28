import React, { useState, useEffect } from 'react';
import CategoryTabs from './components/CategoryTabs';
import ArticleCard from './components/ArticleCard';
import { fetchNews } from './fetchNews';

function App() {
  const [category, setCategory] = useState('technology');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchNews(category)
      .then(setArticles)
      .catch(err => setError('Failed to fetch news'))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-blue-600 text-white p-4 text-xl font-bold">News AI Dashboard</nav>
      <div className="container mx-auto p-4">
        <CategoryTabs onSelect={setCategory} />
        {loading && <div className="mt-4">Loading...</div>}
        {error && <div className="mt-4 text-red-500">{error}</div>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {articles.map(article => (
            <ArticleCard key={article.url} article={article} handleSummarize={() => {}} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App; 