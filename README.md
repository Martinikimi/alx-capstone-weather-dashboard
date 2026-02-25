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

**Current Phase: Phase 2 Complete - Structure & Scalability**

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

### 🚀 Features

#### Current Features
- 🔍 **City Search** - Search for any city worldwide with input validation
- 🌡️ **Current Temperature** - Real-time temperature in Celsius
- 💧 **Humidity** - Current humidity percentage
- 💨 **Wind Speed** - Current wind speed in m/s
- ☁️ **Weather Icons** - Visual weather representation with smart emoji fallback
- 📱 **Fully Responsive** - Works perfectly on phones, tablets, and desktops
- ⏳ **Loading States** - Spinner shows while fetching data
- ⚠️ **Error Handling** - User-friendly error messages with specific error types
- ✅ **Input Validation** - Prevents empty searches
- 🎣 **Custom Hook** - Clean separation of weather logic using `useWeather`
- 🔘 **Reusable Button** - Button component with multiple style variants (primary, secondary, danger, disabled)
- 💾 **Recent Searches** - Saves last 5 searched cities in localStorage, persists after browser close
- 🔄 **Click to Search** - Click any recent city to search again
- 🎨 **Empty States** - Friendly messages when no searches or no city selected
- 📋 **Smart History Management** - No duplicates, oldest removed when limit reached

#### Coming Soon (Phase 3)
- 🌡️ **Temperature Toggle** - Switch between Celsius and Fahrenheit
- 🌙 **Dark/Light Mode** - Theme switcher
- 📍 **Geolocation** - Get weather for current location
- 📅 **5-Day Forecast** - Extended weather forecast
- 📊 **Weather Charts** - Visual temperature trends
- ✨ **Animations** - Smooth transitions and effects

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **API:** OpenWeatherMap
- **Storage:** Browser localStorage
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
│   │   │   └── RecentSearches.jsx    # Clickable recent city list
│   │   ├── weather/
│   │   │   ├── WeatherDisplay.jsx
│   │   │   └── WeatherIcon.jsx
│   │   └── common/
│   │       ├── Button.jsx             # Reusable button with variants
│   │       ├── LoadingSpinner.jsx     # Loading indicator
│   │       ├── ErrorMessage.jsx       # Reusable error display
│   │       └── EmptyState.jsx         # Empty state UI for first visit
│   ├── hooks/
│   │   └── useWeather.js               # Custom hook for weather logic
│   ├── services/
│   │   ├── weatherService.js           # Centralized API calls
│   │   └── storageService.js           # localStorage operations
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

✅ Storage Service - storageService.js:

getRecentCities() - Load saved cities

saveRecentCity() - Save with duplicate prevention and 5-city limit

clearRecentCities() - Clear all searches (for future use)

✅ RecentSearches Component - RecentSearches.jsx:

Displays list of recent cities as clickable buttons

Shows empty state message when no searches

Click any city to search again instantly

✅ Empty State UI - EmptyState.jsx:

Friendly welcome message for first-time users

Cute weather icon

Suggestions for cities to try

Appears when no city is selected

🔨 What I'm Working On Now (Phase 3)
🌡️ Temperature Toggle - Switch between °C and °F

🌙 Dark Mode - Theme switcher with localStorage persistence

📍 Geolocation - Auto-detect user's location for weather

📅 5-Day Forecast - Extended weather forecast

📊 Weather Charts - Visual temperature trends

⚠️ Challenges Faced
Challenge	Solution
First time using Vite	Followed documentation and tutorials to understand the setup
Understanding project structure	Created component-based architecture for scalability
API key security	Used .env file and .gitignore to protect sensitive keys
Responsive design	Used Tailwind's breakpoints (sm, md, lg) for grid layout
Image loading errors	Added emoji fallback for weather icons
Error handling	Created reusable ErrorMessage component
Separating logic from UI	Created custom useWeather hook
Building reusable components	Created Button component with variant props
API error messages	Centralized error handling with user-friendly messages
localStorage management	Created storageService with duplicate prevention and 5-city limit
Empty states	Added EmptyState component for better UX
📝 What I've Learned
Vite Setup - How to create and configure a React project with Vite

Project Organization - How to structure a scalable React application

Tailwind CSS - Using responsive prefixes and utility classes

API Integration - Connecting React to external APIs with proper error handling

Responsive Design - Building layouts that work on all screen sizes

Component Reusability - Creating components like ErrorMessage, Button, and WeatherIcon

Fallback Strategies - Handling failed image loads with emoji alternatives

Custom Hooks - Separating logic from UI for cleaner code

Centralized API Services - Organizing API calls in one place for maintainability

Error Handling Best Practices - Creating specific, user-friendly error messages

localStorage - Persisting data across browser sessions

Empty States - Improving UX with helpful messages instead of blank screens

🎯 Next Steps
Week 4-5 Goals:
Add temperature toggle (°C/°F)

Create dark/light theme switcher

Add geolocation support

Deploy to Netlify

Write tests for components

Week 6 Goals (Stretch):
Add 5-day forecast

Implement animations

Add weather charts

Make it a PWA