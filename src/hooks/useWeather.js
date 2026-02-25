import { useState } from "react"
import { getWeatherByCity } from "../services/weatherService"

export function useWeather() {
  // State for weather data, loading, and errors
  const [weatherData, setWeatherData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

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
      setLoading(false)
      console.log("Loading is:", false)

    } catch (err) {
      // Handle errors
      setWeatherData(null)
      setError(err.message)
      setLoading(false)
    }
  }

  // Return everything the component needs
  return {
    weatherData,
    loading,
    error,
    searchCity
  }
}