import express from 'express';
const router = express.Router();

// Placeholder controller import
// import { summarizeArticle } from '../controllers/summarizer.controller.js';

router.post('/summarize', (req, res) => res.send('Summarize endpoint'));

export default router; 