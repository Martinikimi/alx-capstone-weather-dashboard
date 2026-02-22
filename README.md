🌤️ ALX Capstone: Weather Dashboard

A responsive weather dashboard built with React that provides real-time weather information for cities worldwide. This is my ALX ProDev Frontend Capstone project.

📋 Table of Contents

Project Status

Features Planned

Tech Stack

Getting Started

Project Structure

What I've Built So Far

What I'm Working On

Challenges Faced

Next Steps

Author

🚦 Project Status

Current Phase: Week 2 - Features Implementation (Feb 16-22, 2026)

✅ Completed:

 React project created with Vite

 Folder structure organized

 GitHub repository initialized

 README documentation started

 SearchBar component implemented

 WeatherDisplay component implemented

 Connected OpenWeatherMap API to fetch real-time weather data

🔄 In Progress:

 Basic error handling for invalid city input

 Loading state while fetching data

 UX enhancements like recent searches and temperature toggle

✨ Features Planned
Core Features (Must Have)

🔍 City search functionality

🌡️ Current temperature display (Celsius/Fahrenheit)

💧 Humidity percentage

💨 Wind speed

☁️ Weather condition icons

📱 Responsive design

UX Enhancements (Will Add)

🔄 Recent searches (localStorage)

⏳ Loading states

⚠️ Error messages

🌙 Dark/light mode (stretch goal)

🛠️ Tech Stack

Frontend: React (Vite)

Styling: Tailwind CSS

API: OpenWeatherMap

Storage: Browser localStorage

Deployment: Netlify (planned)

🚀 Getting Started
Prerequisites

Node.js (v16+)

npm

Installation
# Clone the repository
git clone https://github.com/yourusername/alx-capstone-weather-dashboard.git

# Navigate to project
cd alx-capstone-weather-dashboard

# Install dependencies
npm install

# Start development server
npm run dev


The app will open at http://localhost:5173

📁 Project Structure
alx-capstone-weather-dashboard/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── assets/
│       ├── images/
│       └── icons/
├── src/
│   ├── components/
│   │   ├── layout/             # Header, Footer, Container
│   │   ├── search/             # SearchBar, RecentSearches
│   │   ├── weather/            # WeatherDisplay, WeatherCard, WeatherIcon, etc.
│   │   └── common/             # LoadingSpinner, ErrorMessage, Button
│   ├── hooks/                  # Custom hooks (useWeather, useLocalStorage, useDebounce)
│   ├── services/               # API calls (weatherService, storageService)
│   ├── utils/                  # Helper functions (formatters, validators, constants)
│   ├── App.jsx                 # Main component
│   └── main.jsx                # Entry point
├── .env                        # Environment variables (API key)
├── .gitignore
├── package.json
├── README.md
└── vite.config.js

🏗️ What I've Built So Far

✅ React project with Vite initialized

✅ Tailwind CSS configured

✅ GitHub repo created and initial code pushed

✅ SearchBar component built

✅ WeatherDisplay component built

✅ Connected to OpenWeatherMap API for real-time weather data

🔨 What I'm Working On Now

Handling errors for invalid city searches

Adding loading spinner while fetching data

Preparing for recent searches storage

Planning temperature toggle (Celsius/Fahrenheit)

⚠️ Challenges Faced
Challenge	How I'm Handling It
First time using Vite	Following documentation and tutorials
Understanding project structure	Created component-based structure to scale features
API key setup	Using .env file and .gitignore
Getting started with coding	Started small with SearchBar component
📝 What I've Learned

How to create a React project using Vite

How to organize a professional, scalable React project

Why we use .gitignore to protect sensitive files

How to manage dependencies using npm

How to connect a React app to an external API

🎯 Next Steps (Week 2-3)

 Improve error handling (invalid city, network issues)

 Add loading spinner while fetching weather data

 Implement recent searches with localStorage

 Add temperature toggle (Celsius/Fahrenheit)

 Style the dashboard with Tailwind CSS for responsiveness

 Push working code to GitHub and test deployment

