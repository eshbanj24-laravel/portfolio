<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <div class="container">
          <div class="hero-text">
            <h1 class="hero-title">
              Hi, I'm <span class="text-primary">Esh James</span>
            </h1>
            <h2 class="hero-subtitle">Senior Full Stack Developer</h2>
            <p class="hero-description">
              I create scalable web applications using Laravel, Vue.js, modern PHP frameworks. Passionate about building robust SaaS platforms and delivering seamless user experiences.
            </p>
            <div class="hero-actions">
              <router-link to="/projects" class="btn btn-primary">
                <i class="fas fa-code"></i>
                <span>View My Work</span>
              </router-link>
              <router-link to="/contact" class="btn btn-outline">
                <i class="fas fa-envelope"></i>
                <span>Get In Touch</span>
              </router-link>
            </div>
          </div>
          <div class="hero-image">
            <div class="hero-graphic">
              <div class="code-block">
                <div class="code-line">
                  <span class="code-keyword">class</span>
                  <span class="code-class"> Developer</span> 
                  <span class="code-punctuation">{</span>
                </div>
                <div class="code-line">
                  <span class="code-indent"></span>
                  <span class="code-property">skills:</span> 
                  <span class="code-value">['Laravel', 'Vue.js', 'PHP']</span>
                </div>
                <div class="code-line">
                  <span class="code-punctuation">}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Preview -->
    <section class="skills-preview">
      <div class="container">
        <div class="skills-content">
          <h2 class="section-title">Core Technologies</h2>
          <p class="section-subtitle">
            Specialized in modern web development stack
          </p>
          <div class="skills-grid">
            <div 
              v-for="skill in coreSkills" 
              :key="skill.name"
              class="skill-card"
            >
              <div class="skill-icon">
                <i :class="skill.icon"></i>
              </div>
              <div class="skill-content">
                <h3 class="skill-name">{{ skill.name }}</h3>
                <p class="skill-description">{{ skill.description }}</p>
                <div class="skill-level">
                  <div class="skill-bar">
                    <div 
                      class="skill-progress" 
                      :style="{ width: skill.level + '%' }"
                    ></div>
                  </div>
                  <span class="skill-percentage">{{ skill.level }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="featured-projects">
      <div class="container">
        <div class="projects-content">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">
            Some of my recent work showcasing modern web development
          </p>
          <div class="projects-grid">
            <div 
              v-for="project in featuredProjects" 
              :key="project.id"
              class="project-card"
            >
              <div class="project-image">
                <img 
                  :src="project.image" 
                  :alt="project.title"
                  loading="lazy"
                />
                <div class="project-overlay">
                  <div class="project-links">
                    <a 
                      v-if="project.website" 
                      :href="project.website" 
                      target="_blank" 
                      class="project-link"
                      title="Visit Website"
                    >
                      <i class="fas fa-external-link-alt"></i>
                    </a>
                    <router-link 
                      :to="`/projects#project-${project.id}`" 
                      class="project-link"
                      title="View Details"
                    >
                      <i class="fas fa-info-circle"></i>
                    </router-link>
                  </div>
                </div>
              </div>
              <div class="project-content">
                <div class="project-category">{{ project.category }}</div>
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                <div class="project-tech">
                  <span 
                    v-for="tech in project.technologies.slice(0, 4)" 
                    :key="tech" 
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                </div>
                <div class="project-highlights">
                  <span 
                    v-for="highlight in project.highlights.slice(0, 2)" 
                    :key="highlight" 
                    class="highlight-item"
                  >
                    {{ highlight }}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="projects-actions">
            <router-link to="/projects" class="btn btn-primary">
              <span>View All Projects</span>
              <i class="fas fa-arrow-right"></i>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2 class="cta-title">Ready to Build Something Amazing?</h2>
          <p class="cta-description">
            Let's collaborate on your next project and bring your ideas to life with modern web technologies.
          </p>
          <div class="cta-actions">
            <router-link to="/contact" class="btn btn-primary btn-large">
              <i class="fas fa-rocket"></i>
              <span>Start a Project</span>
            </router-link>
            <router-link to="/resume" class="btn btn-outline btn-large">
              <i class="fas fa-download"></i>
              <span>Download Resume</span>
            </router-link>
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

// Core technologies featured on home page
const coreSkills = [
  {
    name: 'Laravel',
    icon: 'fab fa-laravel',
    description: 'Modern PHP framework for robust backend development',
    level: 92
  },
  {
    name: 'Vue.js',
    icon: 'fas fa-code',
    description: 'Progressive JavaScript framework for reactive UIs',
    level: 88
  },
  {
    name: 'PHP',
    icon: 'fab fa-php',
    description: 'Backend programming with modern PHP practices',
    level: 95
  },
  {
    name: 'JavaScript',
    icon: 'fab fa-js-square',
    description: 'Full-stack development with modern ES6+ features',
    level: 90
  },
  {
    name: 'MySQL',
    icon: 'fas fa-database',
    description: 'Relational database design and optimization',
    level: 93
  },
  {
    name: 'AWS',
    icon: 'fab fa-aws',
    description: 'Cloud infrastructure and deployment solutions',
    level: 90
  }
]

// Get featured projects from store
const featuredProjects = computed(() => profileStore.projects.filter(p => p.featured))
</script>

<style scoped>
/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg width="60" height="60"， viewBox="0 0 60 60"， xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23000000" fill-opacity="0.05"><circle cx="30" cy="30" r="1"/></g></svg>');
  opacity: 0.1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-text {
  max-width: 600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: var(--text-primary);
  line-height: 1.2;
}

.text-primary {
  color: var(--color-primary);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  font-weight: 500;
}

.hero-description {
  font-size: 1.2rem;
  color: var(--text-muted);
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

/* Hero Graphic */
.hero-graphic {
  display: flex;
  justify-content: center;
  align-items: center;
}

.code-block {
  background: var(--bg-code);
  border: 1px solid var(--border-color);
  border-radius: 8px;
  padding: 1.5rem;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  font-size: 1.1rem;
  line-height: 1.6;
  box-shadow: var(--shadow-lg);
  max-width: 400px;
}

.code-line {
  margin-bottom: 0.5rem;
}

.code-keyword {
  color: var(--color-primary);
  font-weight: 600;
}

.code-class {
  color: #6f42c1;
}

.code-property {
  color: #e74c3c;
}

.code-value {
  color: #28a745;
}

.code-punctuation {
  color: var(--text-muted);
}

.code-indent {
  display: inline-block;
  width: 2ch;
}

/* Skills Section */
.skills-preview {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.section-subtitle {
  text-align: center;
  color: var(--text-muted);
  margin-bottom: 3rem;
  font-size: 1.2rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.skill-card {
  background: var(--bg-card);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.skill-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.skill-icon i {
  font-size: 1.5rem;
  color: white;
}

.skill-name {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
}

.skill-description {
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.skill-level {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-bar {
  flex: 1;
  height: 6px;
  background: var(--bg-muted);
  border-radius: 3px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
  transition: width 0.6s ease;
}

.skill-percentage {
  font-weight: 600;
  color: var(--color-primary);
  font-size: 0.9rem;
}

/* Featured Projects */
.featured-projects {
  padding: 5rem 0;
  background: var(--bg-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: var(--bg-card);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;
  box-shadow: var(--shadow-sm);
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-link {
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.project-link:hover {
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
}

.project-category {
  color: var(--color-primary);
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.project-description {
  color: var(--text-muted);
  margin-bottom: 1rem;
  line-height: 1.5;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: var(--bg-muted);
  color: var(--text-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 16px;
  font-size: 0.8rem;
  font-weight: 500;
}

.project-highlights {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.highlight-item {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.4;
}

.projects-actions {
  text-align: center;
}

/* CTA Section */
.cta {
  padding: 5rem 0;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-content .container {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .skills-grid {
    grid-template-columns: 1fr;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-title {
    font-size: 2rem;
  }
  
  .cta-actions {
    flex-direction: column;
    align-items: center;
  }
}
</style>