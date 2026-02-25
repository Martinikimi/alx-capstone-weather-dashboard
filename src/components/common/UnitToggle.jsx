import { useUnit } from "../../context/UnitContext"
import Button from "./Button"

function UnitToggle() {
  const { unit, toggleUnit } = useUnit()
  
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg shadow-sm p-1">
      <Button
        variant={unit === 'metric' ? 'primary' : 'secondary'}
        onClick={toggleUnit}
        className="text-sm px-3 py-1"
      >
        °C
      </Button>
      <Button
        variant={unit === 'imperial' ? 'primary' : 'secondary'}
        onClick={toggleUnit}
        className="text-sm px-3 py-1"
      >
        °F
      </Button>
    </div>
  )
}

export default UnitToggle