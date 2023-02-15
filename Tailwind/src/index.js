import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <body class='min-h-screen bg-gradient-to-b from-indigo-800 to-black'>
      <div class='flex flex-col space-y-6 p-6'>
        <div class='bg-indigo-700 rounded flex items-center space-x-4'>
          <div class='shrink-0'>
            <img class='h-16 w-16' src='https://www.freeiconspng.com/uploads/iphone-message-icon-png-22.png' alt='ChitChat Logo' />
          </div>
          <div>
            <div class='text-xl font-medium text-black'>ChitChat</div>
            <p class='text-slate-500'>You have a new message!</p>
          </div>
        </div>

        <div class='bg-indigo-700 rounded flex items-center space-x-4'>
          <div class='shrink-0'>
            <img class='h-16 w-16' src='https://www.freeiconspng.com/uploads/iphone-message-icon-png-22.png' alt='ChitChat Logo' />
          </div>
          <div>
            <div class='text-xl font-medium text-black'>ChitChat</div>
            <p class='text-slate-500'>You have a new message!</p>
          </div>
        </div>
      </div>
    </body>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
