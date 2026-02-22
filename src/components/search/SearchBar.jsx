import { useState } from "react"

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("") // state to store what user types

  const handleSubmit = (e) => {
    e.preventDefault() // prevent page refresh
    if (!city) return
    onSearch(city) // call parent function with city name
    setCity("") // clear input
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}              // controlled input
        onChange={(e) => setCity(e.target.value)} // update state on typing
        className="border p-2 rounded"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Search
      </button>
    </form>
  )
}

export default SearchBar
