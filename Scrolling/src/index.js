import React from 'react'
import ReactDOM from 'react-dom'
//import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function MyApp () {
  const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <div>
      <h1>hello</h1>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
