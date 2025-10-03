<template>
  <footer class="app-footer">
    <div class="container">
      <div class="footer-content">
        <!-- Brand Section -->
        <div class="footer-brand">
          <h3>Esh James</h3>
          <p>DevOps & PHP Developer</p>
          <p class="footer-description">
            Passionate about building scalable cloud infrastructure and robust
            web applications.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <router-link to="/"> Home </router-link>
            </li>
            <li>
              <router-link to="/about"> About </router-link>
            </li>
            <li>
              <router-link to="/projects"> Projects </router-link>
            </li>
            <li>
              <router-link to="/resume"> Resume </router-link>
            </li>
            <li>
              <router-link to="/contact"> Contact </router-link>
            </li>
          </ul>
        </div>

        <!-- Social Links -->
        <div class="footer-social">
          <h4>Connect</h4>
          <div class="social-links">
            <a
              href="https://github.com/eshjames"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/eshjames"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/eshjames"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter" />
              <span>Twitter</span>
            </a>
            <a href="mailto:esh@eshjames.dev">
              <i class="fas fa-envelope" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Esh James. All rights reserved.</p>
        <p>Built with Vue.js & Tailwind CSS</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.app-footer {
  background: var(--color-surface);
  border-top: 1px solid var(--color-border);
  padding: 3rem 0 1rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 2rem;
}

.footer-brand h3 {
  color: var(--color-primary);
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.footer-brand p {
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.footer-description {
  font-size: 0.875rem;
  line-height: 1.6;
}

.footer-links h4,
.footer-social h4 {
  color: var(--color-text);
  font-size: 1.125rem;
  margin-bottom: 1rem;
}

.footer-links ul {
  list-style: none;
}

.footer-links li {
  margin-bottom: 0.5rem;
}

.footer-links a {
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: var(--color-primary);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.social-links a {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-text-muted);
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-links a:hover {
  color: var(--color-primary);
}

.social-links i {
  font-size: 1.25rem;
  width: 20px;
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }

  .social-links {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
</style>
