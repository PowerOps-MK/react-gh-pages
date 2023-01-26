import React from 'react'
import ReactDOM from 'react-dom'
import { animated } from '@react-spring/web'

export default function MyComponent () {
  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        background: '#ff6d6d',
        borderRadius: 8l
      }}
    />
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyComponent />)
