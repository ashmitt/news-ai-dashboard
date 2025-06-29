# Backend Deployment Guide for NewsFlow AI Dashboard

## 🚀 Overview
This guide will help you deploy your Node.js backend API to various platforms so your Netlify frontend can communicate with it.

## 📋 Prerequisites

### 1. Backend Code Ready
- Your backend should be in the `backend/` folder
- All dependencies should be in `package.json`
- Environment variables should be configured

### 2. API Keys
- News API key
- Google Gemini API key
- MongoDB connection string (if using database)

### 3. Platform Accounts
- Railway, Heroku, or Render account

## 🌐 Deployment Options

### Option 1: Railway (Recommended - Free Tier)

#### Step 1: Sign Up
1. Go to [railway.app](https://railway.app)
2. Sign up with your GitHub account
3. Create a new project

#### Step 2: Connect Repository
1. Click "Deploy from GitHub repo"
2. Select your `news-ai-dashboard` repository
3. Choose the `backend` folder as the source

#### Step 3: Configure Environment Variables
In Railway dashboard, add these variables:
```
NEWS_API_KEY=your_news_api_key
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
NODE_ENV=production
```

#### Step 4: Deploy
1. Railway will automatically detect it's a Node.js app
2. Build and deploy will start automatically
3. Your backend URL will be: `https://your-app-name.railway.app`

### Option 2: Heroku (Free Tier Discontinued)

#### Step 1: Install Heroku CLI
```bash
# Windows
# Download from https://devcenter.heroku.com/articles/heroku-cli

# Or use npm
npm install -g heroku
```

#### Step 2: Login and Create App
```bash
heroku login
heroku create your-backend-app-name
```

#### Step 3: Set Environment Variables
```bash
heroku config:set NEWS_API_KEY=your_news_api_key
heroku config:set GEMINI_API_KEY=your_gemini_api_key
heroku config:set NODE_ENV=production
```

#### Step 4: Deploy
```bash
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

### Option 3: Render (Free Tier Available)

#### Step 1: Sign Up
1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Create a new Web Service

#### Step 2: Connect Repository
1. Connect your GitHub repository
2. Select the `backend` folder
3. Choose "Node" as the runtime

#### Step 3: Configure Settings
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment**: Node

#### Step 4: Set Environment Variables
Add these in Render dashboard:
```
NEWS_API_KEY=your_news_api_key
GEMINI_API_KEY=your_gemini_api_key
PORT=10000
NODE_ENV=production
```

## 🔧 Backend Configuration

### 1. Update package.json
Make sure your `backend/package.json` has:
```json
{
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  },
  "engines": {
    "node": ">=18.0.0"
  }
}
```

### 2. Environment Variables
Create `.env` file in backend folder:
```bash
# Backend/.env
NEWS_API_KEY=your_news_api_key
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/newsflow_ai
```

### 3. CORS Configuration
Update your backend to allow Netlify domain:
```javascript
// In your backend/index.js
const cors = require('cors');

app.use(cors({
  origin: [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://your-netlify-app.netlify.app',
    'https://your-custom-domain.com'
  ],
  credentials: true
}));
```

## 🌍 Environment Variables for Different Platforms

### Railway
```
NEWS_API_KEY=your_news_api_key
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
NODE_ENV=production
```

### Heroku
```
NEWS_API_KEY=your_news_api_key
GEMINI_API_KEY=your_gemini_api_key
NODE_ENV=production
```

### Render
```
NEWS_API_KEY=your_news_api_key
GEMINI_API_KEY=your_gemini_api_key
PORT=10000
NODE_ENV=production
```

## 🔗 Frontend Configuration

### 1. Update Frontend Environment Variables
In your Netlify dashboard, set:
```
VITE_API_URL=https://your-backend-url.com
```

### 2. Update API Calls
Make sure your frontend uses the environment variable:
```javascript
// In your frontend API calls
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

// Example usage
const response = await fetch(`${API_URL}/api/summarize`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ content: articleContent })
});
```

## 🧪 Testing Your Backend

### 1. Test Locally
```bash
cd backend
npm install
npm start
```

### 2. Test Deployed Backend
```bash
# Test the health endpoint
curl https://your-backend-url.com/

# Test the summarize endpoint
curl -X POST https://your-backend-url.com/api/summarize \
  -H "Content-Type: application/json" \
  -d '{"content":"Test article content"}'
```

### 3. Test from Frontend
- Open your Netlify site
- Try to summarize an article
- Check browser console for errors

## 🔍 Troubleshooting

### Common Issues

#### 1. Build Fails
```bash
# Check if all dependencies are in package.json
npm install

# Check Node.js version
node --version
```

#### 2. Environment Variables Not Working
- Verify variable names match exactly
- Check if variables are set in platform dashboard
- Restart the application after setting variables

#### 3. CORS Errors
- Update CORS configuration to include your Netlify domain
- Check if backend URL is correct in frontend

#### 4. API Calls Fail
- Verify backend is running and accessible
- Check API endpoints are correct
- Ensure API keys are valid

### Debug Commands
```bash
# Check backend logs
# Railway: View logs in dashboard
# Heroku: heroku logs --tail
# Render: View logs in dashboard

# Test backend locally
curl http://localhost:5000/

# Test specific endpoint
curl http://localhost:5000/api/summarize
```

## 📊 Monitoring

### 1. Platform Dashboards
- Railway: Built-in monitoring and logs
- Heroku: Application metrics and logs
- Render: Performance monitoring

### 2. Health Checks
- Set up health check endpoints
- Monitor response times
- Set up alerts for downtime

## 🔄 Continuous Deployment

### Automatic Deploys
- Connect GitHub repository
- Every push to main branch triggers deployment
- Preview deployments for pull requests

### Manual Deploys
- Trigger deploys from platform dashboard
- Deploy specific branches or commits

## 🛡️ Security Considerations

### 1. Environment Variables
- Never commit API keys to repository
- Use platform environment variables
- Rotate keys regularly

### 2. CORS Configuration
- Only allow necessary domains
- Use environment-specific CORS settings
- Avoid using `*` for production

### 3. Rate Limiting
- Implement rate limiting on API endpoints
- Protect against abuse
- Monitor API usage

## 📚 Platform-Specific Guides

### Railway
- [Railway Documentation](https://docs.railway.app/)
- [Node.js on Railway](https://docs.railway.app/deploy/deployments)

### Heroku
- [Heroku Documentation](https://devcenter.heroku.com/)
- [Deploying Node.js Apps](https://devcenter.heroku.com/articles/deploying-nodejs)

### Render
- [Render Documentation](https://render.com/docs)
- [Deploy a Node.js App](https://render.com/docs/deploy-node-express-app)

## 🎉 Success Checklist

- [ ] Backend deployed successfully
- [ ] Environment variables configured
- [ ] CORS settings updated
- [ ] API endpoints working
- [ ] Frontend can connect to backend
- [ ] AI summarization working
- [ ] News API integration working
- [ ] Monitoring set up
- [ ] Health checks configured

## 🔗 Example Backend URLs

After deployment, your backend URL will look like:
- **Railway**: `https://newsflow-backend.railway.app`
- **Heroku**: `https://newsflow-backend.herokuapp.com`
- **Render**: `https://newsflow-backend.onrender.com`

Use this URL as your `VITE_API_URL` in Netlify environment variables!

Your backend is now ready for deployment! 🚀 