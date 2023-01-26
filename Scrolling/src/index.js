import React from "react";
import ReactDOM from "react-dom";
// import { animated } from '@react-spring/web'

export default function MyApp () {
  return (
    <div>
      <h1> Hello </h1>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
