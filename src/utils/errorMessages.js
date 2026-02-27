// Human-readable error messages for different situations
export const ERROR_MESSAGES = {
  // Rate limit errors (status 429)
  RATE_LIMIT: {
    title: "⚠️ Too Many Requests",
    message: "You've reached the API limit. Please wait a minute and try again."
  },
  
  // Network errors (offline, DNS failure, etc.)
  NETWORK: {
    title: "📶 Network Error",
    message: "No internet connection. Please check your network and try again."
  },
  
  // Invalid API key (status 401)
  INVALID_KEY: {
    title: "🔑 API Key Error",
    message: "Invalid API key. Please check your configuration."
  },
  
  // Server errors (status 500, 502, 503)
  SERVER: {
    title: "🌍 Server Error",
    message: "Weather service is temporarily unavailable. Please try again later."
  },
  
  // City not found (status 404)
  NOT_FOUND: {
    title: "🔍 City Not Found",
    message: "We couldn't find that city. Please check the spelling or try another city."
  },
  
  // unknown errors
  UNKNOWN: {
    title: "❌ Something Went Wrong",
    message: "An unexpected error occurred. Please try again."
  }
}

// Function to get appropriate error based on status code or error type
export function getErrorMessage(error) {
  // If it's a network error (offline, DNS failure)
  if (error.message === 'Failed to fetch' || error.code === 'ERR_NETWORK') {
    return ERROR_MESSAGES.NETWORK
  }
  
  // If it's a rate limit error
  if (error.status === 429) {
    return ERROR_MESSAGES.RATE_LIMIT
  }
  
  // If it's an invalid API key
  if (error.status === 401) {
    return ERROR_MESSAGES.INVALID_KEY
  }
  
  // If it's a server error
  if (error.status >= 500) {
    return ERROR_MESSAGES.SERVER
  }
  
  // If it's city not found
  if (error.message?.includes('City not found') || error.status === 404) {
    return ERROR_MESSAGES.NOT_FOUND
  }
  
  // Default fallback
  return ERROR_MESSAGES.UNKNOWN
}