import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <body class='min-h-screen dark:bg-gradient-to-b from-indigo-700 to-black'>
      Hello world 🌎
    </body>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
