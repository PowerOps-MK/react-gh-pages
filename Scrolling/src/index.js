import React from 'react'
import ReactDOM from 'react-dom'
//import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './index.css'

export default function MyApp () {
  //const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <div>
      <div className="background" />
        <h1>hello</h1>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
