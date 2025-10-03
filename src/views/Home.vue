<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title fade-in">
              Hi, I'm <span class="text-gradient">Esh James</span>
            </h1>
            <h2 class="hero-subtitle slide-up">
              DevOps Engineer & PHP Developer
            </h2>
            <p class="hero-description slide-up">
              I specialize in building scalable SaaS platforms, multi-tenant architectures, and 
              enterprise-grade applications. Passionate about Laravel development, Vue.js frameworks, 
              and creating solutions that drive business growth through technology.
            </p>
            <div class="hero-actions slide-up">
              <router-link to="/projects"
class="btn btn-primary">
                <i class="fas fa-code" />
                View My Work
              </router-link>
              <router-link to="/contact"
class="btn btn-secondary">
                <i class="fas fa-envelope" />
                Get In Touch
              </router-link>
            </div>
          </div>
          <div class="hero-image">
            <div class="image-placeholder">
              <i class="fas fa-user-circle" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Preview -->
    <section class="skills-preview">
      <div class="container">
        <h2 class="section-title">Core Technologies</h2>
        <div class="skills-grid">
          <div v-for="skill in coreSkills" :key="skill.name" class="skill-item">
            <div class="skill-icon">
              <i :class="skill.icon" />
            </div>
            <h3>{{ skill.name }}</h3>
            <p>{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Projects -->
    <section class="featured-projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <router-link to="/projects"
class="view-all-link">
            View All Projects
            <i class="fas fa-arrow-right" />
          </router-link>
        </div>
        <div class="projects-grid">
          <ProjectCard
            v-for="project in featuredProjects"
            :key="project.id"
            :project="project"
            :featured="true"
          />
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to work together?</h2>
          <p>
            Let's discuss your next project and how I can help bring your ideas
            to life.
          </p>
          <router-link to="/contact"
class="btn btn-primary">
            <i class="fas fa-rocket" />
            Start a Project
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useProfileStore } from '@/stores/profile'
import ProjectCard from '@/components/projects/ProjectCard.vue'

const profileStore = useProfileStore()
const { featuredProjects } = profileStore

const coreSkills = [
  {
    name: 'Laravel Development',
    icon: 'fab fa-laravel',
    description: 'Multi-tenant SaaS, RESTful APIs, Service Containers',
  },
  {
    name: 'Vue.js Expertise',
    icon: 'fas fa-code',
    description: 'Component reuse, Frontend architecture, Real-time apps',
  },
  {
    name: 'AWS Cloud',
    icon: 'fab fa-aws',
    description: 'EC2, RDS, S3, Scalable deployment strategies',
  },
  {
    name: 'Payment Systems',
    icon: 'fas fa-credit-card',
    description: 'Stripe, PayPal, BNPL platforms, Subscription billing',
  },
]
</script>

<style scoped>
.home-page {
  padding-top: 80px; /* Account for fixed header */
}

/* Hero Section */
.hero {
  padding: 4rem 0;
  background: linear-gradient(
    135deg,
    var(--color-surface) 0%,
    var(--color-background) 100%
  );
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-primary);
  margin-bottom: 1.5rem;
  font-weight: 600;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--color-text-muted);
  margin-bottom: 2rem;
  line-height: 1.7;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: var(--color-surface);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid var(--color-primary);
}

.image-placeholder i {
  font-size: 8rem;
  color: var(--color-primary);
}

/* Skills Preview */
.skills-preview {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.skill-item {
  text-align: center;
  padding: 2rem;
  background: var(--color-surface);
  border-radius: 12px;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.skill-icon {
  width: 80px;
  height: 80px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
}

.skill-icon i {
  font-size: 2rem;
  color: white;
}

.skill-item h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

.skill-item p {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

/* Featured Projects */
.featured-projects {
  padding: 4rem 0;
  background: var(--color-surface);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
}

.view-all-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.view-all-link:hover {
  gap: 0.75rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

/* CTA Section */
.cta-section {
  padding: 4rem 0;
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-accent) 100%
  );
  color: white;
  text-align: center;
}

.cta-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-section .btn {
  background: white;
  color: var(--color-primary);
}

.cta-section .btn:hover {
  background: var(--color-surface);
  transform: translateY(-2px);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.25rem;
  }

  .hero-actions {
    justify-content: center;
  }

  .image-placeholder {
    width: 200px;
    height: 200px;
  }

  .image-placeholder i {
    font-size: 5rem;
  }

  .section-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
