
const API_CONFIG = {
  BASE_URL: 'https://api.openweathermap.org/data/2.5',
  API_KEY: import.meta.env.VITE_WEATHER_API_KEY,
  UNITS: 'metric' // 'metric' for Celsius, 'imperial' for Fahrenheit
}

// Helper function to handle API responses consistently
const handleResponse = async (response) => {
  if (!response.ok) {
    // Handle different error types with user-friendly messages
    if (response.status === 404) {
      throw new Error("City not found. Please check the spelling and try again.")
    } else if (response.status === 401) {
      throw new Error("API key error. Please check your configuration.")
    } else if (response.status === 429) {
      throw new Error("Too many requests. Please wait a moment and try again.")
    } else {
      throw new Error("Unable to fetch weather data. Please try again later.")
    }
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
    // Re-throw with user-friendly message if not already formatted
    if (error.message.includes("City not found") || 
        error.message.includes("API key") || 
        error.message.includes("Too many requests")) {
      throw error
    } else {
      throw new Error("Network error. Please check your internet connection.")
    }
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
    throw new Error("Unable to fetch weather for your location.")
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