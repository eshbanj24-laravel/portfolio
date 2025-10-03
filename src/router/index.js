import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Projects from '@/views/Projects.vue'
import Resume from '@/views/Resume.vue'
import Contact from '@/views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home - Esh James Portfolio',
      description: 'Welcome to Esh James portfolio - DevOps and PHP Developer',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About - Esh James',
      description: 'Learn more about Esh James, DevOps and PHP Developer',
    },
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Projects - Esh James',
      description: 'View Esh James portfolio of DevOps and PHP projects',
    },
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
    meta: {
      title: 'Resume - Esh James',
      description: 'Download or view Esh James resume',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact - Esh James',
      description: 'Get in touch with Esh James',
    },
  },
  // Catch typo routes and redirect to correct paths
  {
    path: '/portfolio/:pathMatch(.*)*',
    redirect: '/portfolio'
  },
  // Catch any undefined routes and redirect to home
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]

// Get base URL from environment or default to portfolio base path
const getBaseUrl = () => {
  return import.meta.env.VITE_BASE_URL || '/portfolio/'
}

const router = createRouter({
  history: createWebHistory(getBaseUrl()),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
  return { top: 0 }
    }
  },
})

// Update page title and meta description on route change
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Esh James Portfolio'

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute(
      'content',
      to.meta.description || 'Esh James Portfolio'
    )
  }

  next()
})

export default router
