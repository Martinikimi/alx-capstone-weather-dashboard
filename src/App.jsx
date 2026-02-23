import { useState } from "react"
import SearchBar from "./components/search/SearchBar"
import WeatherDisplay from "./components/weather/WeatherDisplay"
import { getWeatherByCity } from "./services/weatherService"
import LoadingSpinner from "./components/common/LoadingSpinner"

function App() {
  const [weatherData, setWeatherData] = useState(null) // stores API response
  const [error, setError] = useState("")               // stores error message
  const [loading, setLoading] = useState(false)

  // Called when SearchBar submits a city
  const handleSearch = async (city) => {
    try {
      setError("") // clear previous errors
      setLoading(true) //  Start loading, show spinner
      console.log("Loading is:", true) 


      const data = await getWeatherByCity(city) // fetch weather
      setLoading(false) //  Stop loading, hide spinner
      console.log("Loading is:", false)



      setWeatherData(data) // save data to state
    } catch (err) {
      setWeatherData(null)   // clear previous data
      setError("City not found or API error") // show error
      setLoading(false) //  Stop loading - hide spinner in a scenario we get an error
    }
  }
  

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2">Hello </h1>
      <p className="mb-4">This is my weather dashboard</p>

      <SearchBar onSearch={handleSearch} />

      {/* show spinner when loading, otherwise show error or weather */}
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          <WeatherDisplay weatherData={weatherData} />
        </>
      )}
    </div>
  )
}

export default App

