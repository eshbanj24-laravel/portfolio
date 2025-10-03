#!/bin/bash

# GitHub Pages Deployment Script for Separate Branches
echo "🚀 Deploying to GitHub Pages (gh-pages branch)..."

# Build the project
echo "📦 Building production files..."
npm run build

# Create .nojekyll file to disable Jekyll processing
echo "📄 Creating .nojekyll file..."
touch dist/.nojekyll

echo "✅ Build complete!"
echo ""
echo "📋 Next Steps for GitHub Pages Deployment:"
echo "1. Copy ALL contents from 'dist/' folder"
echo "2. Go to: https://github.com/eshbanj24-laravel/portfolio"
echo "3. Switch to 'gh-pages' branch"
echo "4. Upload/replace ALL files (delete old files first)"
echo "5. Commit and push changes to gh-pages branch"
echo ""
echo "🔧 GitHub Pages Settings:"
echo "   Repository Settings → Pages"
echo "   Source: Deploy from a branch"
echo "   Branch: gh-pages"
echo "   Folder: / (root)"
echo ""
echo "🌐 Your site will be available at:"
echo "   https://eshbanj24-laravel.github.io/portfolio"
echo ""
echo "📁 Files in dist/ folder:"
ls -la dist/
echo ""
echo "⚠️  Important: Make sure to upload EVERYTHING from dist/ "
echo "   including .nojekyll file and assets folder!"
