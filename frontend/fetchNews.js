export async function fetchNews(category) {
  try {
    const response = await fetch(`/.netlify/functions/news?category=${encodeURIComponent(category)}`);
    
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('News response:', data);
    
    if (data.articles && data.articles.length > 0) {
      return data.articles;
    } else {
      throw new Error('No articles found');
    }
  } catch (error) {
    console.error('News fetching error:', error);
    throw new Error(`Failed to fetch news: ${error.message}`);
  }
}