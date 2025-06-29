# 🚀 Railway Deployment Fix

## 🔧 The Problem
Railway is trying to install dependencies from the root directory instead of the backend directory, causing npm ci errors.

## ✅ The Solution

### **Method 1: Manual Configuration in Railway Dashboard**

1. **Go to your Railway project dashboard**
2. **Click on "Settings" tab**
3. **Find "Root Directory" setting**
4. **Change it to**: `backend`
5. **Save the changes**
6. **Go to "Deployments" tab**
7. **Click "Redeploy"**

### **Method 2: Create New Project with Backend Directory**

1. **Go to [railway.app](https://railway.app)**
2. **Click "Start a New Project"**
3. **Choose "Deploy from GitHub repo"**
4. **Select your repository**: `ashmitt/news-ai-dashboard`
5. **In the configuration screen:**
   - **Root Directory**: `backend`
   - **Framework Preset**: `Node.js`
   - **Build Command**: Leave empty
   - **Start Command**: Leave empty
6. **Click "Deploy Now"**

## 🎯 What This Does

- **Root Directory**: Tells Railway to use the `backend/` folder as the project root
- **Avoids conflicts**: Won't try to use root `package.json`
- **Uses correct dependencies**: Will install from `backend/package.json`

## 🔍 After Deployment

1. **Add Environment Variables**:
   ```
   NEWS_API_KEY=your_news_api_key
   GEMINI_API_KEY=your_gemini_api_key
   PORT=5000
   NODE_ENV=production
   ```

2. **Get Your Backend URL**:
   - Look for "Domains" section
   - Copy the URL (e.g., `https://your-app.railway.app`)

3. **Test Your Backend**:
   - Open the URL in browser
   - Should see: `{"status":"OK","message":"NewsFlow AI Backend is running!"}`

## 🎉 Success Indicators

✅ **Build completes without npm ci errors**
✅ **Backend URL shows JSON response**
✅ **No missing dependency errors**
✅ **Environment variables work**

## 📞 If Still Having Issues

1. **Delete the Railway project**
2. **Create a new project**
3. **Use Method 2 above**
4. **Make sure to set Root Directory to `backend`**

The key is setting the **Root Directory** to `backend` in Railway settings! 🚀 