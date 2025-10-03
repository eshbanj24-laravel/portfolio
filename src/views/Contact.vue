<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Get In Touch</h1>
          <p class="hero-subtitle">
            Let's discuss your next project or collaborate on something amazing
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-section">
            <h2>Send me a message</h2>
            <form class="contact-form" @submit.prevent="submitForm">
              <div class="form-group">
                <label for="name">Name *</label>
                <input
                  id="name"
                  v-model="form.name"
                  type="text"
                  required
                  :class="{ error: errors.name }"
                />
                <span v-if="errors.name"
class="error-message">{{
                  errors.name
                }}</span>
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  :class="{ error: errors.email }"
                />
                <span v-if="errors.email"
class="error-message">{{
                  errors.email
                }}</span>
              </div>

              <div class="form-group">
                <label for="subject">Subject *</label>
                <input
                  id="subject"
                  v-model="form.subject"
                  type="text"
                  required
                  :class="{ error: errors.subject }"
                />
                <span v-if="errors.subject"
class="error-message">{{
                  errors.subject
                }}</span>
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="6"
                  required
                  :class="{ error: errors.message }"
                />
                <span v-if="errors.message"
class="error-message">{{
                  errors.message
                }}</span>
              </div>

              <button
                type="submit"
                class="btn btn-primary submit-btn"
                :disabled="isSubmitting"
              >
                <i v-if="isSubmitting" class="fas fa-spinner fa-spin"></i>
                <i v-else class="fas fa-paper-plane"></i>
                <span>{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
              </button>
            </form>

            <!-- Success Message -->
            <div v-if="isSuccess"
class="success-message">
              <i class="fas fa-check-circle" />
              <h3>Message sent successfully!</h3>
              <p>
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="contact-info-section">
            <h2>Contact Information</h2>

            <div class="contact-methods">
              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-envelope" />
                </div>
                <div class="method-content">
                  <h3>Email</h3>
                  <a :href="`mailto:${profileStore.personalInfo.email}`">{{ profileStore.personalInfo.email }}</a>
                  <p>Send me an email anytime</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-phone" />
                </div>
                <div class="method-content">
                  <h3>Phone</h3>
                  <a :href="`tel:${profileStore.personalInfo.phone}`">{{ profileStore.personalInfo.phone }}</a>
                  <p>Available Monday - Friday</p>
                </div>
              </div>

              <div class="contact-method">
                <div class="method-icon">
                  <i class="fas fa-map-marker-alt" />
                </div>
                <div class="method-content">
                  <h3>Location</h3>
                  <span>{{ profileStore.personalInfo.location }}</span>
                  <p>Open to remote work</p>
                </div>
              </div>
            </div>

            <!-- Social Links -->
            <div class="social-section">
              <h3>Follow me</h3>
              <div class="social-links">
                <a
                  v-if="profileStore.personalInfo.github"
                  :href="profileStore.personalInfo.github"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <i class="fab fa-github" />
                  <span>GitHub</span>
                </a>
                <a
                  v-if="profileStore.personalInfo.linkedin"
                  :href="profileStore.personalInfo.linkedin"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <i class="fab fa-linkedin" />
                  <span>LinkedIn</span>
                </a>
                <a
                  v-if="profileStore.personalInfo.devto"
                  :href="profileStore.personalInfo.devto"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <i class="fab fa-dev" />
                  <span>Dev.to</span>
                </a>
                <a
                  v-if="profileStore.personalInfo.website"
                  :href="profileStore.personalInfo.website"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social-link"
                >
                  <i class="fas fa-globe" />
                  <span>Website</span>
                </a>
              </div>
            </div>

            <!-- Availability Status -->
            <div class="availability-section">
              <h3>Availability</h3>
              <div class="availability-status">
                <div class="status-indicator available" />
                <div class="status-content">
                  <h4>Available for new projects</h4>
                  <p>Currently accepting freelance and contract work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useProfileStore } from '@/stores/profile'

const profileStore = useProfileStore()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const errors = reactive({})
const isSubmitting = ref(false)
const isSuccess = ref(false)

const validateForm = () => {
  const newErrors = {}

  if (!form.name.trim()) {
    newErrors.name = 'Name is required'
  }

  if (!form.email.trim()) {
    newErrors.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    newErrors.email = 'Please enter a valid email address'
  }

  if (!form.subject.trim()) {
    newErrors.subject = 'Subject is required'
  }

  if (!form.message.trim()) {
    newErrors.message = 'Message is required'
  } else if (form.message.trim().length < 10) {
    newErrors.message = 'Message must be at least 10 characters long'
  }

  Object.assign(errors, newErrors)
  return Object.keys(newErrors).length === 0
}

const submitForm = async () => {
  if (!validateForm()) {
    return
  }

  isSubmitting.value = true

  try {
    // Simulate API call - in a real app, you'd send this to your backend
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Reset form
    Object.assign(form, {
      name: '',
      email: '',
      subject: '',
      message: '',
    })

    isSuccess.value = true

    // Hide success message after 5 seconds
    setTimeout(() => {
      isSuccess.value = false
    }, 5000)
  } catch (error) {
    console.error('Error submitting form:', error)
    // Handle error (show error message, etc.)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.contact-page {
  padding-top: 80px;
}

/* Hero Section */
.contact-hero {
  padding: 4rem 0;
  background: linear-gradient(
    135deg,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--color-text-muted);
  max-width: 600px;
  margin: 0 auto;
}

/* Contact Content */
.contact-content {
  padding: 4rem 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

/* Contact Form */
.contact-form-section h2,
.contact-info-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--color-text);
}

.contact-form {
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
  color: var(--color-text);
  font-weight: 600;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid var(--color-border);
  border-radius: 8px;
  background: var(--color-background);
  color: var(--color-text);
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--color-primary);
}

.form-group input.error,
.form-group textarea.error {
  border-color: #ef4444;
}

.error-message {
  color: #ef4444;
  font-size: 0.875rem;
  margin-top: 0.25rem;
  display: block;
}

.submit-btn {
  width: 100%;
  padding: 1rem;
  font-size: 1rem;
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

/* Success Message */
.success-message {
  background: #10b981;
  color: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin-top: 1rem;
}

.success-message i {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.success-message h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

/* Contact Information */
.contact-info-section {
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.contact-methods {
  margin-bottom: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: var(--color-background);
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.method-icon {
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.method-icon i {
  font-size: 1.25rem;
  color: white;
}

.method-content h3 {
  font-size: 1.125rem;
  margin-bottom: 0.25rem;
  color: var(--color-text);
}

.method-content a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
}

.method-content a:hover {
  text-decoration: underline;
}

.method-content p {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

/* Social Section */
.social-section {
  margin-bottom: 2rem;
}

.social-section h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.social-links {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;
  background: var(--color-background);
  border-radius: 8px;
  border: 1px solid var(--color-border);
  text-decoration: none;
  color: var(--color-text);
  transition: all 0.3s ease;
}

.social-link:hover {
  background: var(--color-primary);
  color: white;
  transform: translateY(-2px);
}

.social-link i {
  font-size: 1.25rem;
}

/* Availability Section */
.availability-section h3 {
  font-size: 1.25rem;
  margin-bottom: 1rem;
  color: var(--color-text);
}

.availability-status {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-background);
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.status-indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.status-indicator.available {
  background: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.2);
}

.status-content h4 {
  font-size: 1rem;
  margin-bottom: 0.25rem;
  color: var(--color-text);
}

.status-content p {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .contact-form,
  .contact-info-section {
    padding: 1.5rem;
  }

  .social-links {
    grid-template-columns: 1fr;
  }

  .contact-method {
    flex-direction: column;
    text-align: center;
  }

  .availability-status {
    flex-direction: column;
    text-align: center;
  }
}
</style>
