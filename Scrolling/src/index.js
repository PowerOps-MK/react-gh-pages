import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './index.css'

export default function MyApp () {
  const alignCenter = { display: 'flex', alignItems: 'center' }

  return (
    <div>
      <div className='background' />
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p className="scroll-text">Scroll down</p>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
