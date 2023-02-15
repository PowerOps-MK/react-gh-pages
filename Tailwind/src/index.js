import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <div className='bg-gray-200'>
      <div className='mx-auto'>
        Hello World
      </div>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
