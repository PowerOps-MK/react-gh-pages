import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import './index.css'
import { useTrail, animated } from '@react-spring/web'

export default function MyApp () {
  const alignCenter = { display: 'flex', alignItems: 'center' }
  const url = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

  const trails = useTrail(
    2,
    () => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
    }),
    []
  )

  return (
    <div>
      {trails.map(props => (
        <animated.div style={props}>Hello World</animated.div>
      ))}

    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
