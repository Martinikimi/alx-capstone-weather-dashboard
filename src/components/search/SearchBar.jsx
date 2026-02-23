import { useState } from "react"
import ErrorMessage from "../common/ErrorMessage" 

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("") // state to store what user types
  const [error, setError] = useState("") //  track errors inside search bar

  const handleSubmit = (e) => {
    e.preventDefault() 

    const trimmedCity = city.trim()
    
    
    if (!trimmedCity) {
      setError("Please enter a city name") 
      return
    }
    
    
    setError("") 
    onSearch(trimmedCity) 
    setCity("") 
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}              // controlled input
          onChange={(e) => {
            setCity(e.target.value) // update state on typing
            // Clear error when user starts typing again
            // if (error) setError("")
          }} 
          className={`border p-2 rounded flex-1 ${
            error ? 'border-red-500' : 'border-gray-300' // 👈 red border if error
          }`}
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Search
        </button>
      </form>
      
      {/*  Show error message if there is one - using our new component */}
      {error && <ErrorMessage message={error} />}
    </div>
  )
}

export default SearchBar