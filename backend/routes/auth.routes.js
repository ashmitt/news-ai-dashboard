import express from 'express';
const router = express.Router();

// Placeholder controller imports
// import { registerUser, loginUser } from '../controllers/auth.controller.js';

router.post('/signup', (req, res) => res.send('Signup endpoint'));
router.post('/login', (req, res) => res.send('Login endpoint'));

export default router; 