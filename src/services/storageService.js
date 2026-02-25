// Key for localStorage
const STORAGE_KEY = 'recentCities'
const MAX_CITIES = 5

// Get recent cities from localStorage
export const getRecentCities = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (error) {
    console.error('Failed to load recent cities:', error)
    return []
  }
}

// Save a city to recent searches
export const saveRecentCity = (city) => {
  try {
    // Get current list
    const current = getRecentCities()
    
    // Remove if already exists (to avoid duplicates)
    const filtered = current.filter(c => c.toLowerCase() !== city.toLowerCase())
    
    // Add new city to beginning
    const updated = [city, ...filtered]
    
    // Keep only last 5
    const trimmed = updated.slice(0, MAX_CITIES)
    
    // Save back to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed))
    
    return trimmed
  } catch (error) {
    console.error('Failed to save recent city:', error)
    return getRecentCities()
  }
}

// Clear all recent searches 
export const clearRecentCities = () => {
  localStorage.removeItem(STORAGE_KEY)
}