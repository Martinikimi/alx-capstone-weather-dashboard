import WeatherIcon from "./WeatherIcon"
import { useUnit } from "../../context/UnitContext"
import { formatTemperature } from "../../utils/formatters"

function WeatherDisplay({ weatherData }) {
  const { unit } = useUnit()
  if (!weatherData) return null

  const { name, main, wind, weather, sys, visibility, clouds } = weatherData
  const weatherInfo = weather[0]
  const iconCode = weatherInfo.icon
  const description = weatherInfo.description

  // Format sunrise/sunst from Unix timestamps
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
        <div className="flex items-center gap-3 sm:gap-4 mb-6">
          <WeatherIcon iconCode={iconCode} description={description} />
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl capitalize">
            {description}
          </p>
        </div>
        
        {/* Weather Details Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          
          {/* Temperature Card */}
          <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">🌡️ Temperature</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">
              {formatTemperature(main.temp, unit)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Feels like: {formatTemperature(main.feels_like, unit)}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Min: {formatTemperature(main.temp_min, unit)} | Max: {formatTemperature(main.temp_max, unit)}
            </p>
          </div>
          
          {/* Humidity Card */}
          <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">💧 Humidity</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">{main.humidity}%</p>
          </div>
          
          {/* Wind Card */}
          <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">💨 Wind</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">{wind.speed} m/s</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Direction: {getWindDirection(wind.deg)} ({wind.deg}°)
            </p>
          </div>
          
          {/* Pressure Card */}
          <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">📊 Pressure</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">{main.pressure} hPa</p>
          </div>
          
          {/* Visibility Card */}
          <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">👁️ Visibility</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">{visibilityKm} km</p>
          </div>
          
          {/* Clouds Card */}
          <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">☁️ Clouds</p>
            <p className="text-xl font-semibold text-gray-800 dark:text-white">{clouds.all}% coverage</p>
          </div>
          
          {/* Sunrise/Sunset Card */}
          <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded-lg sm:col-span-2">
            <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">🌅 Sun Schedule</p>
            <div className="flex justify-between">
              <p className="text-gray-800 dark:text-white">
                <span className="font-semibold">Sunrise:</span> {sunrise}
              </p>
              <p className="text-gray-800 dark:text-white">
                <span className="font-semibold">Sunset:</span> {sunset}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDisplay