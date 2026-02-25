import { useState } from "react"
import ErrorMessage from "../common/ErrorMessage" 
import Button from "../common/Button" 

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("") // state to store what user types
  const [error, setError] = useState("") // track errors inside search bar

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
          value={city}
          onChange={(e) => {
            setCity(e.target.value)
          }} 
          className={`border p-2 rounded flex-1 ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
        />
        
        {/*  new Button component */}
        <Button type="submit" variant="primary">
          Search
        </Button>
      </form>
      
      {error && <ErrorMessage message={error} />}
    </div>
  )
}

export default SearchBar