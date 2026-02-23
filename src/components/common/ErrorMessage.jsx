function ErrorMessage({ message }) {
  if (!message) return null // don't show anything if no message
  
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 flex items-center gap-2">
      <span className="text-lg">❌</span>
      <span>{message}</span>
    </div>
  )
}

export default ErrorMessage