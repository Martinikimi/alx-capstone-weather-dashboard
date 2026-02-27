import { motion } from "framer-motion"
import Button from "../common/Button"
import { slideInFromTop, staggerChildren } from "../../utils/animations" 

function RecentSearches({ searches, onSelectCity }) {
  if (!searches || searches.length === 0) {
    return (
      <motion.div 
        variants={slideInFromTop}
        initial="initial"
        animate="animate"
        className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg text-center"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">📭 Recent Searches</p>
        <p className="text-xs text-gray-400 dark:text-gray-500">
          No recent searches yet. Search for a city above!
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div 
      variants={staggerChildren}
      initial="initial"
      animate="animate"
      className="mt-4"
    >
      <motion.p 
        variants={slideInFromTop}
        className="text-sm text-gray-500 dark:text-gray-400 mb-2"
      >
        📋 Recent Searches:
      </motion.p>
      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <motion.div
            key={index}
            variants={slideInFromTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="secondary"
              onClick={() => onSelectCity(city)}
              className="text-sm dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              {city}
            </Button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default RecentSearches