
export const getWeatherByCity = async (city) => {
  const apiKey = import.meta.env.VITE_WEATHER_API_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error("City not found")
    }
    const data = await res.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
