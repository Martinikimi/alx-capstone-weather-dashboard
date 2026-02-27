import { motion } from "framer-motion" 
import { useTheme } from "../../context/ThemeContext"
import Button from "./Button"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  
  return (
    <motion.div
      whileHover={{ rotate: 180 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="secondary"
        onClick={toggleTheme}
        className="text-xl px-3 py-1"
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        <motion.span
          key={theme}
          initial={{ scale: 0.5, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.3 }}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </motion.span>
      </Button>
    </motion.div>
  )
}

export default ThemeToggle