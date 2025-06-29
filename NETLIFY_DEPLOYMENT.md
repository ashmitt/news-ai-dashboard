# Netlify Deployment Guide for NewsFlow AI Dashboard

## 🚀 Overview
This guide will walk you through deploying your NewsFlow AI Dashboard to Netlify, a popular platform for hosting static websites and SPAs.

## 📋 Prerequisites

### 1. GitHub Repository
- Your project must be pushed to GitHub
- Repository should be public or you need Netlify Pro for private repos

### 2. API Keys Ready
- News API key (will be set in Railway backend)
- Backend API URL (Railway deployment)

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
Create a `.env.production` file in the frontend directory:
```bash
# Frontend/.env.production
VITE_BACKEND_URL=https://your-railway-backend-url.railway.app
```

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
- **Build command**: `chmod +x build.sh && ./build.sh`
- **Publish directory**: `frontend/dist`
- **Base directory**: `.` (root)

#### Step 4: Set Environment Variables
In the Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add the following variable:
   ```
   VITE_BACKEND_URL=https://your-railway-backend-url.railway.app
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
- Redirects for SPA
- Security headers
- Cache headers
- Development settings

### _redirects (Alternative)
If you prefer, create `frontend/public/_redirects`:
```
/*    /index.html   200
```

## 🌍 Environment Variables

### Required Variables
| Variable | Description | Example |
|----------|-------------|---------|
| `VITE_BACKEND_URL` | Railway backend URL for news fetching and AI summarization | `https://your-app.railway.app` |

### Setting in Netlify
1. Go to Site settings → Environment variables
2. Add each variable with its value
3. Redeploy the site

## 🔄 Backend Deployment Options

### Option 1: Deploy Backend Separately
- Deploy backend to Heroku, Railway, or Render
- Update `VITE_API_URL` in Netlify environment variables

### Option 2: Use Netlify Functions
- Convert backend API to serverless functions
- Deploy functions alongside frontend

### Option 3: Use External API Services
- Use services like Supabase, Firebase, or similar
- Update frontend to use these services

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
- Ensure variables start with `VITE_`
- Redeploy after adding variables
- Check variable names match exactly

#### 3. API Calls Fail
- Check CORS settings on backend
- Verify API URLs are correct
- Ensure API keys are valid

#### 4. Routing Issues
- Verify `_redirects` file is in `frontend/public/`
- Check `netlify.toml` redirects configuration

### Debug Commands
```bash
# Test build locally
cd frontend && npm run build

# Check build output
ls -la frontend/dist/

# Test production build
cd frontend && npm run preview
```

## 📈 Monitoring and Analytics

### 1. Netlify Analytics
- Built-in analytics in Netlify dashboard
- Page views, unique visitors, bandwidth usage

### 2. Google Analytics
- Add Google Analytics tracking code
- Configure in `frontend/index.html`

### 3. Error Monitoring
- Set up error tracking (Sentry, LogRocket)
- Monitor API failures and user errors

## 🔄 Continuous Deployment

### Automatic Deploys
- Every push to `main` branch triggers deployment
- Preview deployments for pull requests
- Branch deployments for feature testing

### Manual Deploys
- Trigger deploys from Netlify dashboard
- Deploy specific branches or commits

## 🛡️ Security Considerations

### 1. Environment Variables
- Never commit API keys to repository
- Use Netlify environment variables
- Rotate keys regularly

### 2. CORS Configuration
- Configure backend to allow Netlify domain
- Use environment-specific CORS settings

### 3. Content Security Policy
- Add CSP headers in `netlify.toml`
- Restrict external resource loading

## 📚 Additional Resources

- [Netlify Documentation](https://docs.netlify.com/)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment Best Practices](https://create-react-app.dev/docs/deployment/)
- [Netlify Functions](https://docs.netlify.com/functions/overview/)

## 🎉 Success Checklist

- [ ] Repository pushed to GitHub
- [ ] Local build successful
- [ ] Environment variables configured
- [ ] Netlify site deployed
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active
- [ ] Backend API accessible
- [ ] All features working
- [ ] Performance optimized
- [ ] Analytics configured

Your NewsFlow AI Dashboard should now be live on Netlify! 🚀 