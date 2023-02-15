import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <body class='min-h-screen bg-gradient-to-b from-indigo-800 to-black'>
      <div class='flex lg:flex-row space-y-8 space-x-6 p-6'>
        <div class='bg-indigo-700 shadow-xl rounded flex items-center space-x-4 lg:w-1/2'>
          <div class='py-4 pl-4'>
            <img class='h-16 w-16' src='https://www.freeiconspng.com/uploads/iphone-message-icon-png-22.png' alt='ChitChat Logo' />
          </div>
          <div>
            <div class='text-xl font-medium text-black'>Chat</div>
            <p class='text-slate-500'>You have a new message!</p>
          </div>
        </div>

        <div class='bg-indigo-700 shadow-xl rounded flex items-center space-x-4 lg:w-1/2'>
          <div class='py-4 pl-4'>
            <img class='h-16 w-16' src='https://www.freeiconspng.com/uploads/iphone-message-icon-png-22.png' alt='ChitChat Logo' />
          </div>
          <div>
            <div class='text-xl font-medium text-black'>Chat</div>
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
