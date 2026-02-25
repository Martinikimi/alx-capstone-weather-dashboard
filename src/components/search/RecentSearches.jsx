import Button from "../common/Button"

function RecentSearches({ searches, onSelectCity }) {
  if (!searches || searches.length === 0) {
    return (
      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1"> Recent Searches</p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          No recent searches yet. Search for a city above!
        </p>
      </div>
    )
  }

  return (
    <div className="mt-4">
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2"> Recent Searches:</p>
      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <Button
            key={index}
            variant="secondary"
            onClick={() => onSelectCity(city)}
            className="text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
          >
            {city}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default RecentSearches