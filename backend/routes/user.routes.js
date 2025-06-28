import express from 'express';
const router = express.Router();

// Placeholder controller imports and middleware
// import { getUserSavedArticles, saveSummary } from '../controllers/user.controller.js';
// import authMiddleware from '../middleware/auth.js';

router.get('/saved', (req, res) => res.send('Get saved articles endpoint'));
router.post('/saved', (req, res) => res.send('Save summary endpoint'));

export default router; 