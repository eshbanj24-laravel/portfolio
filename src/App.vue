<template>
  <div id="app"
:class="{ dark: isDarkMode }">
    <!-- Navigation Header -->
    <AppHeader />

    <!-- Main Content -->
    <main class="min-h-screen">
      <router-view v-slot="{ Component, route }">
        <transition name="page"
mode="out-in">
          <component :is="Component"
:key="route.path" />
        </transition>
      </router-view>
    </main>

    <!-- Footer -->
    <AppFooter />

    <!-- Scroll to Top Button -->
    <ScrollToTop />

    <!-- Loading Overlay -->
    <div v-if="isLoading"
class="loading-overlay">
      <div class="loading-spinner">
        <i class="fas fa-spinner fa-spin" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAppStore } from '@/stores/app'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import ScrollToTop from '@/components/ui/ScrollToTop.vue'

const appStore = useAppStore()
const { isDarkMode, isLoading, initializeTheme } = appStore

// Initialize theme on app mount
onMounted(() => {
  initializeTheme()
})
</script>

<style scoped>
/* Page transition animations */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Loading overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loading-spinner {
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: var(--shadow-lg);
}

.loading-spinner i {
  font-size: 2rem;
  color: var(--color-primary);
}
</style>
