import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from '@react-spring/web'
import './index.css'

export default function MyComponent () {
  const springs = useSpring({
    from: { x: 0 },
    to: { x: 100 }
  })

  return (
    <animated.div />
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyComponent />)
