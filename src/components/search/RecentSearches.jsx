import Button from "../common/Button"

function RecentSearches({ searches, onSelectCity }) {
  // Show empty state message if no searches
  if (!searches || searches.length === 0) {
    return (
      <div className="mt-4 p-4 bg-gray-50 rounded-lg text-center">
        <p className="text-sm text-gray-500 mb-1">📭 Recent Searches</p>
        <p className="text-xs text-gray-400">
          No recent searches yet. Search for a city above!
        </p>
      </div>
    )
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