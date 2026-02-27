import { useUnit } from "../../context/UnitContext"
import { formatTemperature } from "../../utils/formatters"

function ForecastDisplay({ forecastData }) {
  const { unit } = useUnit()
  
  if (!forecastData || !forecastData.list) return null

  // Group forecast by day (API returns 3-hour intervals)
  const dailyForecast = []
  const seenDates = new Set()

  forecastData.list.forEach(item => {
    const date = new Date(item.dt * 1000).toLocaleDateString()
    
    // Only take first entry for each day
    if (!seenDates.has(date) && dailyForecast.length < 5) {
      seenDates.add(date)
      
      // Find min and max temp for this day
      const dayItems = forecastData.list.filter(i => 
        new Date(i.dt * 1000).toLocaleDateString() === date
      )
      
      const minTemp = Math.min(...dayItems.map(i => i.main.temp))
      const maxTemp = Math.max(...dayItems.map(i => i.main.temp))
      
      // Get weather icon for midday
      const middayItem = dayItems.find(i => {
        const hour = new Date(i.dt * 1000).getHours()
        return hour >= 11 && hour <= 13
      }) || dayItems[0]
      
      dailyForecast.push({
        date,
        dayName: new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' }),
        minTemp,
        maxTemp,
        icon: middayItem.weather[0].icon,
        description: middayItem.weather[0].description
      })
    }
  })

  // Map icon codes to emoji
  const getEmoji = (icon) => {
    if (icon.includes('01')) return '☀️'
    if (icon.includes('02')) return '⛅'
    if (icon.includes('03') || icon.includes('04')) return '☁️'
    if (icon.includes('09') || icon.includes('10')) return '🌧️'
    if (icon.includes('11')) return '⛈️'
    if (icon.includes('13')) return '❄️'
    if (icon.includes('50')) return '🌫️'
    return '☀️'
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
        📅 5-Day Forecast
      </h3>
      
      <div className="space-y-2">
        {dailyForecast.map((day, index) => (
          <div 
            key={index}
            className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            {/* Day name */}
            <span className="w-16 font-medium text-gray-700 dark:text-gray-300">
              {day.dayName}
            </span>
            
            {/* Weather icon */}
            <span className="text-2xl w-10 text-center">
              {getEmoji(day.icon)}
            </span>
            
            {/* Min/Max temps */}
            <div className="flex gap-3">
              <span className="text-blue-500 font-medium">
                {formatTemperature(day.minTemp, unit)}
              </span>
              <span className="text-gray-400">/</span>
              <span className="text-orange-500 font-medium">
                {formatTemperature(day.maxTemp, unit)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForecastDisplay