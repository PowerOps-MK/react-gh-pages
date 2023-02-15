import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

export default function MyApp () {
  return (
    <body class='min-h-screen bg-gradient-to-b from-indigo-800 to-black'>
      <div class='flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-6 p-6'>
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
          <div class="flex justify-end px-4 pt-4">
            <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-400 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
              <span class="sr-only">Open dropdown</span>
              <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </body>
  )
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<MyApp />)
