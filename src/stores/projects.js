import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import ProfileService from '@/services/profileService'

export const useProjectsStore = defineStore('projects', () => {
  // Load data from centralized profile service
  const projects = ref(ProfileService.getProjects())
  
  // Transform skills data for the store format
  const skillCategories = ProfileService.getSkillCategories()
  const skills = ref([])
  
  // Flatten all skills into a single array
  Object.keys(skillCategories).forEach(category => {
    skillCategories[category].forEach(skill => {
      skills.value.push(skill)
    })
  })

  // Getters
  const featuredProjects = computed(() => 
    projects.value.filter(project => project.featured)
  )

  const projectsByCategory = computed(() => {
    const categories = {}
    projects.value.forEach(project => {
      if (!categories[project.category]) {
        categories[project.category] = []
      }
      categories[project.category].push(project)
    })
    return categories
  })

  const skillsByCategory = computed(() => skillCategories)

  return {
    projects,
    skills,
    featuredProjects,
    projectsByCategory,
    skillsByCategory
  }
})