// Environment variables configuration
// This file defines the environment variables used in the application

export const config = {
  // App configuration
  app: {
    name: 'Esh James Portfolio',
    version: '1.0.0',
    description: 'DevOps Engineer & PHP Developer Portfolio',
    url: import.meta.env.VITE_APP_URL || 'https://eshjames.dev',
    author: 'Esh James',
    email: 'esh@eshjames.dev',
  },

  // API configuration
  api: {
    baseUrl: import.meta.env.VITE_API_BASE_URL || '/api',
    timeout: 10000,
    github: {
      username: import.meta.env.VITE_GITHUB_USERNAME || 'eshjames',
      token: import.meta.env.VITE_GITHUB_TOKEN || '',
    },
  },

  // Social media links
  social: {
    github: 'https://github.com/eshjames',
    linkedin: 'https://linkedin.com/in/eshjames',
    twitter: 'https://twitter.com/eshjames',
    email: 'mailto:esh@eshjames.dev',
  },

  // Resume configuration
  resume: {
    pdfPath: '/Esh James (PHP).pdf',
    downloadName: 'Esh_James_Resume.pdf',
  },

  // Theme configuration
  theme: {
    defaultMode: 'light',
    storageKey: 'portfolio-theme',
  },

  // Animation configuration
  animation: {
    duration: 300,
    easing: 'ease-in-out',
  },

  // Form configuration
  form: {
    contact: {
      endpoint: '/api/contact',
      fields: ['name', 'email', 'subject', 'message'],
    },
  },

  // SEO configuration
  seo: {
    defaultTitle: 'Esh James - DevOps Engineer & PHP Developer',
    defaultDescription:
      'Experienced DevOps Engineer and PHP Developer specializing in cloud infrastructure, automation, and full-stack development.',
    keywords: [
      'DevOps',
      'PHP Developer',
      'Cloud Infrastructure',
      'AWS',
      'Docker',
      'Kubernetes',
      'Laravel',
      'Vue.js',
      'Terraform',
      'Ansible',
    ],
    ogImage: '/images/og-image.jpg',
    twitterCard: 'summary_large_image',
  },

  // Development configuration
  dev: {
    enableLogging: import.meta.env.DEV,
    enableMockData: import.meta.env.VITE_ENABLE_MOCK_DATA === 'true',
  },
}

export default config
