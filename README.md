🌤️ ALX Capstone: Weather Dashboard
A responsive weather dashboard built with React that provides real-time weather information and 5-day forecasts for cities worldwide. This is my ALX ProDev Frontend Capstone project.


📋 Table of Contents
Live Demo


Features


Tech Stack


Getting Started


Project Structure


Implementation Highlights


API Integration


5-Day Forecast


Error Handling


State Management


Responsive Design


Author


🌐 Live Demo
Live URL: https://alx-capstone-weather-dashboard.vercel.app/


The application is deployed on Vercel and is fully functional across all devices.


✨ Features
Core Functionality
City Search - Search for any city worldwide with input validation and debounced API calls


Real-time Weather Data - Current temperature, conditions, humidity, wind speed, and more


5-Day Weather Forecast - Extended forecast with daily predictions including:


Daily temperature (high/low)


Weather conditions with icons


Humidity and wind speed


Formatted dates


Temperature Unit Toggle - Switch between Celsius and Fahrenheit with localStorage persistence


Dark/Light Theme - Complete theme switcher with class-based dark mode and localStorage persistence


Geolocation Support - One-click weather for current location with browser permission handling


Recent Searches - Persistent search history (last 5 cities) stored in localStorage, click to re-search


Weather Icons - Dynamic icons from OpenWeatherMap with smart emoji fallback


Technical Features
Custom Hooks - useWeather for data fetching logic, useGeolocation for location detection


Context API - Global state management for units and theme preferences


Centralized Services - Dedicated services for API calls and localStorage operations


Comprehensive Error Handling - Structured error messages for rate limits, network issues, invalid API keys, and more


Responsive Design - Mobile-first approach with Tailwind CSS breakpoints


Empty States - User-friendly messages when no searches or no city selected


🛠️ Tech Stack
Frontend: React 18 + Vite


Styling: Tailwind CSS v3 with darkMode: 'class'


API: OpenWeatherMap Current Weather Data API & 5-Day Forecast API


Storage: Browser localStorage for user preferences and search history


State Management: React Context API (ThemeContext, UnitContext)


Geolocation: Browser Navigator API with custom hook


Deployment: Vercel


🚀 Getting Started
Prerequisites
Node.js (v16 or higher)


npm or yarn


OpenWeatherMap API key


Installation
bash
# Clone the repository
git clone https://github.com/yourusername/alx-capstone-weather-dashboard.git


# Navigate to project directory
cd alx-capstone-weather-dashboard


# Install dependencies
npm install


# Create .env file and add your API key
echo "VITE_WEATHER_API_KEY=your_api_key_here" > .env


# Start development server
npm run dev
The application will be available at http://localhost:5173


📁 Project Structure
text
alx-capstone-weather-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── search/
│   │   │   ├── SearchBar.jsx
│   │   │   └── RecentSearches.jsx
│   │   ├── weather/
│   │   │   ├── WeatherDisplay.jsx
│   │   │   ├── WeatherIcon.jsx
│   │   │   └── ForecastDisplay.jsx      # 5-day forecast component
│   │   └── common/
│   │       ├── Button.jsx
│   │       ├── LoadingSpinner.jsx
│   │       ├── ErrorMessage.jsx
│   │       ├── EmptyState.jsx
│   │       ├── UnitToggle.jsx
│   │       └── ThemeToggle.jsx
│   ├── context/
│   │   ├── UnitContext.jsx
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   ├── useWeather.js
│   │   └── useGeolocation.js
│   ├── services/
│   │   ├── weatherService.js            # Handles both current & forecast API calls
│   │   └── storageService.js
│   ├── utils/
│   │   ├── formatters.js                # Temperature conversion & date formatting
│   │   └── errorMessages.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── vite.config.js
└── README.md
🏗️ Implementation Highlights
Custom Hooks
useWeather Hook


javascript
const {
  weatherData,       // Current weather data
  forecastData,      // 5-day forecast data
  loading,
  error,
  fetchWeather
} = useWeather();


// Fetches both current weather and 5-day forecast in parallel
// Manages loading and error states for both data sets
5-Day Forecast Component
ForecastDisplay.jsx


Displays weather predictions for the next 5 days


Each day shows:


Day of week (Mon, Tue, etc.)


Weather icon


High/Low temperature


Weather description


Humidity percentage


Responsive grid layout (scrollable on mobile, grid on desktop)


Temperature unit conversion (Celsius/Fahrenheit)


Dark mode compatible styling


Centralized Services
weatherService.js


javascript
// Fetches current weather
export const fetchCurrentWeather = async (city, unit = 'metric') => {...}


// Fetches 5-day forecast (3-hour intervals aggregated to daily)
export const fetchWeatherForecast = async (city, unit = 'metric') => {...}


// Fetches weather by coordinates (for geolocation)
export const fetchWeatherByCoords = async (lat, lon, unit = 'metric') => {...}


// Fetches forecast by coordinates
export const fetchForecastByCoords = async (lat, lon, unit = 'metric') => {...}
🔌 API Integration
The application integrates with two OpenWeatherMap APIs:


1. Current Weather Data API
javascript
// Endpoint
https://api.openweathermap.org/data/2.5/weather?q={city}&appid={API_KEY}&units=metric


// Response includes current weather conditions
2. 5-Day Forecast API
javascript
// Endpoint
https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={API_KEY}&units=metric


// Response includes 3-hour intervals for 5 days
// Aggregated to daily forecasts with min/max temperatures
Forecast Data Processing
The 3-hour interval data is processed to create daily forecasts:


javascript
// Group forecast items by day
const dailyForecasts = list.reduce((acc, item) => {
  const date = new Date(item.dt * 1000).toLocaleDateString();
 
  if (!acc[date]) {
    acc[date] = {
      date,
      temps: [],
      icons: [],
      descriptions: [],
      humidity: [],
      windSpeed: []
    };
  }
 
  acc[date].temps.push(item.main.temp);
  acc[date].icons.push(item.weather[0].icon);
  acc[date].descriptions.push(item.weather[0].description);
  acc[date].humidity.push(item.main.humidity);
  acc[date].windSpeed.push(item.wind.speed);
 
  return acc;
}, {});


// Calculate daily min/max and averages
📅 5-Day Forecast Implementation
Features
Daily Aggregation - 3-hour intervals grouped into meaningful daily forecasts


Min/Max Temperature - Shows temperature range for each day


Weather Icons - Representative icons for each day's conditions


Humidity Data - Average humidity percentage per day


Wind Speed - Average wind speed per day


Component Structure
jsx
<ForecastDisplay forecast={forecastData} unit={unit} />


// Renders:
// ┌─────────────────────────────────┐
// │       5-Day Forecast            │
// ├─────────────────────────────────┤
// │ Mon  ☀️ 24°/18°  • 45% humidity │
// │ Tue  ☁️ 22°/16°  • 62% humidity │
// │ Wed  🌧 19°/14°  • 85% humidity │
// │ Thu  ⛅ 21°/15°  • 55% humidity │
// │ Fri  ☀️ 26°/20°  • 40% humidity │
// └─────────────────────────────────┘
Responsive Design
Mobile: Horizontal scrollable cards


Tablet: 2-column grid


Desktop: 5-column grid or single row


⚠️ Error Handling
The application implements comprehensive error handling for various scenarios:


Status Code Error Type  User Message
401 Invalid API Key Invalid API key. Please check your configuration.
404 City Not Found  City not found. Please check the spelling and try again.
429 Rate Limit Exceeded Too many requests. Please wait a moment and try again.
500+  Server Error  Weather service is currently unavailable. Please try again later.
- Network Offline Unable to connect. Please check your internet connection.
- Geolocation Denied  Location access denied. Please enable permissions to use this feature.
- Geolocation Unavailable Unable to detect your location. Please try again or search manually.
All errors are presented with user-friendly messages and appropriate icons for better UX.


🎨 State Management


React Context API
ThemeContext - Manages application theme (dark/light)


UnitContext - Manages temperature units (Celsius/Fahrenheit)


localStorage Persistence
Theme Preference - Remembers user's dark/light choice


Unit Preference - Remembers Celsius/Fahrenheit preference


Recent Searches - Stores last 5 searched cities


📱 Responsive Design
The application is fully responsive across all device sizes using Tailwind CSS breakpoints:


Mobile (< 640px): Stacked layout with horizontal scroll for forecast


Tablet (640px - 1024px): Two-column grid for weather data, 2-column forecast


Desktop (> 1024px): Full layout with 5-column forecast grid


Dark Mode Implementation
javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ... other configurations
}
All components include dark mode variants:


jsx
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  {/* Content adapts to theme */}
</div>
🧪 Key Technical Decisions
Vite over Create React App - Faster development and build times


Tailwind CSS v3 - Utility-first styling with dark mode support


Custom Hooks - Clean separation of logic from UI components


Context API - Simple global state management without Redux complexity


Centralized Services - Maintainable API and storage logic


Class-based Dark Mode - Full user control over theme preference


Structured Error Objects - Consistent error handling across the application


Forecast Data Aggregation - Converting 3-hour intervals to meaningful daily forecasts


👤 Author


ALX ProDev Frontend Program Participant


GitHub: @yourusername


Project Repository: alx-capstone-weather-dashboard


Live Demo: alx-capstone-weather-dashboard.vercel.app


This project was completed as part of the ALX ProDev Frontend Program, demonstrating proficiency in React, API integration, state management, and responsive design.
