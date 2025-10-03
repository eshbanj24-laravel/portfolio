# GitHub Pages Deployment Guide

This guide explains how to deploy your Vue.js portfolio to GitHub Pages.

## 🚀 Quick Deployment Steps

### Method 1: Manual Deployment (Recommended)

1. **Build for Production**
   ```bash
   npm run build
   ```

2. **Upload Files**
   - Copy **all contents** from the `dist/` folder
   - Upload them to your GitHub Pages branch (usually `gh-pages` or `main`)
   - Make sure `.nojekyll` file is included

3. **Configure GitHub Pages**
   - Go to: Repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: Select your deployment branch
   - Folder: `/ (root)`

### Method 2: Using Deployment Script

1. **Run Deployment Script**
   ```bundles
   npm run deploy:github
   ```

2. **Upload Contents**
   - Copy everything from `dist/` folder
   - Upload to your GitHub Pages branch

## 📁 Important Files for GitHub Pages

- `index.html` - Main entry point
- `/assets/` folder - CSS, JS, and other assets  
- `.nojekyll` - Prevents Jekyll processing
- `favicon.svg` - Site icon

## 🌐 URL Structure

Once deployed, your portfolio will be available at:
- `https://yourusername.github.io/repositoryname/` (root path)
- `https://yourusername.github.io/repositoryname/about` 
- `https://yourusername.github.io/repositoryname/projects`
- `https://yourusername.github.io/repositoryname/resume`
- `https://yourusername.github.io/repositoryname/contact`

## ⚙️ Configuration Notes

- **Base Path**: Configured to use root (`/`) for GitHub Pages
- **Development**: Uses `/portfolio/` for local development
- **Assets**: Automatically served from correct paths
- **Router**: Handles all routes properly in production

## 🔧 Troubleshooting

### Issue: Assets Not Loading
**Solution**: Make sure `.nojekyll` is in your deployment folder

### Issue: 404 on Page Refresh
**Solution**: GitHub Pages requires `index.html` at root level (handled automatically)

### Issue: Wrong Base Path
**Solution**: Check that VITE_BASE_URL is set to `/` for production

## 📝 Steps Summary

1. ✅ Run `npm run build`
2. ✅ Copy `dist/` contents to GitHub Pages branch
3. ✅ Include `.nojekyll` file
4. ✅ Configure GitHub Pages settings
5. ✅ Access your portfolio at GitHub Pages URL

Your portfolio is now live on GitHub Pages! 🎉
