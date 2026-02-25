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
    <div className="max-w-2xl mx-auto w-full bg-white rounded-lg shadow-lg overflow-hidden">
      
      <div className="bg-blue-500 p-4 sm:p-6">
        <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold">
          {name}
        </h2>
      </div>
      
      <div className="p-4 sm:p-6 lg:p-8">
        
        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
          <WeatherIcon iconCode={iconCode} description={description} />
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl capitalize">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          
          <div className="bg-blue-50 p-3 sm:p-4 rounded-lg text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
              Temperature
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">

              {/*  Use formatter instead of hardcoded °C */}
              {formatTemperature(main.temp, unit)}
            </p>
          </div>
          
          <div className="bg-green-50 p-3 sm:p-4 rounded-lg text-center sm:text-left">
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
              Humidity
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
              {main.humidity} %
            </p>
          </div>
          
          <div className="bg-purple-50 p-3 sm:p-4 rounded-lg text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">
              Wind Speed
            </p>
            <p className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
              {wind.speed} m/s
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherDisplay