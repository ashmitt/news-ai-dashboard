import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  savedArticles: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SavedArticle' }]
});

export default mongoose.model('User', UserSchema); 