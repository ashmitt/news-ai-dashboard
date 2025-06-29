# Development Setup Guide for NewsFlow AI Dashboard

## 🚀 Quick Start for Local Development

This guide will help you set up the NewsFlow AI Dashboard for local development.

## 📋 Prerequisites

### 1. Node.js and npm
- Node.js version 18 or higher
- npm version 8 or higher

### 2. API Keys
- Google Gemini API key
- News API key

## 🔧 Backend Setup

### 1. Navigate to Backend Directory
```bash
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the backend directory:
```bash
# Backend/.env
PORT=5000
NODE_ENV=development
GEMINI_API_KEY=your_actual_gemini_api_key
NEWS_API_KEY=your_actual_news_api_key
```

### 4. Start Backend Server
```bash
npm start
```

The backend will be running at: `http://localhost:5000`

## 🎨 Frontend Setup

### 1. Open New Terminal and Navigate to Frontend
```bash
cd frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env.local` file in the frontend directory:
```bash
# Frontend/.env.local
VITE_BACKEND_URL=http://localhost:5000
```

### 4. Start Frontend Development Server
```bash
npm run dev
```

The frontend will be running at: `http://localhost:5173`

## 🧪 Testing Your Setup

### 1. Test Backend
Visit: `http://localhost:5000`
You should see: `{"status":"OK","message":"NewsFlow AI Backend is running!"}`

### 2. Test Frontend
Visit: `http://localhost:5173`
You should see the NewsFlow AI Dashboard with:
- Header with logo and title
- Category tabs
- News articles (if API keys are set)

### 3. Test API Endpoints
```bash
# Test health endpoint
curl http://localhost:5000/health

# Test news endpoint
curl http://localhost:5000/api/news/technology

# Test summarization endpoint
curl -X POST http://localhost:5000/api/summarize \
  -H "Content-Type: application/json" \
  -d '{"content":"Test article content"}'
```

## 🔑 Getting API Keys

### 1. Google Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key and add it to your backend `.env` file

### 2. News API Key
1. Go to [NewsAPI.org](https://newsapi.org)
2. Sign up for a free account
3. Get your API key from the dashboard
4. Add it to your backend `.env` file

## 🛠️ Development Commands

### Backend Commands
```bash
cd backend
npm start          # Start production server
npm run dev        # Start development server with nodemon (if available)
npm install        # Install dependencies
```

### Frontend Commands
```bash
cd frontend
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
npm run lint:css   # Run Stylelint
```

## 🔍 Debugging

### 1. Backend Logs
Check the terminal where you started the backend server for:
- Server startup messages
- API request logs
- Error messages

### 2. Frontend Logs
Check the browser console (F12) for:
- JavaScript errors
- API request logs
- Environment variable values

### 3. Network Tab
Use browser DevTools → Network tab to:
- Monitor API requests
- Check response status codes
- View request/response data

## 🚨 Common Issues

### 1. Port Already in Use
```bash
# Kill process on port 5000
npx kill-port 5000

# Or find and kill the process
lsof -ti:5000 | xargs kill -9
```

### 2. Environment Variables Not Loading
- Ensure `.env` files are in the correct directories
- Restart the development servers
- Check file names (should be `.env` not `.env.txt`)

### 3. CORS Errors
- Ensure backend is running on port 5000
- Check that frontend is using `http://localhost:5000`
- Verify CORS configuration in backend

### 4. API Key Errors
- Verify API keys are correct
- Check if API keys have proper permissions
- Ensure keys are not expired

## 📁 Project Structure

```
news-ai-dashboard/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── index.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── package.json
│   └── .env.local
└── README.md
```

## 🎯 Development Workflow

1. **Start Backend**: `cd backend && npm start`
2. **Start Frontend**: `cd frontend && npm run dev`
3. **Make Changes**: Edit files in your preferred editor
4. **Test Changes**: Refresh browser to see updates
5. **Debug**: Use browser console and backend logs

## 🚀 Next Steps

After successful local setup:
1. Test all features (news loading, AI summarization)
2. Make your desired changes
3. Test thoroughly
4. Commit and push changes
5. Deploy to production when ready

Happy coding! 🎉 