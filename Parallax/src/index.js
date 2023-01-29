import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from '@react-spring/web'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './index.css'

export default function MyApp () {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`
  const props = useSpring({
    from: { opacity: 0, color: '#f8f8ff', fontSize: '1.5em' },
    to: { opacity: 1, color: '#000', fontSize: '3em' },
    config: { duration: 2500 },
    delay: 500
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
          <animated.div style={props}>Scroll down</animated.div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={url('satellite4')} alt='satellite' style={{ width: '15%', marginLeft: '70%' }} />
          <img src={url('satellite4')} alt='satellite' style={{ width: '5%', marginLeft: '30%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
          <img src={url('cloud')} alt='cloud' style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
