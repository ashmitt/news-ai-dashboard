# 🚀 Simple Railway Backend Deployment Guide

## 📋 What You Need Before Starting

1. **News API Key** from [newsapi.org](https://newsapi.org/)
2. **Google Gemini API Key** from [ai.google.dev](https://ai.google.dev/)
3. **GitHub account** (you already have this)
4. **Railway account** (we'll create this)

## 🎯 Step-by-Step Deployment

### **Step 1: Get Your API Keys**

#### News API Key:
1. Go to [newsapi.org](https://newsapi.org/)
2. Click "Get API Key"
3. Sign up for free account
4. Copy your API key

#### Gemini API Key:
1. Go to [ai.google.dev](https://ai.google.dev/)
2. Click "Get API Key"
3. Create a new project
4. Copy your API key

### **Step 2: Deploy to Railway**

#### 1. Go to Railway
- Open [railway.app](https://railway.app)
- Click "Start a New Project"

#### 2. Connect GitHub
- Click "Deploy from GitHub repo"
- Sign in with your GitHub account
- Authorize Railway to access your repos

#### 3. Select Your Repository
- Find: `ashmitt/news-ai-dashboard`
- Click on it
- Click "Deploy Now"

#### 4. Wait for Initial Deploy
- Railway will start building
- This might take 2-3 minutes
- You'll see build logs

### **Step 3: Configure Your Backend**

#### 1. Go to Project Settings
- In your Railway dashboard
- Click "Settings" tab

#### 2. Set Root Directory
- Find "Root Directory"
- Change it to: `backend`
- Click "Save"

#### 3. Add Environment Variables
- Click "Variables" tab
- Add these one by one:

```
NEWS_API_KEY=your_news_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
PORT=5000
NODE_ENV=production
```

#### 4. Redeploy
- Go to "Deployments" tab
- Click "Redeploy"
- Wait for build to complete

### **Step 4: Get Your Backend URL**

#### 1. Find Your URL
- In Railway dashboard
- Look for "Domains" section
- Copy the URL (looks like: `https://your-app-name.railway.app`)

#### 2. Test Your Backend
- Open the URL in browser
- You should see: `{"status":"OK","message":"NewsFlow AI Backend is running!"}`

## 🔍 Troubleshooting

### **Build Fails**
- Check the build logs in Railway
- Make sure all files are committed to GitHub
- Verify `backend/package.json` exists

### **Environment Variables Not Working**
- Make sure you added them in Railway dashboard
- Check variable names are exactly correct
- Redeploy after adding variables

### **Backend URL Not Working**
- Wait for deployment to complete
- Check Railway logs for errors
- Verify the URL is correct

## 🎉 Success Indicators

✅ **Build completes successfully**
✅ **Backend URL shows JSON response**
✅ **No errors in Railway logs**
✅ **Environment variables are set**

## 🔗 Next Steps

Once your backend is deployed:

1. **Copy your backend URL**
2. **Deploy frontend to Netlify**
3. **Set `VITE_API_URL` in Netlify to your backend URL**
4. **Test the full application**

## 📞 Need Help?

If you get stuck:
1. Check Railway build logs
2. Make sure all files are committed to GitHub
3. Verify API keys are correct
4. Try redeploying

Your backend URL will look like:
`https://newsflow-backend-production-1234.up.railway.app`

This is what you'll use as your `VITE_API_URL` in Netlify! 🚀 