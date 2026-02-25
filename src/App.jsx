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
      setError(err.message) // show error
      setLoading(false) // Stop loading - hide spinner when error happens
    }
  }
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-2">
            Weather Dashboard
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Search for any city to see current weather
          </p>
        </div>

        <div className="max-w-md mx-auto w-full mb-6 sm:mb-8">
          <SearchBar onSearch={handleSearch} />
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          {/* show spinner when loading, otherwise show error or weather */}
          {loading ? (
            <LoadingSpinner />
          ) : (
            <>
              {/*  USE the ErrorMessage component instead of plain <p> tag */}
              {error && <ErrorMessage message={error} />}
              <WeatherDisplay weatherData={weatherData} />
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App