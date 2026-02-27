import { useState, useEffect } from "react"
import { getWeatherByCity } from "../services/weatherService"
import { getRecentCities, saveRecentCity } from "../services/storageService"
import { getErrorMessage } from "../utils/errorMessages"

export function useWeather() {
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null) 
  const [recentSearches, setRecentSearches] = useState([])

  useEffect(() => {
    const cities = getRecentCities()
    setRecentSearches(cities)
  }, [])

  const searchCity = async (city) => {
    try {
      setError(null) 
      setLoading(true)

      const data = await getWeatherByCity(city)
      
      setWeatherData(data)
      
      const updated = saveRecentCity(city)
      setRecentSearches(updated)
      
      setLoading(false)

    } catch (err) {
      setWeatherData(null)
      
      // Get user-friendly error object
      const errorInfo = getErrorMessage(err)
      setError({
        title: errorInfo.title,
        message: errorInfo.message,
        raw: err.message
      })
      
      setLoading(false)
    }
  }

  return {
    weatherData,
    loading,
    error, 
    searchCity,
    recentSearches
  }
}