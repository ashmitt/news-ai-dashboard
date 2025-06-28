const express = require('express');
const router = express.Router();
const summarizerController = require('../controllers/summarizer.controller');

// Route for article summarization
router.post('/summarize', summarizerController.summarizeArticle);

module.exports = router; 