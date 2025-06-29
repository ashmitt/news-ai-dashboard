const express = require('express');
const router = express.Router();
const summarizerController = require('../controllers/summarizer.controller');

// Route for article summarization
router.post('/summarize', summarizerController.summarizeArticle);

// Route for fetching news (to solve CORS issues)
router.get('/news/:category', summarizerController.fetchNews);

module.exports = router; 