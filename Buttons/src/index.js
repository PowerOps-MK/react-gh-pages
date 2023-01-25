import React from 'react'
import { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90
}

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 }
]

function MyButton ({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
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
        className='avatar'
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  )
}

function ShoppingList () {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  )

  return (
    <>
      <h1>Shoppinglist</h1>
      <ul>{listItems}</ul>
    </>
  )
}

export default function MyApp () {
  const [count, setCount] = useState(0)

  function handleClick () {
    setCount(count + 1)
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
      <AboutPage />
      <Profile />
      <ShoppingList />
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
