# Netlify Deployment Guide for NewsFlow AI Dashboard

## 🚀 Overview
This guide will walk you through deploying your NewsFlow AI Dashboard to Netlify using Netlify Functions for the backend API.

## 📋 Prerequisites

### 1. GitHub Repository
- Your project must be pushed to GitHub
- Repository should be public or you need Netlify Pro for private repos

### 2. API Keys Ready
- News API key
- Google Gemini API key

### 3. Netlify Account
- Sign up at [netlify.com](https://netlify.com)
- Connect your GitHub account

## 🔧 Pre-Deployment Setup

### 1. Test Local Build
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Test the build
npm run build

# Check if build was successful
ls dist/
```

### 2. Environment Variables
No frontend environment variables needed! The frontend now uses Netlify Functions directly.

## 🌐 Deployment Methods

### Method 1: Deploy via Netlify UI (Recommended)

#### Step 1: Connect to GitHub
1. Go to [app.netlify.com](https://app.netlify.com)
2. Click "New site from Git"
3. Choose "GitHub" as your Git provider
4. Authorize Netlify to access your GitHub account

#### Step 2: Select Repository
1. Find and select `news-ai-dashboard` repository
2. Click "Deploy site"

#### Step 3: Configure Build Settings
Netlify will auto-detect the settings from `netlify.toml`, but verify:
- **Build command**: `cd frontend && npm install && npm run build`
- **Publish directory**: `frontend/dist`
- **Base directory**: `.` (root)

#### Step 4: Set Environment Variables
In the Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add the following variables:
   ```
   NEWS_API_KEY=your_actual_news_api_key
   GEMINI_API_KEY=your_actual_gemini_api_key
   ```

#### Step 5: Deploy
1. Click "Deploy site"
2. Wait for build to complete (usually 2-3 minutes)
3. Your site will be live at a Netlify subdomain

### Method 2: Deploy via Netlify CLI

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Login to Netlify
```bash
netlify login
```

#### Step 3: Initialize Netlify
```bash
netlify init
```

#### Step 4: Deploy
```bash
netlify deploy --prod
```

## 🔧 Configuration Files

### netlify.toml
The `netlify.toml` file in your project root contains:
- Build settings
- Functions configuration
- Redirects for SPA
- Security headers
- Cache headers
- Development settings

### Functions
Your Netlify Functions are located in `netlify/functions/`:
- `news.js` - Handles news fetching
- `summarize.js` - Handles AI summarization

## 🌍 Environment Variables

### Required Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `NEWS_API_KEY` | News API key for fetching news articles | `abc123def456` |
| `GEMINI_API_KEY` | Google Gemini API key for AI summarization | `xyz789uvw012` |

### Setting in Netlify
1. Go to Site settings → Environment variables
2. Add each variable with its value
3. Redeploy the site

## 🔄 API Endpoints

### News API
- `GET /.netlify/functions/news?category=technology` - Fetch news by category

### Summarization API
- `POST /.netlify/functions/summarize` - Summarize article content

## 🎯 Custom Domain Setup

### 1. Add Custom Domain
1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter your domain name
4. Follow DNS configuration instructions

### 2. SSL Certificate
- Netlify provides free SSL certificates
- Automatically configured for custom domains

## 📊 Performance Optimization

### 1. Enable Build Caching
```toml
[build.environment]
  NODE_VERSION = "18"
  NPM_FLAGS = "--cache .npm"
```

### 2. Optimize Images
- Use WebP format
- Implement lazy loading
- Use appropriate image sizes

### 3. Enable Compression
- Netlify automatically enables gzip compression
- Configure Brotli compression if needed

## 🔍 Troubleshooting

### Common Issues

#### 1. Build Fails
```bash
# Check build logs in Netlify dashboard
# Common fixes:
npm install --legacy-peer-deps
# or
npm install --force
```

#### 2. Environment Variables Not Working
- Ensure variables are set in Netlify dashboard
- Redeploy after adding variables
- Check variable names match exactly

#### 3. Functions Not Working
- Check function logs in Netlify dashboard
- Verify API keys are valid
- Check function syntax and exports

#### 4. CORS Errors
- Functions handle CORS automatically
- No additional configuration needed

## 🚀 Benefits of Netlify Functions

### 1. Single Platform
- Frontend and backend on same platform
- No external dependencies

### 2. No CORS Issues
- Same domain for all requests
- Automatic CORS handling

### 3. Serverless
- Pay only for what you use
- Automatic scaling

### 4. Easy Deployment
- Deploy with git push
- Automatic function deployment

## 🎉 Success Checklist

- [ ] Frontend deployed successfully
- [ ] Environment variables configured
- [ ] Functions working properly
- [ ] News API integration working
- [ ] AI summarization working
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active

Your NewsFlow AI Dashboard is now fully deployed on Netlify! 🚀 