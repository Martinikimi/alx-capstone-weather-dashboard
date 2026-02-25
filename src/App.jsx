import SearchBar from "./components/search/SearchBar"
import WeatherDisplay from "./components/weather/WeatherDisplay"
import LoadingSpinner from "./components/common/LoadingSpinner"
import ErrorMessage from "./components/common/ErrorMessage"
import RecentSearches from "./components/search/RecentSearches"
import EmptyState from "./components/common/EmptyState"
import UnitToggle from "./components/common/UnitToggle" 
import { UnitProvider } from "./context/UnitContext" 
import { useWeather } from "./hooks/useWeather" 

function AppContent() {
  const { weatherData, loading, error, searchCity, recentSearches } = useWeather()
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        <div className="flex justify-between items-center mb-6 sm:mb-8 lg:mb-10">
          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
              Weather Dashboard
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Search for any city to see current weather
            </p>
          </div>
          
          {/* Unit toggle in the header */}
          <UnitToggle />
        </div>

        <div className="max-w-md mx-auto w-full mb-6 sm:mb-8">
          <SearchBar onSearch={searchCity} />
          <RecentSearches 
            searches={recentSearches} 
            onSelectCity={searchCity} 
          />
        </div>

        <div className="mt-4 sm:mt-6 lg:mt-8">
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <ErrorMessage message={error} />
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
    <UnitProvider> 
      <AppContent />
    </UnitProvider>
  )
}

export default App