const fetchNews = async (req, res) => {
  try {
    const { category } = req.params;
    const newsApiKey = process.env.NEWS_API_KEY;
    
    if (!newsApiKey) {
      return res.status(500).json({ error: 'News API key not configured' });
    }

    // Try top-headlines first (for specific categories)
    try {
      const topHeadlinesUrl = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${newsApiKey}`;
      console.log('Trying top-headlines:', topHeadlinesUrl);
      const response = await fetch(topHeadlinesUrl);
      const data = await response.json();
      console.log('Top-headlines response status:', data.status);
      
      if (data.status === 'ok' && data.articles && data.articles.length > 0) {
        return res.json({ articles: data.articles });
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
        return res.json({ articles: data.articles });
      } else {
        return res.status(400).json({ error: data.message || 'Failed to fetch news' });
      }
    } catch (error) {
      return res.status(500).json({ error: `Failed to fetch news: ${error.message}` });
    }
  } catch (error) {
    console.error('News fetching error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const summarizeArticle = async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }

    const geminiApiKey = process.env.GEMINI_API_KEY;
    if (!geminiApiKey) {
      return res.status(500).json({ error: 'Gemini API key not configured' });
    }

    const prompt = `Please provide a concise, informative summary of the following article content in 2-3 paragraphs. Focus on the key points and main ideas:

${content}

Summary:`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: prompt }]
          }]
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API error:', response.status, errorData);
      return res.status(response.status).json({ 
        error: 'Failed to generate summary',
        details: errorData
      });
    }

    const data = await response.json();
    const summary = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No summary generated';

    res.json({ summary });
  } catch (error) {
    console.error('Summarization error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  summarizeArticle,
  fetchNews
}; 