# 🚨 GitHub Pages Deployment Checklist

## ❗ Current Issue: 404 on main.js
**Error**: `GET https://eshbanj24-laravel.github.io/portfolio/src/main.js net::ERR_ABORTED 404`

This error means the site is loading but can't find the JavaScript bundle. Let's fix this step by step.

---

## ✅ Checklist - Please Verify Each Step

### 🔍 Step 1: Verify gh-pages Branch Content
Go to: https://github.com/eshbanj24-laravel/portfolio
- [ ] Switch to `gh-pages` branch (not main)
- [ ] Check if these files exist in the root:
  - [ ] `index.html`
  - [ ] `.nojekyll`
  - [ ] `assets/` folder
  - [ ] `favicon.svg`
  - [ ] `images/` folder

### 📁 Step 2: Upload Fresh Files
From your local `dist/` folder, upload:
- [ ] Delete ALL files from gh-pages branch
- [ ] Upload `index.html`
- [ ] Upload `.nojekyll` (empty file)
- [ ] Upload entire `assets/` folder
- [ ] Upload `favicon.svg`
- [ ] Upload `images/` folder (if exists)

### ⚙️ Step 3: GitHub Pages Settings
Repository Settings → Pages:
- [ ] Source: Deploy from a branch
- [ ] Branch: gh-pages ☑️
- [ ] Folder: / (root) ☑️

### 🌐 Step 4: Verify URLs
Expected files should be accessible at:
- [ ] https://eshbanj24-laravel.github.io/portfolio/ (index.html)
- [ ] https://eshbanj24-laravel.github.io/portfolio/assets/index-DpcLCJun.js
- [ ] https://eshbanj24-laravel.github.io/portfolio/assets/index-sCSPopRV.css
- [ ] https://eshbanj24-laravel.github.io/portfolio/.nojekyll

---

## 🔧 If Still Getting Errors

### Error: Can't find main.js
**Possible causes:**
1. **Wrong branch**: Make sure you uploaded to `gh-pages`, not `main`
2. **Missing assets**: The `assets/` folder wasn't uploaded
3. **Old cache**: Try hard refresh (Ctrl+F5)
4. **GitHub Pages delay**: Can take up to 10 minutes to update

### Quick Test Commands
```bash
# Verify your local build files
dir dist
dir dist\assets

# All locally generated files should be:
# - index.html (2.14 kb)
# - .nojekyll (empty file)
# - assets/index-DpcLCJun.js (144.30 kb)
# - assets/index-sCSPopRV.css (41.59 kb)
```

---

## 📋 Upload Instructions

### Method 1: GitHub Web Interface
1. Go to gh-pages branch
2. Click "Add file" → "Upload files"
3. Drag ALL contents from your local `dist/` folder
4. Commit changes

### Method 2: Git Commands (if you have Git access)
```bash
git checkout gh-pages
rm -rf *
cp -r dist/* .
git add .
git commit -m "Deploy portfolio to GitHub Pages"
git push origin gh-pages
```

---

## ✅ Success Indicators

After correct deployment, you should see:
- [ ] Site loads without console errors
- [ ] All pages work (/about, /projects, etc.)
- [ ] Images and styling load correctly
- [ ] Console shows no 404 errors

---

## 🆘 Need Help?

If you're still getting errors after following this checklist:
1. Take a screenshot of the GitHub repository gh-pages branch
2. Check browser console for specific error messages
3. Verify the exact URL structure

The most common issue is uploading to the wrong branch or missing the `assets/` folder.
