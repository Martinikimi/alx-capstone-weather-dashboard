import { useTheme } from "../../context/ThemeContext"
import Button from "./Button"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <Button
      variant="secondary"
      onClick={toggleTheme}
      className="text-xl px-3 py-1"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </Button>
  )
}

export default ThemeToggle