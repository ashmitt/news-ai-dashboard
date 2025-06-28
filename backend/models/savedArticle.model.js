import mongoose from 'mongoose';

const SavedArticleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  articleId: { type: String, required: true },
  summary: { type: String, required: true },
  savedAt: { type: Date, default: Date.now }
});

export default mongoose.model('SavedArticle', SavedArticleSchema); 