import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <body class='min-h-screen dark:bg-gradient-to-b from-indigo-700 to-black'>
      <div class='p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4'>
      </div>
    </body>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
