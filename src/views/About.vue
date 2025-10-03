<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">About Me</h1>
          <p class="hero-subtitle">
            Passionate DevOps Engineer and PHP Developer with a focus on
            scalable solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Bio Section -->
    <section v-if="hasPersonalInfo" class="bio-section">
      <div class="container">
        <div class="bio-content">
          <div class="bio-text">
            <h2>My Story</h2>
            <p>
              {{ personalInfo?.name }} is a {{ personalInfo?.title }} with 8+ years of experience 
              delivering scalable web applications using Laravel, Vue.js, React, and modern PHP frameworks. 
              My journey spans across diverse industries from logistics and transportation to fintech 
              and enterprise SaaS solutions.
            </p>
            <p>
              I specialize in architecting SaaS platforms, multi-tenant systems, and cloud-native solutions 
              with AWS and DigitalOcean. Notable projects include creating real-time logistics tracking systems 
              for Breaker19's oil & gas 3PL platform, building Shariah-compliant BNPL infrastructure for SheenPay, 
              and developing comprehensive CRM solutions for TransPro Alliance transportation management.
            </p>
            <p>
              My track record includes boosting application performance by 45%, scaling platforms for 200%+ 
              growth, and receiving recognition for technical leadership and mentoring teams. I believe in 
              continuous learning, modern practices, and aligning engineering solutions with business objectives 
              across industries.
            </p>
          </div>
          <div class="bio-image">
            <div class="image-placeholder">
              <i class="fas fa-user-circle" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section v-if="Object.keys(skillsByCategory).length > 0" class="skills-section">
      <div class="container">
        <h2 class="section-title">Technical Skills</h2>
        <div class="skills-categories">
          <div
            v-for="(skills, category) in skillsByCategory"
            :key="category"
            class="skill-category"
          >
            <h3 class="category-title">
              {{ category }}
            </h3>
            <div class="skills-list">
              <div v-for="skill in skills" :key="skill.name" class="skill-item">
                <div class="skill-info">
                  <span class="skill-name">{{ skill.name }}</span>
                  <span class="skill-level">{{ skill.level }}%</span>
                </div>
                <div class="skill-bar">
                  <div
                    class="skill-progress"
                    :style="{ width: skill.level + '%' }"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Timeline -->
    <section v-if="experiences.length > 0" class="experience-section">
      <div class="container">
        <h2 class="section-title">Professional Experience</h2>
        <div class="timeline">
          <div
            v-for="(experience, index) in experiences"
            :key="index"
            class="timeline-item"
          >
            <div class="timeline-marker" />
            <div class="timeline-content">
              <div class="timeline-header">
                <h3>{{ experience.position }}</h3>
                <span class="timeline-company">{{ experience.company }}</span>
                <span class="timeline-period">{{ experience.period }}</span>
              </div>
              <p class="timeline-description">
                {{ experience.description }}
              </p>
              <div class="timeline-technologies">
                <span
                  v-for="tech in experience.technologies"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industry Expertise Section -->
    <section class="industry-expertise-section">
      <div class="container">
        <div class="section-header">
          <h2>Industry Expertise</h2>
          <p>Specialized solutions across diverse sectors</p>
        </div>
        
        <div class="expertise-grid">
          <div class="expertise-card">
            <div class="expertise-icon">
              <i class="fas fa-truck" />
            </div>
            <h3>Transportation & Logistics</h3>
            <p>Built comprehensive CRM systems for TransPro Alliance, enabling efficient transportation alliance management with route optimization and fleet coordination tools.</p>
            <ul>
              <li>Transportation alliance CRM development</li>
              <li>Route optimization algorithms</li>
              <li>Fleet management integration</li>
              <li>Partnership coordination tools</li>
            </ul>
          </div>

          <div class="expertise-card">
            <div class="expertise-icon">
              <i class="fas fa-industry" />
            </div>
            <h3>Oil & Gas Logistics</h3>
            <p>Developed carrier portal frontend for Breaker19's oil & gas 3PL platform, serving 1,000's of suppliers with 15,000+ carrier network.</p>
            <ul>
              <li>Real-time logistics tracking</li>
              <li>24/7 dispatch operations</li>
              <li>Multi-carrier bidding systems</li>
              <li>Automated billing integration</li>
            </ul>
          </div>

          <div class="expertise-card">
            <div class="expertise-icon">
              <i class="fas fa-mobile-alt" />
            </div>
            <h3>Fintech & Payments</h3>
            <p>Created Shariah-compliant BNPL platform for SheenPay, offering halal installation plans for mobile purchases in Pakistan.</p>
            <ul>
              <li>Shariah-compliant payment systems</li>
              <li>Mobile-first applications</li>
              <li>Multi-step form automation</li>
              <li>Dynamic template systems</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Education Section -->
    <section v-if="educationList.length > 0" class="education-section">
      <div class="container">
        <h2 class="section-title">Education & Certifications</h2>
        <div class="education-grid">
          <div
            v-for="education in educationList"
            :key="education.id"
            class="education-card"
          >
            <div class="education-icon">
              <i :class="education.icon" />
            </div>
            <div class="education-content">
              <h3>{{ education.title }}</h3>
              <p class="education-institution">
                {{ education.institution }}
              </p>
              <p class="education-period">
                {{ education.period }}
              </p>
              <p class="education-description">
                {{ education.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useProfileStore } from '@/stores/profile'

const profileStore = useProfileStore()
const { skillsByCategory, experience, education, achievements, personalInfo, certifications } = profileStore

// Check if personal info is available to show bio section
const hasPersonalInfo = computed(() => personalInfo.value && personalInfo.value.name)

// Use real experience data from profile store
const experiences = computed(() => experience.value || [])

// Use real education and certifications data from profile store
const educationList = computed(() => {
  const edu = (education.value || []).map(item => ({
    ...item,
    icon: 'fas fa-graduation-cap'
  }))
  const cert = (certifications.value || []).map(item => ({
    ...item,
    icon: item.name.includes('AWS') ? 'fab fa-aws' : item.name.includes('Laravel') ? 'fab fa-laravel' : 'fas fa-certificate'
  }))
  return [...edu, ...cert]
})
</script>

<style scoped>
.about-page {
  padding-top: 80px;
}

/* Hero Section */
.about-hero {
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

/* Bio Section */
.bio-section {
  padding: 4rem 0;
}

.bio-content {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: center;
}

.bio-text h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-text);
}

.bio-text p {
  color: var(--color-text-muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.bio-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 250px;
  height: 250px;
  background: var(--color-surface);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid var(--color-primary);
}

.image-placeholder i {
  font-size: 6rem;
  color: var(--color-primary);
}

/* Skills Section */
.skills-section {
  padding: 4rem 0;
  background: var(--color-surface);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.skills-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-category {
  background: var(--color-background);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.category-title {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  text-align: center;
}

.skill-item {
  margin-bottom: 1.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 600;
  color: var(--color-text);
}

.skill-level {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

.skill-bar {
  height: 8px;
  background: var(--color-border);
  border-radius: 4px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  border-radius: 4px;
  transition: width 1s ease;
}

/* Experience Section */
.experience-section {
  padding: 4rem 0;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: var(--color-primary);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-bottom: 3rem;
  width: 50%;
}

.timeline-item:nth-child(odd) {
  left: 0;
  padding-right: 2rem;
}

.timeline-item:nth-child(even) {
  left: 50%;
  padding-left: 2rem;
}

.timeline-marker {
  position: absolute;
  top: 0;
  width: 20px;
  height: 20px;
  background: var(--color-primary);
  border-radius: 50%;
  border: 4px solid var(--color-background);
}

.timeline-item:nth-child(odd) .timeline-marker {
  right: -10px;
}

.timeline-item:nth-child(even) .timeline-marker {
  left: -10px;
}

.timeline-content {
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
}

.timeline-header {
  margin-bottom: 1rem;
}

.timeline-header h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.timeline-company {
  color: var(--color-primary);
  font-weight: 600;
  margin-right: 1rem;
}

.timeline-period {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

.timeline-description {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
}

.timeline-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
}

/* Industry Expertise Section */
.industry-expertise-section {
  padding: 5rem 0;
  background: var(--color-bg-light);
}

.industry-expertise-section .section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.industry-expertise-section h2 {
  font-size: 2.5rem;
  color: var(--color-text);
  margin-bottom: 1rem;
}

.industry-expertise-section .section-header p {
  font-size: 1.1rem;
  color: var(--color-text-muted);
  max-width: 600px;
  margin: 0 auto;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.expertise-card {
  background: var(--color-card);
  border: 1px solid var(--color-border);
  border-radius: 15px;
  padding: 2rem;
  transition: all 0.3s ease;
}

.expertise-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.expertise-icon {
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.expertise-icon i {
  font-size: 1.5rem;
  color: white;
}

.expertise-card h3 {
  font-size: 1.25rem;
  color: var(--color-text);
  margin-bottom: 1rem;
  font-weight: 600;
}

.expertise-card p {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.expertise-card ul {
  list-style: none;
  padding: 0;
}

.expertise-card li {
  color: var(--color-text-muted);
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.expertise-card li::before {
  content: "•";
  color: var(--color-primary);
  position: absolute;
  left: 0;
  font-weight: bold;
}

/* Education Section */
.education-section {
  padding: 4rem 0;
  background: var(--color-surface);
}

.education-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.education-card {
  background: var(--color-background);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  display: flex;
  gap: 1rem;
  transition: all 0.3s ease;
}

.education-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.education-icon {
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.education-icon i {
  font-size: 1.5rem;
  color: white;
}

.education-content h3 {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.education-institution {
  color: var(--color-primary);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.education-period {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
}

.education-description {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .bio-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-item {
    width: 100%;
    left: 0 !important;
    padding-left: 3rem !important;
    padding-right: 0 !important;
  }

  .timeline-marker {
    left: 10px !important;
    right: auto !important;
  }

  .skills-categories {
    grid-template-columns: 1fr;
  }

  .education-grid {
    grid-template-columns: 1fr;
  }

  .expertise-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .expertise-card {
    padding: 1.5rem;
  }

  .expertise-icon {
    width: 50px;
    height: 50px;
  }

  .expertise-icon i {
    font-size: 1.25rem;
  }

  .education-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>
