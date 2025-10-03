<template>
  <div class="resume-page">
    <!-- Hero Section -->
    <section class="resume-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">Resume</h1>
          <p class="hero-subtitle">
Download my resume or view it online
</p>
          <div class="resume-actions">
            <a
              href="/Esh James (PHP).pdf"
              download="Esh_James_Resume.pdf"
              class="btn btn-primary"
            >
              <i class="fas fa-download" />
              Download PDF
            </a>
            <button
class="btn btn-secondary" @click="toggleView"
>
              <i
                :class="viewMode === 'pdf' ? 'fas fa-list' : 'fas fa-file-pdf'"
              />
              {{ viewMode === 'pdf' ? 'View Structured' : 'View PDF' }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- PDF Viewer -->
    <section v-if="viewMode === 'pdf'"
class="pdf-section">
      <div class="container">
        <div class="pdf-container">
          <iframe
            :src="pdfUrl"
            width="100%"
            height="800px"
            frameborder="0"
            title="Esh James Resume PDF"
          />
        </div>
      </div>
    </section>

    <!-- Structured Resume -->
    <section v-else
class="structured-resume">
      <div class="container">
        <!-- Personal Information -->
        <div class="resume-section">
          <h2 class="section-title">
            <i class="fas fa-user" />
            Personal Information
          </h2>
          <div class="personal-info">
            <div class="info-item">
<strong>Name:</strong> Esh James
</div>
            <div class="info-item">
              <strong>Title:</strong> DevOps Engineer & PHP Developer
            </div>
            <div class="info-item">
              <strong>Email:</strong>
              <a href="mailto:esh@eshjames.dev">esh@eshjames.dev</a>
            </div>
            <div class="info-item">
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
            <div class="info-item">
              <strong>Location:</strong> San Francisco, CA
            </div>
            <div class="info-item">
              <strong>LinkedIn:</strong>
              <a
href="https://linkedin.com/in/eshjames" target="_blank"
              >linkedin.com/in/eshjames</a>
            </div>
            <div class="info-item">
              <strong>GitHub:</strong>
              <a
href="https://github.com/eshjames" target="_blank"
              >github.com/eshjames</a>
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
              Experienced DevOps Engineer and PHP Developer with 5+ years of
              expertise in cloud infrastructure, automation, and full-stack
              development. Proven track record of implementing scalable
              solutions, optimizing CI/CD pipelines, and managing complex
              deployments across AWS environments. Strong background in
              containerization, infrastructure as code, and modern PHP
              frameworks.
            </p>
          </div>
        </div>

        <!-- Technical Skills -->
        <div class="resume-section">
          <h2 class="section-title">
            <i class="fas fa-code" />
            Technical Skills
          </h2>
          <div class="skills-grid">
            <div
              v-for="(skills, category) in skillsByCategory"
              :key="category"
              class="skill-category"
            >
              <h3>{{ category }}</h3>
              <div class="skill-tags">
                <span
                  v-for="skill in skills"
                  :key="skill.name"
                  class="skill-tag"
                >
                  {{ skill.name }}
                </span>
              </div>
            </div>
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
              v-for="(exp, index) in experiences"
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
                <p class="description">
                  {{ exp.description }}
                </p>
                <div class="achievements">
                  <h4>Key Achievements:</h4>
                  <ul>
                    <li
                      v-for="achievement in exp.achievements"
                      :key="achievement"
                    >
                      {{ achievement }}
                    </li>
                  </ul>
                </div>
                <div class="technologies">
                  <strong>Technologies:</strong>
                  <span
                    v-for="tech in exp.technologies"
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

        <!-- Education -->
        <div class="resume-section">
          <h2 class="section-title">
            <i class="fas fa-graduation-cap" />
            Education
          </h2>
          <div class="education-list">
            <div
              v-for="(edu, index) in education"
              :key="index"
              class="education-item"
            >
              <div class="education-header">
                <h3>{{ edu.degree }}</h3>
                <div class="education-meta">
                  <span class="institution">{{ edu.institution }}</span>
                  <span class="period">{{ edu.period }}</span>
                </div>
              </div>
              <div class="education-content">
                <p>{{ edu.description }}</p>
                <div v-if="edu.gpa"
class="gpa">
                  <strong>GPA:</strong> {{ edu.gpa }}
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="resume-section">
          <h2 class="section-title">
            <i class="fas fa-certificate" />
            Certifications
          </h2>
          <div class="certifications-list">
            <div
              v-for="(cert, index) in certifications"
              :key="index"
              class="certification-item"
            >
              <div class="cert-header">
                <h3>{{ cert.name }}</h3>
                <span class="cert-issuer">{{ cert.issuer }}</span>
                <span class="cert-date">{{ cert.date }}</span>
              </div>
              <p v-if="cert.description">
                {{ cert.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useProfileStore } from '@/stores/profile'

const profileStore = useProfileStore()
const { resumeData } = profileStore

const viewMode = ref('structured') // 'pdf' or 'structured'
const pdfUrl = ref('/Esh James (PHP).pdf')

const toggleView = () => {
  viewMode.value = viewMode.value === 'pdf' ? 'structured' : 'pdf'
}

const experiences = [
  {
    position: 'Senior DevOps Engineer',
    company: 'Tech Solutions Inc.',
    period: '2022 - Present',
    description:
      'Leading cloud infrastructure initiatives and implementing CI/CD pipelines for high-traffic applications.',
    achievements: [
      'Reduced deployment time by 60% through automated CI/CD pipeline implementation',
      'Managed Kubernetes clusters serving 10M+ daily requests',
      'Implemented infrastructure as code using Terraform, reducing manual configuration by 80%',
      'Led migration of legacy systems to AWS cloud infrastructure',
    ],
    technologies: [
      'AWS',
      'Kubernetes',
      'Terraform',
      'Docker',
      'Jenkins',
      'Ansible',
    ],
  },
  {
    position: 'PHP Developer',
    company: 'Web Development Co.',
    period: '2020 - 2022',
    description:
      'Developed scalable web applications using Laravel and Symfony frameworks.',
    achievements: [
      'Built RESTful APIs handling 1M+ requests per day',
      'Optimized database queries resulting in 40% performance improvement',
      'Implemented microservices architecture for better scalability',
      'Mentored junior developers and conducted code reviews',
    ],
    technologies: ['PHP', 'Laravel', 'Symfony', 'MySQL', 'Redis', 'Docker'],
  },
  {
    position: 'Full-Stack Developer',
    company: 'Digital Agency',
    period: '2019 - 2020',
    description:
      'Built responsive web applications and collaborated with design teams.',
    achievements: [
      'Developed 15+ client websites with modern frontend frameworks',
      'Implemented responsive designs with mobile-first approach',
      'Integrated third-party APIs and payment gateways',
      'Maintained 99.9% uptime for client applications',
    ],
    technologies: ['PHP', 'JavaScript', 'Vue.js', 'CSS', 'Git', 'MySQL'],
  },
]

const education = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'University of Technology',
    period: '2015 - 2019',
    description:
      'Focused on software engineering, algorithms, data structures, and database systems.',
    gpa: '3.8/4.0',
  },
]

const certifications = [
  {
    name: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: '2023',
    description:
      'Professional certification in designing distributed systems on AWS',
  },
  {
    name: 'Certified Kubernetes Administrator (CKA)',
    issuer: 'Cloud Native Computing Foundation',
    date: '2022',
    description:
      'Certification in Kubernetes cluster administration and troubleshooting',
  },
  {
    name: 'Laravel Certified Developer',
    issuer: 'Laravel LLC',
    date: '2021',
    description: 'Professional certification in Laravel framework development',
  },
  {
    name: 'Docker Certified Associate',
    issuer: 'Docker Inc.',
    date: '2021',
    description: 'Certification in containerization and Docker platform',
  },
]
</script>

<style scoped>
.resume-page {
  padding-top: 80px;
}

/* Hero Section */
.resume-hero {
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
  margin-bottom: 2rem;
}

.resume-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

/* PDF Section */
.pdf-section {
  padding: 2rem 0;
}

.pdf-container {
  background: var(--color-surface);
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid var(--color-border);
  box-shadow: var(--shadow-sm);
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

/* Summary */
.summary-content p {
  color: var(--color-text-muted);
  line-height: 1.7;
  font-size: 1.125rem;
}

/* Skills */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-category h3 {
  color: var(--color-text);
  margin-bottom: 1rem;
  font-size: 1.125rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-tag {
  background: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

/* Experience */
.experience-list {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.experience-item {
  border-left: 4px solid var(--color-primary);
  padding-left: 1.5rem;
}

.experience-header h3 {
  color: var(--color-text);
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.experience-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.company {
  color: var(--color-primary);
  font-weight: 600;
}

.period {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

.experience-content .description {
  color: var(--color-text-muted);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.achievements {
  margin-bottom: 1rem;
}

.achievements h4 {
  color: var(--color-text);
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.achievements ul {
  margin-left: 1.5rem;
  color: var(--color-text-muted);
}

.achievements li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.technologies {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.technologies strong {
  color: var(--color-text);
}

.tech-tag {
  background: var(--color-surface);
  color: var(--color-text-muted);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.75rem;
  border: 1px solid var(--color-border);
}

/* Education */
.education-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.education-item {
  border-left: 4px solid var(--color-accent);
  padding-left: 1.5rem;
}

.education-header h3 {
  color: var(--color-text);
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.education-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.75rem;
}

.institution {
  color: var(--color-primary);
  font-weight: 600;
}

.education-content p {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 0.5rem;
}

.gpa {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

/* Certifications */
.certifications-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}

.certification-item {
  background: var(--color-background);
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.cert-header {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}

.cert-header h3 {
  color: var(--color-text);
  font-size: 1rem;
}

.cert-issuer {
  color: var(--color-primary);
  font-weight: 600;
  font-size: 0.875rem;
}

.cert-date {
  color: var(--color-text-muted);
  font-size: 0.75rem;
}

.certification-item p {
  color: var(--color-text-muted);
  font-size: 0.875rem;
  line-height: 1.5;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .resume-actions {
    flex-direction: column;
    align-items: center;
  }

  .personal-info {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .experience-meta,
  .education-meta {
    flex-direction: column;
    gap: 0.25rem;
  }

  .technologies {
    flex-direction: column;
    align-items: flex-start;
  }

  .certifications-list {
    grid-template-columns: 1fr;
  }

  .resume-section {
    padding: 1.5rem;
  }
}
</style>
