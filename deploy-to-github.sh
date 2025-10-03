#!/bin/bash

# Deployment script for eshbanj24-laravel/portfolio GitHub repository
echo "🚀 Deploying to GitHub Pages..."

# Build the project
echo "📦 Building production files..."
npm run build

# Create a simple deployment info file
echo "📄 Creating deployment info..."
cat > dist/.nojekyll << EOF
# This file prevents Jekyll from processing the repository
EOF

echo "✅ Build complete!"
echo ""
echo "📋 Next Steps:"
echo "1. Copy ALL contents from the 'dist/' folder"
echo "2. Go to https://github.com/eshbanj24-laravel/portfolio"
echo "3. Upload/replace ALL files in the main branch root"
echo "4. GitHub Pages URL: https://eshbanj24-laravel.github.io/portfolio"
echo ""
echo "🔧 GitHub Pages Settings:"
echo "   Source: Deploy from a branch"
echo "   Branch: main"
echo "   Folder: / (root)"
echo ""
echo "📁 Files to upload:"
ls -la dist/
