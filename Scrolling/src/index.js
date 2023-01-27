import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax'
import './index.css'

const url = (name: string, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function MyApp () {
  const parallax = useRef<IParallax>(null!),
  return (
    <div style={{ width: '100%', height: '100%', background: '#253237' }}>

    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
