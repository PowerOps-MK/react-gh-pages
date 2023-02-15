import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <body class='min-h-screen bg-gradient-to-b from-indigo-800 to-black'>
      <div class='p-8 rounded-xl bg-indigo-700 shadow-lg flex items-center'>
      </div>
    </body>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
