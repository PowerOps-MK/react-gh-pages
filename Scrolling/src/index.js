import React from 'react'
import ReactDOM from 'react-dom'
//import { Parallax, ParallaxLayer } from '@react-spring/parallax'

export default function MyApp () {
  return (
    <div>
      <h1>hello</>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
