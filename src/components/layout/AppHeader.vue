<template>
  <header class="app-header">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-content">
          <!-- Logo/Brand -->
          <router-link to="/"
class="navbar-brand">
            <span class="brand-text">Esh James</span>
            <span class="brand-subtitle">Senior Full Stack Developer</span>
          </router-link>

          <!-- Mobile Menu Toggle -->
          <button
            class="mobile-menu-toggle"
            :class="{ active: isMobileMenuOpen }"
            aria-label="Toggle mobile menu"
            @click="toggleMobileMenu"
          >
            <span />
            <span />
            <span />
          </button>

          <!-- Navigation Links -->
          <div class="navbar-nav"
:class="{ active: isMobileMenuOpen }">
            <router-link
              v-for="item in navItems"
              :key="item.name"
              :to="item.path"
              class="nav-link"
              @click="closeMobileMenu"
            >
              <i :class="item.icon" />
              <span>{{ item.name }}</span>
            </router-link>
          </div>

          <!-- Theme Toggle -->
          <button
            class="theme-toggle"
            :title="isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'"
            @click="toggleTheme"
          >
            <i :class="isDarkMode ? 'fas fa-sun' : 'fas fa-moon'" />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/app'

const appStore = useAppStore()
const { isDarkMode, toggleDarkMode } = appStore

const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', path: '/', icon: 'fas fa-home' },
  { name: 'About', path: '/about', icon: 'fas fa-user' },
  { name: 'Projects', path: '/projects', icon: 'fas fa-code' },
  { name: 'Resume', path: '/resume', icon: 'fas fa-file-alt' },
  { name: 'Contact', path: '/contact', icon: 'fas fa-envelope' },
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleTheme = () => {
  toggleDarkMode()
}
</script>

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  backdrop-filter: blur(10px);
}

.navbar {
  padding: 1rem 0;
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-brand {
  text-decoration: none;
  color: var(--color-text);
  display: flex;
  flex-direction: column;
  font-weight: 700;
}

.brand-text {
  font-size: 1.5rem;
  color: var(--color-primary);
}

.brand-subtitle {
  font-size: 0.75rem;
  color: var(--color-text-muted);
  font-weight: 400;
}

.navbar-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  text-decoration: none;
  color: var(--color-text);
  border-radius: 8px;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--color-primary);
  background: var(--color-background);
}

.nav-link i {
  font-size: 0.875rem;
}

.theme-toggle {
  background: none;
  border: none;
  color: var(--color-text);
  font-size: 1.25rem;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.theme-toggle:hover {
  color: var(--color-primary);
  background: var(--color-background);
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.mobile-menu-toggle span {
  width: 25px;
  height: 3px;
  background: var(--color-text);
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 2px;
}

.mobile-menu-toggle.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.mobile-menu-toggle.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
  transform: rotate(45deg) translate(-5px, -6px);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .navbar-nav {
    position: fixed;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--color-surface);
    border-top: 1px solid var(--color-border);
    flex-direction: column;
    padding: 1rem;
    gap: 0.5rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .navbar-nav.active {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-link {
    width: 100%;
    justify-content: center;
    padding: 1rem;
  }

  .brand-subtitle {
    display: none;
  }
}
</style>
