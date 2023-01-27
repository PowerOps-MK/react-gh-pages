import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from '@react-spring/web'
import './index.css'

export default function MyComponent () {
  const [springs, api] = useSpring(() => ({
    from: { x: 0 },
  }))
  
  const handleClick = () => {
    api.start({
      from: {
        x: 0,
      },
      to: {
        x: 100,
      },
    })
  }

  return (
    <animated.div
      onClick={handleClick}
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8,
        ...springs
      }}
    />
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyComponent />)
