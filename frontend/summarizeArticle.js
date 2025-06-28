export async function summarizeArticle(articleContent) {
  const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=" + import.meta.env.VITE_GEMINI_API_KEY, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: `Summarize the following article in 3 bullet points:\n${articleContent}` }] }]
    })
  });
  const result = await response.json();
  return result.candidates?.[0]?.content?.parts?.[0]?.text || "No summary found.";
}