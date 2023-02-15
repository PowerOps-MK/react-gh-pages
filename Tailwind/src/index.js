import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {  
  return (
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
