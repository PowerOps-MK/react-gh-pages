import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <div class='bg-cyan-700'>
      <div class='p-6 max-w-sm mx-auto rounded-xl shadow-lg flex items-center space-x-4'>
        <div class='shrink-0'>
          <img class='h-12 w-12' src='https://play-lh.googleusercontent.com/ZSqfn8W1VzWp80p9aI4RFBaou0z0O5YN5sHEQHOKzK5spwiitvaj5Jq8HxnqxC6JLQ=w480-h960' alt='ChitChat Logo' />
        </div>
        <div>
          <div class='text-xl font-medium text-black'>ChitChat</div>
          <p class='text-slate-500'>You have a new message!</p>
        </div>
      </div>
    </div>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
