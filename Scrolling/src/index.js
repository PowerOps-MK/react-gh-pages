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
          <p className='scroll-text'>Scroll down</p>
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 1, end: 2 }} style={{ ...alignCenter, justifyContent: 'flex-start' }}>
          <div className='card sticky'>
            <p>I'm a sticky layer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='card parallax green'>
            <p>I'm not</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={1.5} style={{ ...alignCenter, justifyContent: 'flex-end' }}>
          <div className='card parallax blue'>
            <p>Neither am I</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
