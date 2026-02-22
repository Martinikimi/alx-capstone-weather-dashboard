import { useState } from "react"
import SearchBar from "./components/search/SearchBar"
import WeatherDisplay from "./components/weather/WeatherDisplay"
import { getWeatherByCity } from "./services/weatherService"

function App() {
  const [weatherData, setWeatherData] = useState(null) // stores API response
  const [error, setError] = useState("")               // stores error message

  // Called when SearchBar submits a city
  const handleSearch = async (city) => {
    try {
      setError("") // clear previous errors
      const data = await getWeatherByCity(city) // fetch weather
      setWeatherData(data) // save data to state
    } catch (err) {
      setWeatherData(null)   // clear previous data
      setError("City not found or API error") // show error
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-2">Hello </h1>
      <p className="mb-4">This is my weather dashboard</p>

      {/* SearchBar */}
      <SearchBar onSearch={handleSearch} />

      {/* Error message */}
      {error && <p className="text-red-500 mt-4">{error}</p>}

      {/* Weather display */}
      <WeatherDisplay weatherData={weatherData} />
    </div>
  )
}

export default App

