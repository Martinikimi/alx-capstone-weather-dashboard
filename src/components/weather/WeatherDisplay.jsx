import WeatherIcon from "./WeatherIcon"
import { useUnit } from "../../context/UnitContext"
import { formatTemperature } from "../../utils/formatters"

function WeatherDisplay({ weatherData }) {
  const { unit } = useUnit()
  if (!weatherData) return null

  const { name, main, wind, weather } = weatherData
  const weatherInfo = weather[0]
  const iconCode = weatherInfo.icon
  const description = weatherInfo.description

  return (
    <div className="max-w-2xl mx-auto w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-colors duration-300">
      
  
      <div className="bg-blue-500 dark:bg-blue-700 p-4 sm:p-6">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
          {name}
        </h2>
      </div>
      
      <div className="p-4 sm:p-6 lg:p-8">
        
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <WeatherIcon iconCode={iconCode} description={description} />
          <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl capitalize">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          
          {/*  Dark mode for temperature card */}
          <div className="bg-blue-50 dark:bg-blue-900/30 p-3 sm:p-4 rounded-lg text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Temperature
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white">
              {formatTemperature(main.temp, unit)}
            </p>
          </div>
          
          {/*  Dark mode for humidity card */}
          <div className="bg-green-50 dark:bg-green-900/30 p-3 sm:p-4 rounded-lg text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Humidity
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white">
              {main.humidity} %
            </p>
          </div>
          
          {/* Dark mode for wind card */}
          <div className="bg-purple-50 dark:bg-purple-900/30 p-3 sm:p-4 rounded-lg text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              Wind Speed
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800 dark:text-white">
              {wind.speed} m/s
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDisplay