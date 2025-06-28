export async function summarizeArticle(articleContent) {
  const response = await fetch("http://localhost:5000/api/summarizer/summarize", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: articleContent })
  });
  const result = await response.json();
  return result.summary || "No summary found.";
}