// Service to load and manage profile data from JSON
import profileData from '@/data/profile.json'

export class ProfileService {
  /**
   * Get all profile data
   * @returns {Object} Complete profile data
   */
  static getProfile() {
    return profileData
  }

  /**
   * Get personal information
   * @returns {Object} Personal info
   */
  static getPersonalInfo() {
    return profileData.personalInfo
  }

  /**
   * Get professional summary
   * @returns {string} Summary text
   */
  static getSummary() {
    return profileData.summary
  }

  /**
   * Get work experience
   * @returns {Array} Experience array
   */
  static getExperience() {
    return profileData.experience
  }

  /**
   * Get education
   * @returns {Array} Education array
   */
  static getEducation() {
    return profileData.education
  }

  /**
   * Get all skills organized by category
   * @returns {Object} Skills grouped by category
   */
  static getSkills() {
    return profileData.skills
  }

  /**
   * Get flattened skills array for display
   * @returns {Array} All skills with category info
   */
  static getSkillCategories() {
    const skills = profileData.skills
    const categories = {}
    
    // Transform the skills structure to match our component expectations
    Object.keys(skills).forEach(category => {
      const categorySkills = skills[category].map(skill => ({
        name: skill.name,
        level: skill.level,
        category: this.formatCategoryName(category)
      }))
      categories[this.formatCategoryName(category)] = categorySkills
    })
    
    return categories
  }

  /**
   * Get achievements
   * @returns {Array} Achievements array
   */
  static getAchievements() {
    return profileData.achievements
  }

  /**
   * Get projects
   * @returns {Array} Projects array
   */
  static getProjects() {
    return profileData.projects
  }

  /**
   * Get certifications
   * @returns {Array} Certifications array
   */
  static getCertifications() {
    return profileData.certifications || []
  }

  /**
   * Format category name for display
   * @param {string} category - Category key
   * @returns {string} Formatted category name
   */
  static formatCategoryName(category) {
    const categoryMap = {
      'languagesFrameworks': 'Backend',
      'frontendDevelopment': 'Frontend',
      'databases': 'Database',
      'apisIntegrations': 'API',
      'testingQa': 'Testing',
      'devopsTools': 'DevOps',
      'cloudDeployment': 'Cloud',
      'professionalSkills': 'Professional'
    }
    
    return categoryMap[category] || category
  }

  /**
   * Get skills for resume display
   * @returns {Object} Skills organized for resume
   */
  static getSkillsForResume() {
    const skills = this.getSkills()
    const resumeSkills = {}
    
    // Combine similar skills categories
    resumeSkills['Languages & Frameworks'] = [
      ...skills.languagesFrameworks,
      ...skills.frontendDevelopment.slice(0, 3) // HTML, CSS, Bootstrap
    ]
    
    resumeSkills['Databases'] = skills.databases
    resumeSkills['APIs & Integrations'] = skills.apisIntegrations
    resumeSkills['Testing & QA'] = skills.testingQa
    resumeSkills['DevOps & Tools'] = skills.devopsTools
    resumeSkills['Cloud & Deployment'] = skills.cloudDeployment
    resumeSkills['Professional Skills'] = skills.professionalSkills.slice(0, 6) // Top 6 professional skills
    
    return resumeSkills
  }
}

export default ProfileService
