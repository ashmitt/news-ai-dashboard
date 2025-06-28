# 🌟 NewsFlow AI

Your AI-Powered News Companion with Real-time Summarization

![NewsFlow AI](https://img.shields.io/badge/NewsFlow-AI-blue?style=for-the-badge&logo=react)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js)
![Gemini AI](https://img.shields.io/badge/Gemini-AI-4285F4?style=for-the-badge&logo=google)

## ✨ Features

- 📰 **Real-time News**: Get the latest news from multiple categories
- 🤖 **AI Summarization**: Instant AI-powered article summaries using Google Gemini
- 📱 **Mobile Responsive**: Beautiful design that works on all devices
- 🎨 **Modern UI**: Glass morphism design with smooth animations
- ⚡ **Fast Performance**: Optimized for speed and user experience
- 🔄 **Live Updates**: Real-time news updates with live indicators

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Gemini API Key
- NewsAPI Key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd newsflow-ai
   ```

2. **Install dependencies**
   ```bash
   npm run install-all
   ```

3. **Environment Setup**

   Create `.env` file in the backend directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   PORT=5000
   ```

   Create `.env.local` file in the frontend directory:
   ```env
   VITE_NEWS_API_KEY=your_newsapi_key_here
   ```

4. **Start the application**
   ```bash
   npm run dev
   ```

   This will start both frontend (http://localhost:5173) and backend (http://localhost:5000)

## 🏗️ Project Structure

```
newsflow-ai/
├── frontend/                 # React frontend application
│   ├── components/          # Reusable UI components
│   ├── App.jsx             # Main application component
│   ├── index.css           # Global styles and animations
│   └── package.json        # Frontend dependencies
├── backend/                 # Node.js backend API
│   ├── controllers/        # API controllers
│   ├── routes/            # API routes
│   ├── index.js           # Server entry point
│   └── package.json       # Backend dependencies
└── README.md              # Project documentation
```

## 🎯 Usage

1. **Browse News**: Select from different categories (Business, Technology, Sports, Health, etc.)
2. **Read Articles**: Click "Read More" to view full articles
3. **AI Summarize**: Click the "🤖 AI" button on any article for instant AI-powered summaries
4. **Mobile Friendly**: Open on your phone for a great mobile experience

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI framework
- **Vite** - Fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **Glass Morphism** - Modern design effects

### Backend
- **Node.js** - JavaScript runtime
- **Express** - Web framework
- **Google Gemini API** - AI summarization
- **CORS** - Cross-origin resource sharing

### APIs
- **NewsAPI** - Real-time news data
- **Google Gemini** - AI text summarization

## 🎨 Design Features

- **Glass Morphism**: Beautiful translucent effects
- **Gradient Backgrounds**: Dynamic color schemes
- **Smooth Animations**: CSS transitions and keyframes
- **Responsive Grid**: Adaptive layouts for all screen sizes
- **Modern Typography**: Inter and Poppins fonts
- **Hover Effects**: Interactive card animations

## 📱 Mobile Experience

NewsFlow AI is fully optimized for mobile devices:
- Touch-friendly interface
- Responsive grid layouts
- Optimized images and loading
- Smooth scrolling and animations
- Mobile-first design approach

## 🔧 Development

### Available Scripts

```bash
# Start both frontend and backend
npm run dev

# Start only backend
npm run backend

# Start only frontend
npm run frontend

# Build for production
npm run build

# Install all dependencies
npm run install-all
```

### API Endpoints

- `GET /health` - Health check
- `POST /api/summarize` - Article summarization

## 🌟 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Google Gemini API for AI capabilities
- NewsAPI for news data
- React and Vite communities
- TailwindCSS for styling utilities

---

**Built with ❤️ and AI by the NewsFlow AI** 