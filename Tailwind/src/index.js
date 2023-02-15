import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {  
  return (
    <div class="w-full md:w-3/4 lg:w-1/2">
      Hello
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
