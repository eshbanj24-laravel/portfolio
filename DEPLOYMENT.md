# Esh James Portfolio - Deployment Guide

This guide covers various deployment options for the Vue.js portfolio website.

## 🚀 Quick Deploy Options

### 1. Netlify (Recommended)

**One-click deploy:**
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/eshjames/portfolio)

**Manual deploy:**
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Configure custom domain (optional)

### 2. Vercel

**One-click deploy:**
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/eshjames/portfolio)

**Manual deploy:**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### 3. GitHub Pages

1. Build the project: `npm run build`
2. Copy contents of `dist/` to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 🔧 Environment Setup

### Required Environment Variables

Create a `.env.production` file:

```env
VITE_APP_URL=https://your-domain.com
VITE_GITHUB_USERNAME=your-github-username
VITE_API_BASE_URL=/api
```

### Build Configuration

The project uses Vite for building. Key configuration in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia']
        }
      }
    }
  }
})
```

## 📁 File Structure for Deployment

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [other assets]
├── images/
└── Esh James (PHP).pdf
```

## 🌐 Domain Configuration

### Custom Domain Setup

1. **Netlify:**
   - Go to Site settings > Domain management
   - Add custom domain
   - Configure DNS records

2. **Vercel:**
   - Go to Project settings > Domains
   - Add domain and configure DNS

3. **GitHub Pages:**
   - Repository settings > Pages
   - Set custom domain in Pages settings

### SSL Certificate

Most hosting providers automatically provide SSL certificates:
- Netlify: Automatic Let's Encrypt
- Vercel: Automatic SSL
- GitHub Pages: Automatic SSL

## 📊 Performance Optimization

### Build Optimizations

The project includes several performance optimizations:

1. **Code Splitting** - Routes loaded on demand
2. **Tree Shaking** - Unused code eliminated
3. **Asset Optimization** - Images and CSS compressed
4. **Lazy Loading** - Components loaded when needed

### CDN Configuration

For better performance, consider using a CDN:

```javascript
// vite.config.js
export default defineConfig({
  base: 'https://cdn.yourdomain.com/',
  // ... other config
})
```

## 🔍 SEO Configuration

### Meta Tags

Update meta tags in `index.html`:

```html
<meta name="description" content="Your custom description">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yourdomain.com/og-image.jpg">
```

### Sitemap

Create a `sitemap.xml` in the `public/` directory:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2024-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add other pages -->
</urlset>
```

## 🚨 Troubleshooting

### Common Issues

1. **Build Fails:**
   - Check Node.js version (>= 16.0.0)
   - Clear node_modules and reinstall
   - Check for TypeScript errors

2. **Assets Not Loading:**
   - Verify base URL configuration
   - Check file paths in components
   - Ensure assets are in `public/` directory

3. **Routing Issues:**
   - Configure server to serve `index.html` for all routes
   - Check Vue Router history mode

### Server Configuration

For Apache (`.htaccess`):
```apache
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

For Nginx:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## 📈 Analytics Setup

### Google Analytics

Add to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Vercel Analytics

```bash
npm install @vercel/analytics
```

Add to `main.js`:
```javascript
import { inject } from '@vercel/analytics'
inject()
```

## 🔄 Continuous Deployment

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Netlify

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/setup-node@v2
      with:
        node-version: '16'
    - run: npm install
    - run: npm run build
    - uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
        production-branch: main
        github-token: ${{ secrets.GITHUB_TOKEN }}
        deploy-message: "Deploy from GitHub Actions"
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📞 Support

For deployment issues:
- Check the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html)
- Review hosting provider documentation
- Open an issue on GitHub

---

**Happy Deploying! 🚀**
