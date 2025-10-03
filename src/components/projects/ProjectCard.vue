<template>
  <div class="project-card"
:class="{ featured: featured }">
    <div class="project-image">
      <img
        :src="project.image"
        :alt="project.title"
        @error="handleImageError"
      />
      <div class="project-overlay">
        <div class="project-actions">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener noreferrer"
            class="action-btn"
            title="View on GitHub"
          >
            <i class="fab fa-github" />
          </a>
          <a
            v-if="project.website"
            :href="project.website"
            target="_blank"
            rel="noopener noreferrer"
            class="action-btn"
            title="Visit Website"
          >
            <i class="fas fa-external-link-alt" />
          </a>
          <a
            v-if="project.demo && project.demo !== project.website"
            :href="project.demo"
            target="_blank"
            rel="noopener noreferrer"
            class="action-btn"
            title="View Demo"
          >
            <i class="fas fa-play" />
          </a>
        </div>
      </div>
    </div>

    <div class="project-content">
      <div class="project-header">
        <h3 class="project-title">
          {{ project.title }}
        </h3>
        <span class="project-category">{{ project.category }}</span>
      </div>

      <p class="project-description">
        {{ project.description }}
      </p>

      <div v-if="project.location" class="project-location">
        <i class="fas fa-map-marker-alt"></i>
        <span>{{ project.location }}</span>
      </div>

      <div v-if="project.highlights && project.highlights.length > 0" class="project-highlights">
        <h4>Key Highlights:</h4>
        <ul>
          <li v-for="highlight in project.highlights.slice(0, 3)" :key="highlight">{{ highlight }}</li>
        </ul>
      </div>

      <div class="project-technologies">
        <span v-for="tech in project.technologies" :key="tech" class="tech-tag">
          {{ tech }}
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
// No imports needed for this component

defineProps({
  project: {
    type: Object,
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
})

const handleImageError = event => {
  // Replace with placeholder image if the image fails to load
  event.target.src =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgNzVIMTc1VjEyNUgxMjVWNzVaIiBmaWxsPSIjOUNBM0FGIi8+CjxwYXRoIGQ9Ik0xMzcuNSA4Ny41SDE2Mi41VjExMi41SDEzNy41Vjg3LjVaIiBmaWxsPSIjNjM3NDhCIi8+Cjwvc3ZnPgo='
}
</script>

<style scoped>
.project-card {
  background: var(--color-surface);
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--color-border);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.project-card.featured {
  border-color: var(--color-primary);
  box-shadow: 0 0 0 1px var(--color-primary);
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

.project-actions {
  display: flex;
  gap: 1rem;
}

.action-btn {
  width: 50px;
  height: 50px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: var(--color-primary-dark);
  transform: scale(1.1);
}

.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--color-text);
  margin: 0;
}

.project-category {
  background: var(--color-primary);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-description {
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
}

.project-location {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--color-primary);
  font-size: 0.875rem;
  margin-bottom: 1rem;
  font-weight: 500;
}

.project-location i {
  font-size: 0.75rem;
}

.project-highlights {
  margin-bottom: 1.5rem;
}

.project-highlights h4 {
  font-size: 0.875rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.project-highlights ul {
  list-style: none;
  padding: 0;
}

.project-highlights li {
  font-size: 0.8rem;
  color: var(--color-text-muted);
  margin-bottom: 0.25rem;
  padding-left: 1rem;
  position: relative;
}

.project-highlights li::before {
  content: "•";
  color: var(--color-primary);
  position: absolute;
  left: 0;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: var(--color-surface);
  color: var(--color-text-muted);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  border: 1px solid var(--color-border);
}

/* Mobile Styles */
@media (max-width: 768px) {
  .project-header {
    flex-direction: column;
    gap: 0.5rem;
  }

  .project-category {
    align-self: flex-start;
  }

  .project-technologies {
    gap: 0.25rem;
  }

  .tech-tag {
    font-size: 0.7rem;
    padding: 0.2rem 0.5rem;
  }
}
</style>
