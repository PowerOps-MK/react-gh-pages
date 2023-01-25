import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

function MyButton () {
  return (
    <button>I'm a button</button>
  )
}

function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br />How do you do?</p>
    </>
  )
}

export default function MyApp () {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <img className="avatar" />
      <MyButton />
      <AboutPage />
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
