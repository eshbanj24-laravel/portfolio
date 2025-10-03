# 🚀 GitHub Pages Deployment Guide - Two Branch Setup

## Repository Setup
- **Repository**: eshbanj24-laravel/portfolio
- **Main Branch**: Contains source code
- **gh-pages Branch**: Contains built files only
- **URL**: https://eshbanj24-laravel.github.io/portfolio

---

## 📋 Step-by-Step Deployment

### 1. Build for GitHub Pages
```bash
npm run deploy:gh
```

### 2. Upload to gh-pages Branch
1. **Go to Repository**: https://github.com/eshbanj24-laravel/portfolio
2. **Switch Branch**: Click branch dropdown → select `gh-pages`
3. **Delete Old Files**: Delete all existing files in gh-pages branch
4. **Upload New Files**: Upload ALL contents from `dist/` folder:
   - `index.html`
   - `.nojekyll` (CRITICAL!)
   - `assets/` folder
   - `favicon.svg`
5. **Commit Changes**: Add commit message "Deploy to GitHub Pages"

### 3. Configure GitHub Pages
1. **Repository Settings** → **Pages**
2. **Source**: Deploy from a branch
3. **Branch**: `gh-pages`
4. **Folder**: `/ (root)`
5. **Save Settings**

---

## 🔧 Configuration Details

### Base Path: `/portfolio/`
- GitHub Pages URL includes repository name
- All assets load from `/portfolio/assets/`
- Router handles `/portfolio/` prefix

### Critical Files:
- ✅ `.nojekyll` - Prevents Jekyll processing
- ✅ `index.html` - Main entry point
- ✅ `assets/` - CSS & JS files
- ✅ `favicon.svg` - Site icon

---

## 🌐 Live URLs

After deployment:
- **Home**: https://eshbanj24-laravel.github.io/portfolio/
- **About**: https://eshbanj24-laravel.github.io/portfolio/about
- **Projects**: https://eshbanj24-laravel.github.io/portfolio/projects
- **Resume**: https://eshbanj24-laravel.github.io/portfolio/resume
- **Contact**: https://eshbanj24-laravel.github.io/portfolio/contact

---

## 🆘 Common Issues & Solutions

### 404 Errors
- **Cause**: Missing `.nojekyll` file
- **Fix**: Make sure `.nojekyll` is uploaded to gh-pages branch

### Assets Not Loading
- **Cause**: Jekyll processing CSS/JS files
- **Fix**: Verify `.nojekyll` file exists

### Wrong Base Path
- **Cause**: Assets loading from wrong URL
- **Fix**: Check vite.config.js has `base: '/portfolio/'`

### Router Not Working
- **Cause**: History base path mismatch
- **Fix**: Verify router uses `/portfolio/` base

---

## 📁 Branch Structure

```
eshbanj24-laravel/portfolio/
├── main branch/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ... (source files)
│
├── gh-pages branch/
│   ├── index.html
│   ├── .nojekyll
│   ├── assets/
│   └── favicon.svg
```

---

## ✅ Success Checklist

- [ ] Built with `npm run deploy:gh`
- [ ] Copied dist/ contents to gh-pages branch
- [ ] Included `.nojekyll` file
- [ ] GitHub Pages configured for gh-pages branch
- [ ] Site accessible at https://eshbanj24-laravel.github.io/portfolio

Your portfolio is now deployed! 🎉
