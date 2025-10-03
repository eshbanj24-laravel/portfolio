<template>
  <div class="resume-page">
    <section class="resume-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">My Resume</h1>
          <p class="hero-subtitle">
            Professional experience and achievements in web development
          </p>
          
          <!-- View Mode Toggle -->
          <div class="view-toggle">
            <button 
              @click="toggleView" 
              class="toggle-btn"
            >
              <i :class="viewMode === 'structured' ? 'fas fa-file-alt' : 'fas fa-file-pdf'"></i>
              <span>{{ viewMode === 'structured' ? 'PDF View' : 'Structured View' }}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="structured-resume" v-if="viewMode === 'structured'">
      <div class="container">
        <!-- Personal Information -->
        <div class="resume-section">
          <h2 class="section-title">
            <i class="fas fa-user" />
            Personal Information
          </h2>
          <div class="personal-info">
            <div class="info-item">
              <strong>Name:</strong> {{ profileStore.personalInfo.name }}
            </div>
            <div class="info-item">
              <strong>Title:</strong> {{ profileStore.personalInfo.title }}
            </div>
            <div class="info-item">
              <strong>Email:</strong>
              <a :href="`mailto:${profileStore.personalInfo.email}`">{{ profileStore.personalInfo.email }}</a>
            </div>
            <div class="info-item">
              <strong>Phone:</strong>
              <a :href="`tel:${profileStore.personalInfo.phone}`">{{ profileStore.personalInfo.phone }}</a>
            </div>
            <div class="info-item">
              <strong>Location:</strong> {{ profileStore.personalInfo.location }}
            </div>
            <div class="info-item" v-if="profileStore.personalInfo.linkedin">
              <strong>LinkedIn:</strong>
              <a :href="profileStore.personalInfo.linkedin" target="_blank">{{ profileStore.personalInfo.linkedin.replace('https://', '') }}</a>
            </div>
            <div class="info-item" v-if="profileStore.personalInfo.github">
              <strong>GitHub:</strong>
              <a :href="profileStore.personalInfo.github" target="_blank">{{ profileStore.personalInfo.github.replace('https://', '') }}</a>
            </div>
            <div class="info-item" v-if="profileStore.personalInfo.website">
              <strong>Website:</strong>
              <a :href="profileStore.personalInfo.website" target="_blank">{{ profileStore.personalInfo.website.replace('https://', '') }}</a>
            </div>
            <div class="info-item" v-if="profileStore.personalInfo.devto">
              <strong>Dev.to:</strong>
              <a :href="profileStore.personalInfo.devto" target="_blank">{{ profileStore.personalInfo.devto.replace('https://', '') }}</a>
            </div>
          </div>
        </div>

        <!-- Professional Summary -->
        <div class="resume-section">
          <h2 class="section-title">
            <i class="fas fa-briefcase" />
            Professional Summary
          </h2>
          <div class="summary-content">
            <p>
              {{ profileStore.summary }}
            </p>
          </div>
        </div>

        <!-- Professional Experience -->
        <div class="resume-section">
          <h2 class="section-title">
            <i class="fas fa-building" />
            Professional Experience
          </h2>
          <div class="experience-list">
            <div
              v-for="(exp, index) in profileStore.experience"
              :key="index"
              class="experience-item"
            >
              <div class="experience-header">
                <h3>{{ exp.position }}</h3>
                <div class="experience-meta">
                  <span class="company">{{ exp.company }}</span>
                  <span class="period">{{ exp.period }}</span>
                </div>
              </div>
              <div class="experience-content">
                <div class="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li
                      v-for="highlight in exp.highlights"
                      :key="highlight"
                    >
                      {{ highlight }}
                    </li>
                  </ul>
                </div>
                <div class="technologies">
                  <strong>Technologies:</strong>
                  <span
                    v-for="task in exp.tasks"
                    :key="task"
                    class="tech-tag"
                  >
                    {{ task }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Education -->
        <div class="resume-section">
          <h2 class="section-title">
            <i class="fas fa-graduation-cap" />
            Education
          </h2>
          <div class="education-list">
            <div
              v-for="(edu, index) in profileStore.education"
              :key="index"
              class="education-item"
            >
              <h3>{{ edu.degree }}</h3>
              <div class="education-meta">
                <span class="institution">{{ edu.institution }}</span>
                <span class="period">{{ edu.period }}</span>
              </div>
              <p>{{ edu.description }}</p>
            </div>
          </div>
        </div>

        <!-- Skills Overview -->
        <div class="resume-section">
          <h2 class="section-title">
            <i class="fas fa-tools" />
            Technical Skills
          </h2>
          <div class="skills-overview">
            <div class="skill-category" 
                 v-for="(skills, category) in profileStore.skillsByCategory"
                 :key="category">
              <h3>{{ category }}</h3>
              <div class="skills-list">
                <span 
                  v-for="skill in skills" 
                  :key="skill.name"
                  class="skill-item"
                >
                  {{ skill.name }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="resume-section" v-if="profileStore.certifications && profileStore.certifications.length">
          <h2 class="section-title">
            <i class="fas fa-certificate" />
            Certifications
          </h2>
          <div class="certifications-list">
            <div
              v-for="(cert, index) in profileStore.certifications"
              :key="index"
              class="certification-item"
            >
              <h3>{{ cert.name }}</h3>
              <div class="certification-meta">
                <span class="issuer">{{ cert.issuer }}</span>
                <span class="date">{{ cert.date }}</span>
              </div>
              <p v-if="cert.description">
                {{ cert.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- Key Achievements -->
        <div class="resume-section" v-if="profileStore.achievements && profileStore.achievements.length">
          <h2 class="section-title">
            <i class="fas fa-trophy" />
            Key Achievements
          </h2>
          <div class="achievements-list">
            <div
              v-for="(achievement, index) in profileStore.achievements"
              :key="index"
              class="achievement-item"
            >
              {{ achievement }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- PDF Viewer -->
    <div v-else class="pdf-viewer">
      <div class="pdf-container">
        <iframe 
          :src="pdfUrl" 
          width="100%" 
          height="800px"
          frameborder="0"
        >
          <p>Your browser does not support iframes.</p>
        </iframe>
      </div>
      <div class="pdf-actions">
        <a :href="pdfUrl" target="_blank" class="btn btn-primary">
          <i class="fas fa-download"></i>
          <span>Download PDF</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProfileStore } from '@/stores/profile'

const profileStore = useProfileStore()

const viewMode = ref('structured') // 'pdf' or 'structured'
const pdfUrl = ref('/portfolio/Esh James (PHPLaravel).pdf')

const toggleView = () => {
  viewMode.value = viewMode.value === 'pdf' ? 'structured' : 'pdf'
}
</script>

<style scoped>
.resume-page {
  padding-top: 80px;
}

.resume-hero {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.view-toggle {
  margin-top: 2rem;
}

.toggle-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.toggle-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.5);
}

.toggle-btn i {
  margin-right: 0.5rem;
}

/* Structured Resume */
.structured-resume {
  padding: 4rem 0;
}

.resume-section {
  margin-bottom: 3rem;
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
}

.section-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  border-bottom: 2px solid var(--color-border);
  padding-bottom: 0.5rem;
}

.section-title i {
  font-size: 1.25rem;
}

/* Personal Information */
.personal-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.info-item {
  display: flex;
  gap: 0.5rem;
}

.info-item strong {
  color: var(--color-text);
  min-width: 80px;
}

.info-item a {
  color: var(--color-primary);
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
}

/* Experience */
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-item {
  padding: 1.5rem 0;
  border-bottom: 1px solid var(--color-border);
}

.experience-item:last-child {
  border-bottom: none;
}

.experience-header h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.experience-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.company {
  font-weight: 600;
  color: var(--color-primary);
}

.period {
  color: var(--color-secondary);
}

.experience-content .achievements {
  margin-bottom: 1rem;
}

.experience-content .achievements h4 {
  margin-bottom: 0.5rem;
  color: var(--color-text);
  font-size: 1rem;
}

.experience-content .achievements ul {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.experience-content .achievements li {
  margin-bottom: 0.25rem;
  color: var(--color-text-muted);
}

.technologies {
  margin-bottom: 1rem;
}

.technologies strong {
  color: var(--color-text);
  margin-right: 0.5rem;
}

.tech-tag {
  display: inline-block;
  background: var(--color-bg-muted);
  color: var(--color-text);
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
}

/* Education */
.education-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-item h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.education-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

.institution {
  font-weight: 600;
  color: var(--color-primary);
}

/* Skills */
.skills-overview {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.skill-category h3 {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  color: var(--color-text);
  border-bottom: 1px solid var(--color-border);
  padding-bottom: 0.25rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-item {
  background: var(--color-bg-muted);
  color: var(--color-text);
  padding: 0.5rem 1rem;
  border-radius: 16px;
  font-size: 0.9rem;
  border: 1px solid var(--color-border);
}

/* Certifications */
.certifications-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.certification-item {
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  border-radius: 8px;
  background: var(--color-bg-muted);
}

.certification-item h3 {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.certification-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
}

.issuer {
  font-weight: 600;
  color: var(--color-primary);
}

.date {
  color: var(--color-secondary);
}

/* Achievements */
.achievements-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.achievement-item {
  background: var(--color-bg-muted);
  padding: 1rem;
  border-radius: 8px;
  border-left: 4px solid var(--color-primary);
  color: var(--color-text);
}

/* PDF Viewer */
.pdf-viewer {
  padding: 4rem 0;
}

.pdf-container {
  background: var(--color-surface);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  border: 1px solid var(--color-border);
}

.pdf-actions {
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .structured-resume {
    padding: 2rem 0;
  }
  
  .resume-section {
    padding: 1.5rem;
  }
  
  .experience-meta,
  .education-meta,
  .certification-meta {
    flex-direction: column;
    gap: 0.25rem;
  }
  
  .skills-overview,
  .certifications-list {
    grid-template-columns: 1fr;
  }
}
</style>