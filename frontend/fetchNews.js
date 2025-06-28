export async function fetchNews(category) {
  const res = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`);
  const data = await res.json();
  return data.articles;
}