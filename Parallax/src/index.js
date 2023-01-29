import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './index.css'
import { useSpring, animated } from '@react-spring/web'

export default function MyApp () {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  const props = useSpring({
    from: { opacity: 1 },
    to: { opacity: 0 }
  })
  
  return (
    <div>
      <div className='background' />
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={3}
          style={{
            backgroundImage: url('stars', true),
            backgroundSize: 'cover'
          }}
        />

        <ParallaxLayer offset={0} speed={0.5} style={{ ...alignCenter, justifyContent: 'center' }}>
          <p>Scroll down</p>
          <animated.div style={props}>Hello World</animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} alt='satellite' style={{ width: '15%', marginLeft: '70%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
