import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from '@react-spring/web'
import './index.css'

export default function MyApp () {
  const [open, toggle] = useState(false)
  //const [ref, { width }] = useMeasure()
  const props = useSpring({ width: open ? width : 0 })

  return (
    <div className={container}>
      <div ref={ref} className={main} onClick={() => toggle(!open)}>
        <animated.div className={fill} style={props} />
        <animated.div className={content}>{props.width.to(x => x.toFixed(0))}</animated.div>
      </div>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
