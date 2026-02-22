import { useState } from "react"
import SearchBar from "./components/search/SearchBar"

function App() {
  const [searchedCity, setSearchedCity] = useState("")

  // This function receives the city name from SearchBar
  const handleSearch = (city) => {
    setSearchedCity(city) // store it in state
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-2">Hello Martin 👋</h1>
      <p className="mb-4">This is my weather dashboard</p>

      {/* SearchBar component */}
      <SearchBar onSearch={handleSearch} />

      {/* Show what the user typed */}
      {searchedCity && (
        <p className="mt-4 text-lg">
          You searched for: <strong>{searchedCity}</strong>
        </p>
      )}
    </div>
  )
}

export default App
