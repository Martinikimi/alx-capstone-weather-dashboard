function ErrorMessage({ title, message, className = "" }) {
  
  if (!message) return null

  return (
    <div className={`bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mt-4 flex items-start gap-3 ${className}`}>
      <span className="text-lg">{title ? title.split(' ')[0] : '❌'}</span>
      <div>
        {title && <p className="font-semibold">{title}</p>}
        <p>{message}</p>
      </div>
    </div>
  )
}

export default ErrorMessage