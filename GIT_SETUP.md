# Git Setup Guide for NewsFlow AI Dashboard

## 📋 Overview
This document provides guidelines for working with Git in the NewsFlow AI Dashboard project.

## 🚀 Initial Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd news-ai-dashboard
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

## 📁 Project Structure
```
news-ai-dashboard/
├── .git/                    # Git repository data
├── .gitignore              # Git ignore rules
├── .gitattributes          # Git attributes for file handling
├── frontend/               # React frontend application
│   ├── components/         # React components
│   ├── pages/             # Page components (empty - tracked with .gitkeep)
│   ├── node_modules/      # Frontend dependencies (ignored)
│   └── dist/              # Build output (ignored)
├── backend/                # Node.js backend application
│   ├── controllers/       # Route controllers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── node_modules/     # Backend dependencies (ignored)
│   └── dist/             # Build output (ignored)
└── node_modules/          # Root dependencies (ignored)
```

## 🔧 Git Configuration

### 1. Set Up Your Identity
```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### 2. Configure Line Endings
The `.gitattributes` file handles line ending normalization automatically.

## 📝 Common Git Commands

### Basic Workflow
```bash
# Check status
git status

# Add files
git add .                    # Add all changes
git add frontend/           # Add specific directory
git add -p                  # Interactive add

# Commit changes
git commit -m "Descriptive commit message"

# Push changes
git push origin main
```

### Branching
```bash
# Create and switch to new branch
git checkout -b feature/new-feature

# Switch between branches
git checkout main
git checkout feature/new-feature

# List branches
git branch

# Merge branch
git checkout main
git merge feature/new-feature

# Delete branch
git branch -d feature/new-feature
```

### Stashing
```bash
# Stash changes
git stash

# List stashes
git stash list

# Apply stash
git stash pop

# Apply specific stash
git stash apply stash@{0}
```

## 🚫 Ignored Files

The following files and directories are ignored by Git:

### Dependencies
- `node_modules/` (all directories)
- `package-lock.json` (lock files)

### Build Outputs
- `dist/`
- `build/`
- `frontend/dist/`
- `backend/dist/`

### Environment Files
- `.env*` (all environment files)
- `frontend/.env*`
- `backend/.env*`

### IDE Files
- `.vscode/`
- `.idea/`
- `*.swp`, `*.swo`

### OS Files
- `.DS_Store` (macOS)
- `Thumbs.db` (Windows)

### Logs and Cache
- `*.log`
- `.vite/`
- `.cache/`
- `coverage/`

## 🔒 Security Best Practices

### 1. Never Commit Sensitive Data
- API keys
- Database credentials
- Private keys
- Environment variables

### 2. Use Environment Files
Create `.env.example` files with placeholder values:
```bash
# .env.example
NEWS_API_KEY=your_news_api_key_here
GEMINI_API_KEY=your_gemini_api_key_here
MONGODB_URI=your_mongodb_connection_string_here
```

### 3. Check Before Committing
```bash
# Review what will be committed
git diff --cached

# Check for sensitive data
git diff --cached | grep -i "api_key\|password\|secret"
```

## 📋 Commit Message Guidelines

### Format
```
type(scope): description

[optional body]

[optional footer]
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples
```
feat(frontend): add dark theme toggle
fix(backend): resolve API endpoint 404 error
docs(readme): update installation instructions
style(css): improve mobile responsiveness
refactor(components): extract reusable card component
```

## 🔄 Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push branch
git push origin feature/feature-name

# Create pull request (on GitHub/GitLab)
```

### 2. Bug Fixes
```bash
# Create hotfix branch
git checkout -b hotfix/bug-description

# Fix and commit
git add .
git commit -m "fix: resolve specific bug"

# Push and create PR
git push origin hotfix/bug-description
```

## 🛠️ Troubleshooting

### Reset Changes
```bash
# Reset working directory
git reset --hard HEAD

# Reset specific file
git checkout -- filename

# Reset to specific commit
git reset --hard commit-hash
```

### Fix Line Endings
```bash
# Re-normalize line endings
git add --renormalize .
git commit -m "fix: normalize line endings"
```

### Clean Repository
```bash
# Remove untracked files
git clean -f

# Remove untracked directories
git clean -fd

# Preview what will be removed
git clean -n
```

## 📚 Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf) 