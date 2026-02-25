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

### ✅ Completed (Phase 3)
- [x] **Temperature Unit Toggle** - Switch between Celsius and Fahrenheit
  - UnitContext for global state management
  - UnitToggle component in header
  - localStorage persistence
  - Utility functions for conversion
- [x] **Dark/Light Theme Switcher** - Complete dark mode implementation
  - ThemeContext with class-based dark mode
  - ThemeToggle button (🌙/☀️)
  - localStorage persistence
  - Tailwind v3 configuration with `darkMode: 'class'`
  - Dark mode styles for all components
  - Fixed Tailwind v4 compatibility issues

### 🚀 Features

#### Current Features
- 🔍 **City Search** - Search for any city worldwide with input validation
- 🌡️ **Temperature Toggle** - Switch between Celsius and Fahrenheit with localStorage persistence
- 🌙 **Dark/Light Mode** - Complete theme switcher with localStorage persistence
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
- 🎭 **Context API** - Global state management for units and theme

#### Coming Soon (Phase 3)
- 📍 **Geolocation** - Get weather for current location
- 📅 **5-Day Forecast** - Extended weather forecast
- 📊 **Weather Charts** - Visual temperature trends
- ✨ **Animations** - Smooth transitions and effects
- ⚠️ **Advanced Error Handling** - Rate limits, offline detection, invalid API key

## 🛠️ Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS v3
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
│   │       ├── UnitToggle.jsx
│   │       └── ThemeToggle.jsx           # Dark mode toggle
│   ├── context/
│   │   ├── UnitContext.jsx
│   │   └── ThemeContext.jsx               # Dark mode state management
│   ├── hooks/
│   │   └── useWeather.js
│   ├── services/
│   │   ├── weatherService.js
│   │   └── storageService.js
│   ├── utils/
│   │   └── formatters.js
│   ├── App.jsx
│   └── main.jsx
├── .env
├── .gitignore
├── tailwind.config.js                      # Tailwind v3 with darkMode: 'class'
├── postcss.config.js
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

Phase 3 Features (Completed):
✅ Temperature Unit Toggle

Context API for global state

Persistent user preference in localStorage

Real-time temperature conversion

Clean toggle UI in header

✅ Dark/Light Theme Switcher

ThemeContext with class-based dark mode

Manual theme toggle (not system-dependent)

localStorage persistence

Tailwind v3 with darkMode: 'class' configuration

Dark mode styles for all components

Fixed Tailwind v4 compatibility issues

Smooth transitions between themes

🔨 What I'm Working On Now (Phase 3 - Remaining)
📍 Geolocation - Auto-detect user's location

📅 5-Day Forecast - Extended weather forecast

📊 Weather Charts - Visual temperature trends

⚠️ Advanced Error Handling - Rate limits, offline detection, invalid API key

✨ Animations - Smooth transitions and effects

⚠️ Challenges Faced
Challenge	Solution
First time using Vite	Followed documentation and tutorials
Project structure	Created scalable component architecture
API key security	Used .env with .gitignore
Responsive design	Tailwind breakpoints (sm, md, lg)
Image loading errors	Emoji fallback strategy
Error handling	Reusable ErrorMessage component
Logic/UI separation	Custom useWeather hook
Reusable components	Button with variant props
localStorage management	Dedicated storage service
Empty states	EmptyState component
Unit conversion	Context API + utility functions
User preferences	localStorage persistence
Tailwind v4 compatibility	Downgraded to stable Tailwind v3
Dark mode configuration	Set darkMode: 'class' in config
Theme persistence	ThemeContext with localStorage
📝 What I've Learned
Vite Setup - Modern React tooling

Project Organization - Scalable architecture

Tailwind CSS - Responsive utility classes, dark mode configuration

API Integration - Error handling best practices

Responsive Design - Mobile-first approach

Component Reusability - DRY principles

Fallback Strategies - Graceful degradation

Custom Hooks - Logic separation

Centralized Services - Maintainable code

localStorage - Cross-session persistence

Empty States - UX improvement

Context API - Global state management

Utility Functions - Clean, testable code

Dark Mode Implementation - Class-based theming with Tailwind

Theme Switching - Manual control vs system preferences

PostCSS Configuration - Proper plugin setup

Version Management - Handling breaking changes in dependencies

🎯 Next Steps
Week 4-5 Goals:
Add geolocation support

Implement advanced error handling

Deploy to Netlify

Write tests for components

Week 6 Goals (Stretch):
Add 5-day forecast

Implement animations

Add weather charts

Make it a PWA