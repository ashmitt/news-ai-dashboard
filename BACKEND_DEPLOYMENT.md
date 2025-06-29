# Backend Deployment Guide for NewsFlow AI Dashboard

## 🚀 Overview
This guide will walk you through deploying your NewsFlow AI Backend to Railway, a modern platform for hosting Node.js applications.

## 📋 Prerequisites

### 1. GitHub Repository
- Your project must be pushed to GitHub
- Repository should be public or you need Railway Pro for private repos

### 2. API Keys Ready
- Google Gemini API key
- News API key (for fetching news articles)

### 3. Railway Account
- Sign up at [railway.app](https://railway.app)
- Connect your GitHub account

## 🔧 Pre-Deployment Setup

### 1. Test Local Build
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Test the server
npm start
```

### 2. Environment Variables
Create a `.env` file in the backend directory:
```bash
# Backend/.env
PORT=5000
NODE_ENV=production
GEMINI_API_KEY=your_gemini_api_key_here
NEWS_API_KEY=your_news_api_key_here
```

## 🌐 Deployment Steps

### Step 1: Connect to GitHub
1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Choose "Deploy from GitHub repo"
4. Select your `news-ai-dashboard` repository

### Step 2: Configure Build Settings
Railway will auto-detect the settings, but verify:
- **Root Directory**: `backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### Step 3: Set Environment Variables
In the Railway dashboard:
1. Go to your project
2. Click on the "Variables" tab
3. Add the following variables:
   ```
   PORT=5000
   NODE_ENV=production
   GEMINI_API_KEY=your_actual_gemini_api_key
   NEWS_API_KEY=your_actual_news_api_key
   ```

### Step 4: Deploy
1. Railway will automatically deploy when you push to GitHub
2. Wait for build to complete
3. Your API will be live at a Railway subdomain

## 🔧 Configuration Files

### railway.json
The `railway.json` file in your project root contains:
- Build settings
- Service configuration
- Environment variables

### package.json
Ensure your backend `package.json` has:
- Correct start script
- All required dependencies
- Proper Node.js version

## 🌍 Environment Variables

### Required Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `5000` |
| `NODE_ENV` | Environment | `production` |
| `GEMINI_API_KEY` | Google Gemini API key | `xyz789uvw012` |
| `NEWS_API_KEY` | News API key | `abc123def456` |

### Setting in Railway
1. Go to your project → Variables tab
2. Add each variable with its value
3. Redeploy the project

## 🔄 API Endpoints

### Health Check
- `GET /` - Health check
- `GET /health` - Detailed health status

### News API
- `GET /api/news/:category` - Fetch news by category

### Summarization API
- `POST /api/summarize` - Summarize article content

## 🎯 Custom Domain Setup

### 1. Add Custom Domain
1. Go to your project → Settings
2. Click "Custom Domains"
3. Add your domain
4. Configure DNS records

### 2. SSL Certificate
- Railway provides free SSL certificates
- Automatically configured for custom domains

## 📊 Monitoring

### 1. Logs
- View real-time logs in Railway dashboard
- Monitor application performance

### 2. Metrics
- Track request volume
- Monitor response times
- Set up alerts

## 🔍 Troubleshooting

### Common Issues

#### 1. Build Fails
```bash
# Check build logs in Railway dashboard
# Common fixes:
npm install --legacy-peer-deps
# or
npm install --force
```

#### 2. Environment Variables Not Working
- Ensure variables are set in Railway dashboard
- Redeploy after adding variables
- Check variable names match exactly

#### 3. API Calls Fail
- Check CORS settings
- Verify API URLs are correct
- Ensure API keys are valid

#### 4. Port Issues
- Ensure PORT is set to 5000
- Check Railway's port configuration
- Verify public networking is enabled

## 🚀 Next Steps

After successful deployment:
1. Copy your Railway app URL
2. Update frontend environment variables
3. Deploy frontend to Netlify
4. Test the full application

## 📞 Support

If you encounter issues:
1. Check Railway documentation
2. Review build logs
3. Verify environment variables
4. Test API endpoints manually 