import { createContext, useContext, useState, useEffect } from "react"

// Create the context
const UnitContext = createContext()

// Custom hook to use the unit context
export function useUnit() {
  const context = useContext(UnitContext)
  if (!context) {
    throw new Error("useUnit must be used within a UnitProvider")
  }
  return context
}

// Provider component that wraps the app
export function UnitProvider({ children }) {
  // Check localStorage for saved preference, default to 'metric' (Celsius)
  const [unit, setUnit] = useState(() => {
    const saved = localStorage.getItem('tempUnit')
    return saved || 'metric' // 'metric' = Celsius, 'imperial' = Fahrenheit
  })

  // Save to localStorage whenever unit changes
  useEffect(() => {
    localStorage.setItem('tempUnit', unit)
  }, [unit])

  // Toggle between metric and imperial
  const toggleUnit = () => {
    setUnit(prev => prev === 'metric' ? 'imperial' : 'metric')
  }

  return (
    <UnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  )
}