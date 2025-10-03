// API service for handling external requests

import axios from 'axios'

// Create axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  config => {
    // Add auth token if available
    const token = localStorage.getItem('auth_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    // Handle common errors
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login or clear token
      localStorage.removeItem('auth_token')
    }
    return Promise.reject(error)
  }
)

// GitHub API service
export const githubService = {
  /**
   * Get user repositories
   * @param {string} username - GitHub username
   * @returns {Promise} User repositories
   */
  async getUserRepos(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          params: {
            sort: 'updated',
            per_page: 10,
          },
        }
      )
      return response.data
    } catch (error) {
      console.error('Error fetching GitHub repos:', error)
      throw error
    }
  },

  /**
   * Get user profile
   * @param {string} username - GitHub username
   * @returns {Promise} User profile
   */
  async getUserProfile(username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      )
      return response.data
    } catch (error) {
      console.error('Error fetching GitHub profile:', error)
      throw error
    }
  },

  /**
   * Get repository languages
   * @param {string} username - GitHub username
   * @param {string} repo - Repository name
   * @returns {Promise} Repository languages
   */
  async getRepoLanguages(username, repo) {
    try {
      const response = await axios.get(
        `https://api.github.com/repos/${username}/${repo}/languages`
      )
      return response.data
    } catch (error) {
      console.error('Error fetching repo languages:', error)
      throw error
    }
  },
}

// Contact form service
export const contactService = {
  /**
   * Send contact form
   * @param {Object} formData - Form data
   * @returns {Promise} Response
   */
  async sendMessage(formData) {
    try {
      // In a real app, this would send to your backend
      // For now, we'll simulate the API call with the formData
      console.log('Sending message:', formData) // Use the formData to avoid linting error
      await new Promise(resolve => setTimeout(resolve, 2000))

      return {
        success: true,
        message: 'Message sent successfully!',
      }
    } catch (error) {
      console.error('Error sending message:', error)
      throw error
    }
  },
}

// Resume service
export const resumeService = {
  /**
   * Parse PDF resume (mock implementation)
   * @param {File} file - PDF file
   * @returns {Promise} Parsed resume data
   */
  async parseResume(file) {
    try {
      // In a real app, you'd use a PDF parsing library
      // This is a mock implementation
      console.log('Parsing resume:', file.name) // Use the file to avoid linting error
      await new Promise(resolve => setTimeout(resolve, 1000))

      return {
        name: 'Esh James',
        email: 'esh@eshjames.dev',
        phone: '+1 (555) 123-4567',
        skills: ['PHP', 'Laravel', 'AWS', 'Docker', 'Kubernetes'],
        experience: [
          {
            title: 'Senior Full Stack Developer',
            company: 'Hubstaff',
            period: '2021 - Present',
          },
        ],
        education: [
          {
            degree: 'Bachelor of Computer Science',
            institution: 'University of Technology',
            period: '2015 - 2019',
          },
        ],
      }
    } catch (error) {
      console.error('Error parsing resume:', error)
      throw error
    }
  },
}

export default api
