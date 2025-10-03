<template>
  <div class="loading-spinner"
:class="{ overlay: overlay }">
    <div class="spinner">
      <div class="spinner-ring" />
      <div class="spinner-ring" />
      <div class="spinner-ring" />
    </div>
    <p v-if="message"
class="loading-message">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  overlay: {
    type: Boolean,
    default: false,
  },
  message: {
    type: String,
    default: '',
  },
})
</script>

<style scoped>
.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.loading-spinner.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.spinner {
  position: relative;
  width: 60px;
  height: 60px;
}

.spinner-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top: 3px solid var(--color-primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

.spinner-ring:nth-child(2) {
  width: 80%;
  height: 80%;
  top: 10%;
  left: 10%;
  border-top-color: var(--color-accent);
  animation-duration: 1.5s;
  animation-direction: reverse;
}

.spinner-ring:nth-child(3) {
  width: 60%;
  height: 60%;
  top: 20%;
  left: 20%;
  border-top-color: var(--color-secondary);
  animation-duration: 2s;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-message {
  margin-top: 1rem;
  color: var(--color-text-muted);
  font-size: 0.875rem;
  text-align: center;
}

.overlay .loading-message {
  color: white;
}
</style>
