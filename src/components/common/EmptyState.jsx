function EmptyState() {
  return (
    <div className="mt-4 p-8 bg-white rounded-lg shadow-lg text-center">
      <div className="text-6xl mb-4">⛅</div>
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        No City Selected
      </h3>
      <p className="text-gray-500">
        Search for a city above to see current weather conditions!
      </p>
      <div className="mt-4 text-sm text-gray-400">
        Try: London, Tokyo, Paris, or New York
      </div>
    </div>
  )
}

export default EmptyState