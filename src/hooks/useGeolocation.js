import { useState } from "react"
import { getWeatherByCoords } from "../services/weatherService"

export function useGeolocation() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [locationDenied, setLocationDenied] = useState(false)

  const getUserLocation = async (onSuccess) => {
    // Check if browser supports geolocation
    if (!navigator.geolocation) {
      setError({
        title: " Not Supported",
        message: "Geolocation is not supported by your browser."
      })
      return
    }

    setLoading(true)
    setError(null)
    setLocationDenied(false)

    navigator.geolocation.getCurrentPosition(
      // Success callback
      async (position) => {
        try {
          const { latitude, longitude } = position.coords
          const weatherData = await getWeatherByCoords(latitude, longitude)
          onSuccess(weatherData)
        } catch (err) {
          setError({
            title: " Weather Error",
            message: "Could not fetch weather for your location."
          })
        } finally {
          setLoading(false)
        }
      },
      
      // Error callback
      (err) => {
        setLoading(false)
        
        // Handle different permission errors
        if (err.code === 1) { 
          setLocationDenied(true)
          setError({
            title: " Location Denied",
            message: "Please enable location access to see weather for your area."
          })
        } else if (err.code === 2) { 
          setError({
            title: "📡 Location Unavailable",
            message: "Your location could not be determined. Please try again."
          })
        } else if (err.code === 3) { 
          setError({
            title: "⏱ Location Timeout",
            message: "Location request timed out. Please try again."
          })
        }
      },
      
      // Options
      {
        enableHighAccuracy: false,
        timeout: 10000,
        maximumAge: 60000
      }
    )
  }

  return { getUserLocation, loading, error, locationDenied }
}