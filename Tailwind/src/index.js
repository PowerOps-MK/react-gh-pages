import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <body class='min-h-screen bg-gradient-to-b from-indigo-800 to-black'>
      <div class='flex flex-col space-y-4 p-4'>
        <div class='bg-indigo-700 rounded'>1</div>
        <div class='bg-indigo-700 rounded'>2</div>
      </div>
    </body>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
