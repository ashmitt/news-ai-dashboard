export async function fetchNews(category) {
  const apiKey = import.meta.env.VITE_NEWS_API_KEY;
  if (!apiKey) {
    throw new Error('NewsAPI key is missing. Please set VITE_NEWS_API_KEY in your .env.local file.');
  }

  // Try top-headlines first (for specific categories)
  try {
    const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`;
    console.log('Trying top-headlines:', topHeadlinesUrl);
    const res = await fetch(topHeadlinesUrl);
    const data = await res.json();
    console.log('Top-headlines response:', data);
    
    if (data.status === 'ok' && data.articles && data.articles.length > 0) {
      return data.articles;
    }
  } catch (error) {
    console.log('Top-headlines failed, trying everything endpoint');
  }

  // Fallback to everything endpoint (more flexible)
  try {
    const everythingUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(category)}&sortBy=popularity&apiKey=${apiKey}`;
    console.log('Trying everything endpoint:', everythingUrl);
    const res = await fetch(everythingUrl);
    const data = await res.json();
    console.log('Everything response:', data);
    
    if (data.status === 'ok' && data.articles) {
      return data.articles;
    } else {
      throw new Error(data.message || 'Failed to fetch news');
    }
  } catch (error) {
    throw new Error(`Failed to fetch news: ${error.message}`);
  }
}