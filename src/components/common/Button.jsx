function Button({ 
  children,      
  onClick,       
  type = "button", 
  variant = "primary", 
  disabled = false,    
  className = ""       
}) {
  
  // Different styles based on variant
  const baseClasses = "px-4 py-2 rounded font-medium transition-colors duration-200"
  
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600",
    disabled: "bg-gray-300 text-gray-500 cursor-not-allowed"
  }
  
  // Choose style based on variant or disabled state
  const variantClasses = disabled 
    ? variants.disabled 
    : variants[variant] || variants.primary
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  )
}

export default Button