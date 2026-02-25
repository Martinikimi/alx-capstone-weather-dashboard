import { useState, useEffect } from "react" // 
import { getWeatherByCity } from "../services/weatherService"
import { getRecentCities, saveRecentCity } from "../services/storageService" 

export function useWeather() {
  // State for weather data, loading, and errors
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  // 👇 NEW: State for recent searches
  const [recentSearches, setRecentSearches] = useState([])

  //  Load recent searches when the app starts
  useEffect(() => {
    const cities = getRecentCities()
    setRecentSearches(cities)
  }, []) // Empty array means "run once when component mounts"

  // Function to search for a city
  const searchCity = async (city) => {
    try {
      // Clear previous errors and start loading
      setError("")
      setLoading(true)
      console.log("Loading is:", true)

      // Fetch weather data
      const data = await getWeatherByCity(city)
      
      // Save data and stop loading
      setWeatherData(data)
      
      //  Save to recent searches after successful search
      const updatedCities = saveRecentCity(city)
      setRecentSearches(updatedCities)
      
      setLoading(false)
      console.log("Loading is:", false)

    } catch (err) {
      // Handle errors
      setWeatherData(null)
      setError(err.message)
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