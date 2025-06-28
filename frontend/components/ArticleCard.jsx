function ArticleCard({ article, handleSummarize }) {
  return (
    <div className="card">
      <img src={article.urlToImage} alt="thumbnail" />
      <h2>{article.title}</h2>
      <p>{article.source.name}</p>
      <button onClick={() => handleSummarize(article)}>Summarize</button>
    </div>
  );
}
export default ArticleCard;