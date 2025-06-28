# News Dashboard with AI Summarizer

## Objective
A React-based web app that displays categorized news articles from NewsAPI and summarizes selected articles using Google Gemini API. Optionally, includes a Node.js + MongoDB backend for user authentication and saved articles.

## Tech Stack
- **Frontend:** ReactJS, Vite, Axios, TailwindCSS
- **APIs:** NewsAPI.org, Google Gemini API
- **Backend (Optional):** Node.js (Express), MongoDB Atlas, JWT, bcrypt

## Project Structure
```
news-ai-dashboard/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   └── index.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   ├── .env.local
│   └── index.css
└── README.md
```

## Setup Instructions

### Frontend
1. `cd frontend`
2. `npm install`
3. Add your API keys to `.env.local`:
   - `VITE_NEWS_API_KEY=your_newsapi_key`
   - `VITE_GEMINI_API_KEY=your_gemini_key`
4. `npm run dev` to start the development server.

### Backend (Optional)
1. `cd backend`
2. `npm install`
3. Add your environment variables to `.env`:
   - `MONGODB_URI=your_mongodb_uri`
   - `JWT_SECRET=your_jwt_secret`
   - `GEMINI_API_KEY=your_gemini_key`
4. `npm run dev` to start the backend server.

## Features
- Category tabs for news
- Article cards with summarization
- NewsAPI integration
- Google Gemini summarizer
- Responsive design, error handling, loaders
- (Optional) User authentication and saved articles

## License
MIT 