function WeatherIcon({ iconCode, description }) {
  // Build the URL to OpenWeatherMap's icon
  // iconCode looks like "01d" or "10n"
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  
  return (
    <img 
      src={iconUrl} 
      alt={description} 
      className="w-12 h-12" // 👈 Tailwind classes for size
    />
  )
}

export default WeatherIcon