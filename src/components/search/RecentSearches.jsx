import Button from "../common/Button"

function RecentSearches({ searches, onSelectCity }) {
  // Don't show anything if no searches
  if (!searches || searches.length === 0) {
    return null
  }

  return (
    <div className="mt-4">
      <p className="text-sm text-gray-500 mb-2"> Recent Searches:</p>
      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <Button
            key={index}
            variant="secondary"
            onClick={() => onSelectCity(city)}
            className="text-sm"
          >
            {city}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default RecentSearches