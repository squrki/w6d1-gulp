import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import stopwatchReducer from './redux/reducer.js'
import { configureStore } from '@reduxjs/toolkit'

const store = createStore(stopwatchReducer)
// const store = configureStore(stopwatchReducer())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
