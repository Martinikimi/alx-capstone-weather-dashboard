import SearchBar from "./components/search/SearchBar"
import WeatherDisplay from "./components/weather/WeatherDisplay"
import LoadingSpinner from "./components/common/LoadingSpinner"
import ErrorMessage from "./components/common/ErrorMessage"
import RecentSearches from "./components/search/RecentSearches"
import EmptyState from "./components/common/EmptyState"
import UnitToggle from "./components/common/UnitToggle"
import ThemeToggle from "./components/common/ThemeToggle"
import { UnitProvider } from "./context/UnitContext"
import { ThemeProvider } from "./context/ThemeContext"
import { useWeather } from "./hooks/useWeather"
import { useGeolocation } from "./hooks/useGeolocation" 







function AppContent() {
  const { weatherData, loading, error, searchCity, recentSearches } = useWeather()
  const { getUserLocation, loading: locLoading, error: locError } = useGeolocation() 

  // Handle successful location fetch
  const handleLocationSuccess = (data) => {
    searchCity(data.name)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
       
        <div className="flex justify-between items-center mb-6 sm:mb-8 lg:mb-10">
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white">
              Weather Dashboard
            </h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              Search for any city to see current weather
            </p>
          </div>
         
          <div className="flex gap-2">
            <UnitToggle />
            <ThemeToggle />
          </div>
        </div>

        <div className="max-w-md mx-auto w-full mb-6 sm:mb-8">
          
          <div className="mb-2 text-right">
            <button
              onClick={() => getUserLocation(handleLocationSuccess)}
              disabled={locLoading}
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 ml-auto"
            >
              <span className="text-lg">⏺</span>
              {locLoading ? "Getting location..." : "Current Location"}
              {locLoading && <LoadingSpinner />}
            </button>
            {/* Show location errors if any */}
            {locError && (
              <ErrorMessage 
                title={locError.title} 
                message={locError.message} 
                className="mt-2 text-sm"
              />
            )}
          </div>

          <SearchBar onSearch={searchCity} />
          <RecentSearches
            searches={recentSearches}
            onSelectCity={searchCity}
          />
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          {loading || locLoading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage title={error.title} message={error.message} />
          ) : weatherData ? (
            <WeatherDisplay weatherData={weatherData} />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <UnitProvider>
        <AppContent />
      </UnitProvider>
    </ThemeProvider>
  )
}

export default App