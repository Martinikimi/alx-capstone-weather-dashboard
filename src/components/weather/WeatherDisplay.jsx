import { useState, useEffect } from "react"
import { motion } from "framer-motion" 
import WeatherIcon from "./WeatherIcon"
import ForecastDisplay from "./ForecastDisplay"
import { useUnit } from "../../context/UnitContext"
import { formatTemperature } from "../../utils/formatters"
import { getForecastByCity } from "../../services/weatherService"
import { fadeInUp, fadeIn } from "../../utils/animations" 

function WeatherDisplay({ weatherData }) {
  const { unit } = useUnit()
  const [forecastData, setForecastData] = useState(null)
  const [loadingForecast, setLoadingForecast] = useState(false)
  
  if (!weatherData) return null

  const { name, main, wind, weather, sys, visibility, clouds } = weatherData
  const weatherInfo = weather[0]
  const iconCode = weatherInfo.icon
  const description = weatherInfo.description

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

  const sunrise = new Date(sys.sunrise * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const sunset = new Date(sys.sunset * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  const visibilityKm = (visibility / 1000).toFixed(1)

  const getWindDirection = (deg) => {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW']
    const index = Math.round(deg / 22.5) % 16
    return directions[index]
  }

  return (
    <motion.div 
      variants={fadeInUp}
      initial="initial"
      animate="animate"
      className="max-w-2xl mx-auto w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300"
    >
      
      {/* City Header */}
      <motion.div 
        variants={fadeIn}
        className="bg-blue-500 dark:bg-blue-700 p-4 sm:p-6"
      >
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
          {name} {sys.country && `, ${sys.country}`}
        </h2>
      </motion.div>
      
      <div className="p-4 sm:p-6 lg:p-8">
        
        {/* Weather Icon and Description */}
        <motion.div 
          variants={fadeInUp}
          className="flex items-center gap-3 sm:gap-4 mb-4"
        >
          <WeatherIcon iconCode={iconCode} description={description} />
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl capitalize">
            {description}
          </p>
        </motion.div>
        
        {/* Current Weather Details */}
        <motion.div 
          variants={fadeInUp}
          className="mb-6 p-4 bg-gray-50 dark:bg-gray-700/30 rounded-lg"
        >
          <div className="grid grid-cols-2 gap-4">
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-gray-500 dark:text-gray-400">Temperature</p>
              <p className="text-2xl font-semibold text-gray-800 dark:text-white">
                {formatTemperature(main.temp, unit)}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Feels like: {formatTemperature(main.feels_like, unit)}
              </p>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-gray-500 dark:text-gray-400">Humidity</p>
              <p className="text-2xl font-semibold text-gray-800 dark:text-white">{main.humidity}%</p>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-gray-500 dark:text-gray-400">Wind</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{wind.speed} m/s</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {getWindDirection(wind.deg)} ({wind.deg}°)
              </p>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <p className="text-sm text-gray-500 dark:text-gray-400">Visibility</p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">{visibilityKm} km</p>
            </motion.div>
          </div>
          
          {/* Sunrise/Sunset */}
          <motion.div 
            variants={fadeIn}
            className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600 flex justify-between text-sm text-gray-600 dark:text-gray-400"
          >
            <span>Sunrise: {sunrise}</span>
            <span>Sunset: {sunset}</span>
          </motion.div>
        </motion.div>
        
        {/* 5-Day Forecast */}
        {loadingForecast ? (
          <div className="text-center py-4 text-gray-500">Loading forecast...</div>
        ) : (
          <ForecastDisplay forecastData={forecastData} />
        )}
      </div>
    </motion.div>
  )
}

export default WeatherDisplay