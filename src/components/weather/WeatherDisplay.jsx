function WeatherDisplay({ weatherData }) {
  if (!weatherData) return null // show nothing if no data

  const { name, main, wind, weather } = weatherData

  return (
    <div className="mt-4 p-4 border rounded shadow">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Temperature: {main.temp} °C</p>
      <p>Humidity: {main.humidity} %</p>
      <p>Wind Speed: {wind.speed} m/s</p>
      <p>Condition: {weather[0].description}</p>
    </div>
  )
}

export default WeatherDisplay
