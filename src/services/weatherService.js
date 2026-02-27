// Base configuration
const API_CONFIG = {
  BASE_URL: 'https://api.openweathermap.org/data/2.5',
  API_KEY: import.meta.env.VITE_WEATHER_API_KEY,
  UNITS: 'metric' // 'metric' for Celsius, 'imperial' for Fahrenheit
}

// Helper function to handle API responses consistently
const handleResponse = async (response) => {
  if (!response.ok) {
    // Create error object with status code
    const error = new Error()
    error.status = response.status
    
    // Add appropriate message based on status
    if (response.status === 404) {
      error.message = "City not found"
    } else if (response.status === 401) {
      error.message = "Invalid API key"
    } else if (response.status === 429) {
      error.message = "Rate limit exceeded"
    } else if (response.status >= 500) {
      error.message = "Server error"
    } else {
      error.message = "Unknown error"
    }
    
    throw error
  }
  
  const data = await response.json()
  return data
}

// Get current weather by city name
export const getWeatherByCity = async (city) => {
  try {
    const url = `${API_CONFIG.BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_CONFIG.API_KEY}&units=${API_CONFIG.UNITS}`
    
    const response = await fetch(url)
    const data = await handleResponse(response)
    
    return data
  } catch (error) {
    console.error('Weather API Error:', error)
    
    // Enhance network errors with status
    if (error.message === 'Failed to fetch') {
      error.status = 0 // Custom status for network errors
    }
    
    throw error
  }
}

// Get weather by coordinates 
export const getWeatherByCoords = async (lat, lon) => {
  try {
    const url = `${API_CONFIG.BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_CONFIG.API_KEY}&units=${API_CONFIG.UNITS}`
    
    const response = await fetch(url)
    const data = await handleResponse(response)
    
    return data
  } catch (error) {
    console.error('Weather API Error:', error)
    throw error
  }
}

// Get 5-day forecast 
export const getForecastByCity = async (city) => {
  try {
    const url = `${API_CONFIG.BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_CONFIG.API_KEY}&units=${API_CONFIG.UNITS}`
    
    const response = await fetch(url)
    const data = await handleResponse(response)
    
    return data
  } catch (error) {
    console.error('Forecast API Error:', error)
    throw error
  }
}

// Get 5-day forecast by coordinates 
export const getForecastByCoords = async (lat, lon) => {
  try {
    const url = `${API_CONFIG.BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_CONFIG.API_KEY}&units=${API_CONFIG.UNITS}`
    
    const response = await fetch(url)
    const data = await handleResponse(response)
    
    return data
  } catch (error) {
    console.error('Forecast API Error:', error)
    throw error
  }
}