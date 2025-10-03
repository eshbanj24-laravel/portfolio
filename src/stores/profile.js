import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import ProfileService from '@/services/profileService'

export const useProfileStore = defineStore('profile', () => {
  // Load data from centralized profile service
  const profileData = ProfileService.getProfile()
  const projects = ref(ProfileService.getProjects())
  const experience = ref(ProfileService.getExperience())
  const education = ref(ProfileService.getEducation())
  const achievements = ref(ProfileService.getAchievements())
  const certifications = ref(ProfileService.getCertifications())
  
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
  const personalInfo = computed(() => profileData.personalInfo)
  const summary = computed(() => profileData.summary)
  
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

  // Get resume-specific data
  const resumeData = computed(() => ({
    personalInfo: personalInfo.value,
    summary: summary.value,
    experience: experience.value,
    education: education.value,
    skills: ProfileService.getSkillsForResume(),
    achievements: achievements.value,
    certifications: certifications.value
  }))

  return {
    // Data
    personalInfo,
    summary,
    projects,
    experience,
    education,
    achievements,
    certifications,
    skills,
    
    // Computed
    featuredProjects,
    projectsByCategory,
    skillsByCategory,
    resumeData
  }
})
