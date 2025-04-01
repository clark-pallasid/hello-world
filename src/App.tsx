import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Hello World
        </h1>
        
        <p className="text-gray-600 text-center mb-6">
          A simple application built with React, TypeScript, and Tailwind CSS
        </p>

        <div className="flex flex-col items-center">
          <div className="text-center mb-4">
            <button
              onClick={() => setCount(count => count + 1)}
              className="px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors"
            >
              Count: {count}
            </button>
          </div>
          
          <p className="text-sm text-gray-500">
            Click the button to increase the counter
          </p>
        </div>
      </div>

      <footer className="mt-8 text-sm text-gray-500">
        Created with Vite + React + TypeScript + Tailwind
      </footer>
    </div>
  )
}

export default App
