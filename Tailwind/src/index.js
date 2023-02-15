import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {  
  return (
    <div>
      <div className='background' />
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
