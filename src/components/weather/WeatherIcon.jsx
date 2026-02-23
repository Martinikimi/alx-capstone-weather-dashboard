import { useState } from "react"

function WeatherIcon({ iconCode, description }) {
  const [imageError, setImageError] = useState(false)
  
  // fallback emojis
  const fallbackEmoji = {
    "Clear": "☀️",
    "Clouds": "☁️", 
    "Rain": "🌧️",
    "Snow": "❄️",
    "Thunderstorm": "⛈️",
    "Drizzle": "🌦️",
    "Mist": "🌫️",
    "Smoke": "💨",
    "Haze": "🌫️",
    "Dust": "💨",
    "Fog": "🌫️",
    "Sand": "💨",
    "Ash": "🌋",
    "Squall": "💨",
    "Tornado": "🌪️",
    "default": "🌤️"
  }

  // If image failed to load OR no icon code, show matching emoji
  if (imageError || !iconCode) {
    let weatherType = "default"
    
    if (description) {
      // Check if description contains any of keys
      for (const key of Object.keys(fallbackEmoji)) {
        if (description.toLowerCase().includes(key.toLowerCase())) {
          weatherType = key
          break
        }
      }
    }

    const emoji = fallbackEmoji[weatherType] || fallbackEmoji.default
    
    return (
      <span 
        className="text-4xl" 
        role="img" 
        aria-label={description || "weather icon"}
      >
        {emoji}
      </span>
    )
  }
  
  // if no error then Ssow the real OpenWeatherMap icon
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  
  return (
    <img 
      src={iconUrl} 
      alt={description}
      onError={() => setImageError(true)} // if image fails, trigger fallback
      className="w-12 h-12"
    />
  )
}

export default WeatherIcon