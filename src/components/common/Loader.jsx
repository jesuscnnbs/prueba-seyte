import { Infinity as InfinityLoader } from 'ldrs/react'
import 'ldrs/react/Infinity.css'

// Default values shown
function Loader() {
  return (
    <InfinityLoader
      size={80}
      thickness={4}
      speed={1}
      color="#646cff"
    />
  )
}

export default Loader;