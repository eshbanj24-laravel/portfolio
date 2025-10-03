# Esh James - DevOps & PHP Developer Portfolio

A modern, responsive portfolio website built with Vue.js 3, showcasing DevOps engineering and PHP development expertise.

## 🚀 Features

- **Modern Vue.js 3** with Composition API and `<script setup>`
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Dark/Light Mode** toggle with persistent theme preference
- **PDF Resume Integration** with both embedded viewer and structured display
- **Project Showcase** with filtering and GitHub integration
- **Contact Form** with validation and success feedback
- **SEO Optimized** with meta tags and structured data
- **Smooth Animations** and transitions throughout the site
- **Accessibility** features and keyboard navigation
- **Performance Optimized** with lazy loading and code splitting

## 🛠️ Tech Stack

### Frontend
- **Vue.js 3** - Progressive JavaScript framework
- **Vue Router 4** - Official router for Vue.js
- **Pinia** - State management for Vue
- **Tailwind CSS** - Utility-first CSS framework
- **Font Awesome** - Icon library
- **Vite** - Fast build tool and dev server

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── components/           # Reusable Vue components
│   ├── layout/         # Layout components (Header, Footer)
│   └── ui/             # UI components (Loading, ScrollToTop)
├── views/              # Page components
├── stores/             # Pinia stores for state management
├── router/             # Vue Router configuration
├── services/           # API services and external integrations
├── utils/              # Utility functions and helpers
├── config/             # Application configuration
└── assets/             # Static assets (CSS, images)
    └── css/           # Global styles and CSS variables
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16.0.0 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/eshjames/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   VITE_GITHUB_USERNAME=your-github-username
   VITE_API_BASE_URL=/api
   VITE_APP_URL=https://your-domain.com
   ```

4. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# App Configuration
VITE_APP_URL=https://your-domain.com
VITE_APP_NAME=Your Name Portfolio
VITE_APP_DESCRIPTION=Your professional description

# GitHub Integration
VITE_GITHUB_USERNAME=your-github-username
VITE_GITHUB_TOKEN=your-github-token

# API Configuration
VITE_API_BASE_URL=/api
VITE_CONTACT_FORM_ENDPOINT=/api/contact

# Social Media Links
VITE_GITHUB_URL=https://github.com/yourusername
VITE_LINKEDIN_URL=https://linkedin.com/in/yourprofile
VITE_TWITTER_URL=https://twitter.com/yourusername

# Resume Configuration
VITE_RESUME_PDF_PATH=/Your_Resume.pdf
VITE_RESUME_DOWNLOAD_NAME=Your_Name_Resume.pdf
```

### Customizing Content

1. **Personal Information**
   - Update `src/stores/projects.js` with your skills and projects
   - Modify `src/views/About.vue` with your bio and experience
   - Update `src/views/Resume.vue` with your resume data

2. **Projects**
   - Edit the `projects` array in `src/stores/projects.js`
   - Add your project images to `public/images/`
   - Update GitHub links and demo URLs

3. **Styling**
   - Modify CSS variables in `src/assets/css/main.css`
   - Update Tailwind configuration in `tailwind.config.js`
   - Customize colors and themes

## 🏗️ Building for Production

### Build the project

```bash
npm run build
# or
yarn build
```

This creates a `dist/` directory with optimized production files.

### Preview the build

```bash
npm run preview
# or
yarn preview
```

### Deploy

The `dist/` directory can be deployed to any static hosting service:

- **Netlify** - Drag and drop the `dist/` folder
- **Vercel** - Connect your GitHub repository
- **GitHub Pages** - Use GitHub Actions for automated deployment
- **AWS S3** - Upload the `dist/` folder to an S3 bucket

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Theme System

The portfolio includes a comprehensive theme system:

- **CSS Variables** for consistent theming
- **Dark/Light Mode** toggle
- **Persistent Theme** preference in localStorage
- **System Preference** detection

## 🔧 Development Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Format code
npm run format
```

## 📊 Performance Features

- **Code Splitting** - Routes are loaded on demand
- **Lazy Loading** - Images and components load when needed
- **Tree Shaking** - Unused code is eliminated
- **Minification** - CSS and JavaScript are compressed
- **Image Optimization** - Responsive images with proper formats

## 🔍 SEO Features

- **Meta Tags** - Dynamic title and description per page
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Twitter sharing optimization
- **Structured Data** - Schema.org markup for search engines
- **Sitemap** - XML sitemap for search engine crawling

## 🧪 Testing

```bash
# Run tests (when implemented)
npm run test

# Run tests with coverage
npm run test:coverage
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help with the portfolio:

- **Email**: esh@eshjames.dev
- **GitHub Issues**: [Create an issue](https://github.com/eshjames/portfolio/issues)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/eshjames)

## 🙏 Acknowledgments

- **Vue.js Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Font Awesome** - For the comprehensive icon library
- **Vite Team** - For the fast build tool

---

**Built with ❤️ by Esh James**

*DevOps Engineer & PHP Developer*
