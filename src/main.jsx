import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import { createStore } from 'redux'
import stopwatchReducer from './redux/reducer.js'
import { configureStore } from '@reduxjs/toolkit'

// const store = createStore(stopwatchReducer)
const store = configureStore({
  reducer: {
    stopwatch: stopwatchReducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
