import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import './index.css'


export default function MyApp () {
  const parallax = useRef<IParallax>(null!)
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>

    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
