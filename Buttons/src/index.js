import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}

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

function Profile () {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt-text={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
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
      <Profile />
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
