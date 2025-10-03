<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="projects-hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">My Projects</h1>
          <p class="hero-subtitle">
            A collection of my work showcasing Laravel development, Vue.js frontend, and scalable web solutions
          </p>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-controls">
          <button
            v-for="category in categories"
            :key="category"
            :class="['filter-btn', { active: activeCategory === category }]"
            @click="setActiveCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-section">
      <div class="container">
        <div class="projects-grid">
          <ProjectCard
            v-for="project in filteredProjects"
            :key="project.id"
            :project="project"
          />
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0"
class="empty-state">
          <i class="fas fa-search" />
          <h3>No projects found</h3>
          <p>No projects match the selected category.</p>
        </div>
      </div>
    </section>

    <!-- GitHub Stats -->
    <section class="stats-section">
      <div class="container">
        <h2 class="section-title">GitHub Activity</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fab fa-github" />
            </div>
            <div class="stat-content">
              <h3>{{ githubStats.repositories }}</h3>
              <p>Repositories</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-code" />
            </div>
            <div class="stat-content">
              <h3>{{ githubStats.commits }}</h3>
              <p>Commits This Year</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-star" />
            </div>
            <div class="stat-content">
              <h3>{{ githubStats.stars }}</h3>
              <p>Stars Received</p>
            </div>
          </div>
          <div class="stat-card">
            <div class="stat-icon">
              <i class="fas fa-code-branch" />
            </div>
            <div class="stat-content">
              <h3>{{ githubStats.contributions }}</h3>
              <p>Contributions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useProfileStore } from '@/stores/profile'
import ProjectCard from '@/components/projects/ProjectCard.vue'

const profileStore = useProfileStore()
const { projects, projectsByCategory } = profileStore

const activeCategory = ref('All')

const categories = computed(() => {
  const cats = ['All', ...Object.keys(projectsByCategory)]
  return cats
})

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') {
    return projects
  }
  return projectsByCategory[activeCategory.value] || []
})

const setActiveCategory = category => {
  activeCategory.value = category
}

// Mock GitHub stats - in a real app, you'd fetch this from GitHub API
const githubStats = ref({
  repositories: 25,
  commits: 1200,
  stars: 45,
  contributions: 1800,
})
</script>

<style scoped>
.projects-page {
  padding-top: 80px;
}

/* Hero Section */
.projects-hero {
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

/* Filter Section */
.filter-section {
  padding: 2rem 0;
  background: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
}

.filter-controls {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.75rem 1.5rem;
  background: var(--color-background);
  color: var(--color-text);
  border: 2px solid var(--color-border);
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
}

.filter-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.filter-btn.active {
  background: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

/* Projects Section */
.projects-section {
  padding: 4rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  color: var(--color-text-muted);
}

.empty-state i {
  font-size: 4rem;
  margin-bottom: 1rem;
  color: var(--color-secondary);
}

.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-text);
}

/* Stats Section */
.stats-section {
  padding: 4rem 0;
  background: var(--color-surface);
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--color-text);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: var(--color-background);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: all 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.stat-icon {
  width: 60px;
  height: 60px;
  background: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.stat-icon i {
  font-size: 1.5rem;
  color: white;
}

.stat-content h3 {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-text);
  margin-bottom: 0.25rem;
}

.stat-content p {
  color: var(--color-text-muted);
  font-size: 0.875rem;
}

/* Mobile Styles */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .filter-controls {
    gap: 0.5rem;
  }

  .filter-btn {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-card {
    flex-direction: column;
    text-align: center;
  }

  .stat-icon {
    width: 50px;
    height: 50px;
  }

  .stat-icon i {
    font-size: 1.25rem;
  }

  .stat-content h3 {
    font-size: 1.5rem;
  }
}
</style>
