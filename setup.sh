#!/bin/bash

# Esh James Portfolio - Quick Start Script
# This script sets up the development environment

echo "🚀 Setting up Esh James Portfolio..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16+ from https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js $(node -v) detected"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi

echo "✅ Dependencies installed successfully"

# Create environment file if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating environment file..."
    cp env.example .env.local
    echo "✅ Environment file created (.env.local)"
    echo "⚠️  Please edit .env.local with your configuration"
fi

# Create images directory
echo "🖼️  Setting up images..."
mkdir -p public/images

# Check if resume PDF exists
if [ ! -f "Esh James (PHP).pdf" ]; then
    echo "⚠️  Resume PDF not found. Please add 'Esh James (PHP).pdf' to the root directory"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "1. Edit .env.local with your configuration"
echo "2. Add your resume PDF: 'Esh James (PHP).pdf'"
echo "3. Run: npm run dev"
echo "4. Open: http://localhost:3000"
echo ""
echo "📚 For more information, see README.md"
echo "🚀 Happy coding!"
