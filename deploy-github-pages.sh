#!/bin/bash

# GitHub Pages Deployment Script
echo "🚀 Starting GitHub Pages deployment..."

# Clean previous build
echo "🧹 Cleaning previous build..."
rm -rf dist/
rm -rf dist-portfolio/

# Build for GitHub Pages (production)
echo "📦 Building for GitHub Pages..."
npm run build

# Copy build files to portfolio directory
echo "📁 Preparing GitHub Pages structure..."
mkdir -p dist-portfolio
cp -r dist/* dist-portfolio/
cp .nojekyll dist-portfolio/

echo "✅ Build complete!"
echo "📋 Next steps:"
echo "1. Copy contents of 'dist-portfolio' folder"
echo "2. Upload them to your GitHub Pages branch"
echo "3. Your site will be available at: https://yourusername.github.io/repository-name/"
echo ""
echo "🌐 Configure GitHub Pages in repository settings:"
echo "   Source: Deploy from a branch"
echo "   Branch: gh-pages (or whatever branch you're using)"
