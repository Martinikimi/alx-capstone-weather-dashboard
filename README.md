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

**Current Phase: Phase 3 In Progress - Features That Impress**

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

### ✅ Completed (Phase 2)
- [x] **Centralized API Logic** - Clean, organized weatherService with base config and consistent error handling
- [x] **Custom Hook** - Created `useWeather` hook to separate logic from UI
- [x] **Reusable Button Component** - Button with variants (primary, secondary, danger, disabled)
- [x] **Recent Searches with localStorage** - Saves last 5 cities, persists after browser close, click to search again
- [x] **Storage Service** - Dedicated service for localStorage operations
- [x] **RecentSearches Component** - Displays clickable city buttons
- [x] **Empty State UI** - Friendly messages when no searches or no city selected

### ✅ Completed (Phase 3 - So Far)
- [x] **Temperature Unit Toggle** - Switch between Celsius and Fahrenheit
- [x] **UnitContext** - Global state management for temperature units
- [x] **UnitToggle Component** - Reusable toggle buttons in header
- [x] **Temperature Formatting** - Utility functions for unit conversion
- [x] **localStorage Persistence** - Saves user preference across sessions

### 🚀 Features

#### Current Features
- 🔍 **City Search** - Search for any city worldwide with input validation
- 🌡️ **Temperature Toggle** - Switch between Celsius and Fahrenheit with localStorage persistence
- 💧 **Humidity** - Current humidity percentage
- 💨 **Wind Speed** - Current wind speed in m/s
- ☁️ **Weather Icons** - Visual weather representation with smart emoji fallback
- 📱 **Fully Responsive** - Works perfectly on phones, tablets, and desktops
- ⏳ **Loading States** - Spinner shows while fetching data
- ⚠️ **Error Handling** - User-friendly error messages with specific error types
- ✅ **Input Validation** - Prevents empty searches
- 🎣 **Custom Hook** - Clean separation of weather logic using `useWeather`
- 🔘 **Reusable Button** - Button component with multiple style variants
- 💾 **Recent Searches** - Saves last 5 searched cities in localStorage, persists after browser close
- 🔄 **Click to Search** - Click any recent city to search again
- 🎨 **Empty States** - Friendly messages when no searches or no city selected
- 📋 **Smart History Management** - No duplicates, oldest removed when limit reached
- 🌡️ **Unit Context** - Global temperature unit management with toggle

#### Coming Soon (Phase 3)
- 🌙 **Dark/Light Mode** - Theme switcher with localStorage
- 📍 **Geolocation** - Get weather for current location
- 📅 **5-Day Forecast** - Extended weather forecast
- 📊 **Weather Charts** - Visual temperature trends
- ✨ **Animations** - Smooth transitions and effects

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **API:** OpenWeatherMap
- **Storage:** Browser localStorage
- **State Management:** React Context API
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
│   │   │   ├── SearchBar.jsx
│   │   │   └── RecentSearches.jsx
│   │   ├── weather/
│   │   │   ├── WeatherDisplay.jsx
│   │   │   └── WeatherIcon.jsx
│   │   └── common/
│   │       ├── Button.jsx
│   │       ├── LoadingSpinner.jsx
│   │       ├── ErrorMessage.jsx
│   │       ├── EmptyState.jsx
│   │       └── UnitToggle.jsx          # Temperature unit toggle
│   ├── context/
│   │   └── UnitContext.jsx              # Unit state management
│   ├── hooks/
│   │   └── useWeather.js
│   ├── services/
│   │   ├── weatherService.js
│   │   └── storageService.js
│   ├── utils/
│   │   └── formatters.js                # Temperature conversion utilities
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
├── README.md
└── vite.config.js
🏗️ What I've Built
Phase 1 Features:
✅ SearchBar - Input validation and error handling

✅ WeatherDisplay - Responsive grid layout for weather data

✅ WeatherIcon - Dynamic icons with emoji fallback

✅ LoadingSpinner - Visual feedback during API calls

✅ ErrorMessage - Reusable error component

✅ Responsive Design - Works on all devices

✅ API Integration - Real-time weather data

Phase 2 Features:
✅ Centralized API Service - Organized API calls with error handling

✅ Custom Hook - useWeather for clean logic separation

✅ Reusable Button - Variants for different use cases

✅ Storage Service - localStorage management

✅ Recent Searches - Persistent search history

✅ Empty State UI - Friendly first-time experience

Phase 3 Features (New):
✅ Temperature Unit Toggle - Switch between °C and °F

Context API for global state

Persistent user preference in localStorage

Real-time temperature conversion

Clean toggle UI in header

Utility functions for formatting

🔨 What I'm Working On Now (Phase 3 - Remaining)
🌙 Dark/Light Mode - Theme switcher with localStorage

📍 Geolocation - Auto-detect user's location

📅 5-Day Forecast - Extended weather forecast

📊 Weather Charts - Visual temperature trends

⚠️ Advanced Error Handling - Rate limits, offline detection

🎯 Next Steps
Week 4-5 Goals:
Create dark/light theme switcher

Add geolocation support

Implement advanced error handling

Deploy to Netlify

Write tests for components

Week 6 Goals (Stretch):
Add 5-day forecast

Implement animations

Add weather charts

Make it a PWA