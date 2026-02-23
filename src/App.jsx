import { useState } from "react"
import SearchBar from "./components/search/SearchBar"
import WeatherDisplay from "./components/weather/WeatherDisplay"
import { getWeatherByCity } from "./services/weatherService"
import LoadingSpinner from "./components/common/LoadingSpinner"
import ErrorMessage from "./components/common/ErrorMessage" 

function App() {
  const [weatherData, setWeatherData] = useState(null) // stores API response
  const [error, setError] = useState("")               // stores error message
  const [loading, setLoading] = useState(false)

  // Called when SearchBar submits a city
  const handleSearch = async (city) => {
    try {
      setError("") // clear previous errors
      setLoading(true) // Start loading, show spinner
      console.log("Loading is:", true) 

      const data = await getWeatherByCity(city) // fetch weather
      
      setWeatherData(data) // save data to state
      setLoading(false) // Stop loading, hide spinner
      console.log("Loading is:", false)

    } catch (err) {
      setWeatherData(null)   // clear previous data
      setError("City not found or API error") // show error
      setLoading(false) // Stop loading - hide spinner when error happens
    }
  }
  

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2">Weather Dashboard</h1>
      <p className="mb-4">Search for any city to see current weather</p>

      <SearchBar onSearch={handleSearch} />

      {/* show spinner when loading, otherwise show error or weather */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {/* 👇 USE the ErrorMessage component instead of plain <p> tag */}
          {error && <ErrorMessage message={error} />}
          <WeatherDisplay weatherData={weatherData} />
        </>
      )}
    </div>
  )
}

export default App
