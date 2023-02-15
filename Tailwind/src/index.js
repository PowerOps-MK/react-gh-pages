import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <body class='min-h-screen bg-gradient-to-b from-indigo-800 to-black'>
      <div>
        <div class='p-8 bg-indigo-700 space-y-4'>
        </div>
        <div class='p-8 bg-indigo-700 space-y-4'>
        </div>
      </div>
    </body>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
