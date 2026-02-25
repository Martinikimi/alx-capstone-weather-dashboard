// Convert temperature based on unit
export const formatTemperature = (tempCelsius, unit) => {
  if (unit === 'metric') {
    return `${Math.round(tempCelsius)}°C`
  } else {
    const tempFahrenheit = (tempCelsius * 9/5) + 32
    return `${Math.round(tempFahrenheit)}°F`
  }
}

// Get the other unit for display
export const getOtherUnit = (unit) => {
  return unit === 'metric' ? 'imperial' : 'metric'
}

// Get unit symbol
export const getUnitSymbol = (unit) => {
  return unit === 'metric' ? '°C' : '°F'
}