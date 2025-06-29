export async function summarizeArticle(content) {
  if (!content) {
    throw new Error('No content provided for summarization');
  }

  // Use environment variable for backend URL, fallback to localhost for development
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

  try {
    const response = await fetch(`${backendUrl}/api/summarize`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data.summary;
  } catch (error) {
    throw new Error(`Failed to summarize article: ${error.message}`);
  }
}