import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const isDarkMode = ref(false)
  const isLoading = ref(false)
  const currentRoute = ref('Home')

  // Getters
  const theme = computed(() => (isDarkMode.value ? 'dark' : 'light'))

  // Actions
  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value
    // Update DOM attribute for CSS variables
    document.documentElement.setAttribute('data-theme', theme.value)
    // Store preference in localStorage
    localStorage.setItem('theme', theme.value)
  }

  const setLoading = loading => {
    isLoading.value = loading
  }

  const setCurrentRoute = route => {
    currentRoute.value = route
  }

  const initializeTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      isDarkMode.value = savedTheme === 'dark'
    } else {
      // Check system preference
      isDarkMode.value = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches
    }
    document.documentElement.setAttribute('data-theme', theme.value)
  }

  return {
    isDarkMode,
    isLoading,
    currentRoute,
    theme,
    toggleDarkMode,
    setLoading,
    setCurrentRoute,
    initializeTheme,
  }
})
