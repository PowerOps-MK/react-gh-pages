import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <body class="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      Hello world 🌎 
    </body>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
