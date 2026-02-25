# 🌤️ ALX Capstone: Weather Dashboard

A responsive weather dashboard built with React that provides real-time weather information for cities worldwide. This is my ALX ProDev Frontend Capstone project.

## 📋 Table of Contents
- [Project Status](#-project-status)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [What I've Built](#️-what-ive-built)
- [What I'm Working On](#-what-im-working-on)
- [Challenges Faced](#-challenges-faced)
- [What I've Learned](#-what-ive-learned)
- [Next Steps](#-next-steps)
- [Author](#-author)

## 🚦 Project Status

**Current Phase: Phase 2 In Progress - Structure & Scalability**

### ✅ Completed (Phase 1)
- [x] React project created with Vite
- [x] Folder structure organized
- [x] GitHub repository initialized
- [x] README documentation started
- [x] SearchBar component with input validation
- [x] WeatherDisplay component with responsive grid layout
- [x] Connected OpenWeatherMap API to fetch real-time weather data
- [x] Weather icons from OpenWeatherMap with smart emoji fallback
- [x] Loading spinner for better UX during API calls
- [x] Reusable ErrorMessage component
- [x] Responsive design (works on mobile, tablet, and desktop)
- [x] Gradient background and polished card design

### ✅ Completed (Phase 2 - So Far)
- [x] **Centralized API Logic** - Clean, organized weatherService with base config and consistent error handling
- [x] **Custom Hook** - Created `useWeather` hook to separate logic from UI
- [x] **Reusable Button Component** - Button with variants (primary, secondary, danger, disabled)

### 🚀 Features

#### Current Features
- 🔍 **City Search** - Search for any city worldwide
- 🌡️ **Current Temperature** - Real-time temperature in Celsius
- 💧 **Humidity** - Current humidity percentage
- 💨 **Wind Speed** - Current wind speed in m/s
- ☁️ **Weather Icons** - Visual weather representation with smart fallback emojis
- 📱 **Fully Responsive** - Works perfectly on phones, tablets, and desktops
- ⏳ **Loading States** - Spinner shows while fetching data
- ⚠️ **Error Handling** - User-friendly error messages with specific error types
- ✅ **Input Validation** - Prevents empty searches
- 🎣 **Custom Hook** - Clean separation of weather logic using `useWeather`
- 🔘 **Reusable Button** - Button component with multiple style variants

#### Coming Soon (Phase 2)
- 🔄 **Recent Searches** - Save last 5 searched cities in localStorage
- 🌡️ **Temperature Toggle** - Switch between Celsius and Fahrenheit
- 🌙 **Dark/Light Mode** - Theme switcher
- 📍 **Geolocation** - Get weather for current location

#### Future Enhancements (Phase 3)
- 📅 **5-Day Forecast** - Extended weather forecast
- 📊 **Weather Charts** - Visual temperature trends
- ✨ **Animations** - Smooth transitions and effects

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **API:** OpenWeatherMap
- **Storage:** Browser localStorage (planned)
- **Deployment:** Netlify (planned)

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/alx-capstone-weather-dashboard.git

# Navigate to project
cd alx-capstone-weather-dashboard

# Install dependencies
npm install

# Create .env file and add your API key
echo "VITE_WEATHER_API_KEY=your_api_key_here" > .env

# Start development server
npm run dev
The app will open at http://localhost:5173

📁 Project Structure
text
alx-capstone-weather-dashboard/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── search/
│   │   │   └── SearchBar.jsx
│   │   ├── weather/
│   │   │   ├── WeatherDisplay.jsx
│   │   │   └── WeatherIcon.jsx
│   │   └── common/
│   │       ├── Button.jsx           # Reusable button with variants
│   │       ├── LoadingSpinner.jsx   # Loading indicator
│   │       └── ErrorMessage.jsx     # Reusable error display
│   ├── hooks/
│   │   └── useWeather.js            # Custom hook for weather logic
│   ├── services/
│   │   └── weatherService.js        # Centralized API calls
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
🏗️ What I've Built
Phase 1 Features:
✅ SearchBar - Fully functional with input validation and error handling

✅ WeatherDisplay - Shows temperature, humidity, wind speed with responsive grid layout

✅ WeatherIcon - Dynamic icons from OpenWeatherMap with smart emoji fallback

✅ LoadingSpinner - Visual feedback during API calls

✅ ErrorMessage - Reusable error component for consistent messaging

✅ Responsive Design - Adapts to mobile, tablet, and desktop screens

✅ API Integration - Real-time weather data from OpenWeatherMap

✅ Gradient Background - Professional blue gradient theme

Phase 2 Features (Completed):
✅ Centralized API Service - weatherService.js now has:

Base configuration object

Consistent error handling with user-friendly messages

Prepared for future endpoints (geolocation, forecast)

Specific error types (404, 401, 429, network errors)

✅ Custom Hook - useWeather.js:

Separates all weather logic from UI

Manages weatherData, loading, and error states

Provides searchCity function

Makes App.jsx clean and focused on UI only

✅ Reusable Button Component - Button.jsx:

Variants: primary (blue), secondary (gray), danger (red), disabled

Consistent styling across the app

Easy to use: <Button variant="primary">Search</Button>

Supports onClick, type, and disabled props

🔨 What I'm Working On Now (Phase 2 - Remaining)
🔄 Recent Searches - Storing last 5 cities in localStorage

🌡️ Temperature Toggle - Switch between °C and °F

🌙 Dark Mode - Theme switcher with localStorage persistence

📍 Geolocation - Auto-detect user's location for weather

🎯 Next Steps
Week 3-4 Goals:
Implement recent searches with localStorage

Add temperature toggle (°C/°F)

Create dark/light theme switcher

Add geolocation support

Deploy to Netlify

Write tests for components

Week 5 Goals (Stretch):
Add 5-day forecast

Implement animations

Add weather charts

Make it a PWA