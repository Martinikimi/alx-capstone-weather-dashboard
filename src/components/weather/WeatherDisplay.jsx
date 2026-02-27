import { useState, useEffect } from "react"
import WeatherIcon from "./WeatherIcon"
import ForecastDisplay from "./ForecastDisplay"
import { useUnit } from "../../context/UnitContext"
import { formatTemperature } from "../../utils/formatters"
import { getForecastByCity } from "../../services/weatherService"

function WeatherDisplay({ weatherData }) {
  const { unit } = useUnit()
  const [forecastData, setForecastData] = useState(null)
  const [loadingForecast, setLoadingForecast] = useState(false)
  
  if (!weatherData) return null

  const { name, main, wind, weather, sys, visibility, clouds } = weatherData
  const weatherInfo = weather[0]
  const iconCode = weatherInfo.icon
  const description = weatherInfo.description

  // Fetch forecast when weather data changes
  useEffect(() => {
    const fetchForecast = async () => {
      if (name) {
        setLoadingForecast(true)
        try {
          const data = await getForecastByCity(name)
          setForecastData(data)
        } catch (error) {
          console.error('Failed to fetch forecast:', error)
        } finally {
          setLoadingForecast(false)
        }
      }
    }
    
    fetchForecast()
  }, [name])

  // Format sunrise/sunset from Unix timestamps
  const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const sunset = new Date(sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  // Convert visibility from meters to km
  const visibilityKm = (visibility / 1000).toFixed(1)

  // Get wind direction as compass direction
  const getWindDirection = (deg) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    const index = Math.round(deg / 22.5) % 16
    return directions[index]
  }

  return (
    <div className="max-w-2xl mx-auto w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
      
      {/* City Header */}
      <div className="bg-blue-500 dark:bg-blue-700 p-4 sm:p-6">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
          {name} {sys.country && `, ${sys.country}`}
        </h2>
      </div>
      
      <div className="p-4 sm:p-6 lg:p-8">
        
        {/* Weather Icon and Description */}
        <div className="flex items-center gap-3 sm:gap-4 mb-4">
          <WeatherIcon iconCode={iconCode} description={description} />
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl capitalize">
            {description}
          </p>
        </div>
        
        {/* Current Weather Details */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Temperature</p>
              <p className="text-2xl font-semibold text-gray-800 dark:text-white">
                {formatTemperature(main.temp, unit)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Feels like: {formatTemperature(main.feels_like, unit)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
              <p className="text-2xl font-semibold text-gray-800 dark:text-white">{main.humidity}%</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Wind</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{wind.speed} m/s</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {getWindDirection(wind.deg)} ({wind.deg}°)
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">Visibility</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{visibilityKm} km</p>
            </div>
          </div>
          
          {/* Sunrise/Sunset */}
          <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600 flex justify-between text-sm text-gray-600 dark:text-gray-400">
            <span>Sunrise: {sunrise}</span>
            <span>Sunset: {sunset}</span>
          </div>
        </div>
        
        {/* 5-Day Forecast */}
        {loadingForecast ? (
          <div className="text-center py-4 text-gray-500">Loading forecast...</div>
        ) : (
          <ForecastDisplay forecastData={forecastData} />
        )}
      </div>
    </div>
  )
}

export default WeatherDisplay