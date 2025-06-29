exports.handler = async (event, context) => {
  // Enable CORS
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
  };

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    const { category } = event.queryStringParameters || {};
    
    if (!category) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Category parameter is required' })
      };
    }

    const newsApiKey = process.env.NEWS_API_KEY;
    
    if (!newsApiKey) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'News API key not configured' })
      };
    }

    // Try top-headlines first (for specific categories)
    try {
      const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${newsApiKey}`;
      console.log('Trying top-headlines:', topHeadlinesUrl);
      const response = await fetch(topHeadlinesUrl);
      const data = await response.json();
      console.log('Top-headlines response status:', data.status);
      
      if (data.status === 'ok' && data.articles && data.articles.length > 0) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ articles: data.articles })
        };
      }
    } catch (error) {
      console.log('Top-headlines failed, trying everything endpoint');
    }

    // Fallback to everything endpoint (more flexible)
    try {
      const everythingUrl = `https://newsapi.org/v2/everything?q=${encodeURIComponent(category)}&sortBy=popularity&apiKey=${newsApiKey}`;
      console.log('Trying everything endpoint:', everythingUrl);
      const response = await fetch(everythingUrl);
      const data = await response.json();
      console.log('Everything response status:', data.status);
      
      if (data.status === 'ok' && data.articles) {
        return {
          statusCode: 200,
          headers,
          body: JSON.stringify({ articles: data.articles })
        };
      } else {
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: data.message || 'Failed to fetch news' })
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: `Failed to fetch news: ${error.message}` })
      };
    }
  } catch (error) {
    console.error('News fetching error:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
}; 