import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <body class='min-h-screen bg-gradient-to-b from-indigo-800 to-black'>
      <div class='flex flex-col space-y-6 p-6'>
        <div class='bg-indigo-700 rounded'>
          <div class='shrink-0'>
            <img class='h-12 w-12 rounded' src='https://play-lh.googleusercontent.com/ZSqfn8W1VzWp80p9aI4RFBaou0z0O5YN5sHEQHOKzK5spwiitvaj5Jq8HxnqxC6JLQ=w480-h960' alt='ChitChat Logo' />
          </div>
          <div>
            <div class='text-xl font-medium text-black'>ChitChat</div>
            <p class='text-slate-500'>You have a new message!</p>
          </div>
        </div>

        <div class='bg-indigo-700 rounded'>
          <div class='shrink-0'>
            <img class='h-12 w-12 rounded' src='https://play-lh.googleusercontent.com/ZSqfn8W1VzWp80p9aI4RFBaou0z0O5YN5sHEQHOKzK5spwiitvaj5Jq8HxnqxC6JLQ=w480-h960' alt='ChitChat Logo' />
          </div>
        </div>
      </div>
    </body>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
