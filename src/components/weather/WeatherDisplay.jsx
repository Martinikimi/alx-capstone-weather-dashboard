import WeatherIcon from "./WeatherIcon"

function WeatherDisplay({ weatherData }) {
  if (!weatherData) return null // show nothing if no data

  const { name, main, wind, weather } = weatherData
  const weatherInfo = weather[0]
  const iconCode = weatherInfo.icon
  const description = weatherInfo.description
  
  return (
    <div className="mt-4 p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{name}</h2>
      
      {/* 👇 NEW: Show weather icon + condition together */}
      <div className="flex items-center gap-3 my-2">
        <WeatherIcon iconCode={iconCode} description={description} />
        <p className="text-gray-600 capitalize">{description}</p>
      </div>
      
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  )
}

export default WeatherDisplay

  