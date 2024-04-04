import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import Stopwatch from './Stopwatch'

function App() {

  return (
    <Provider store={store}>
      <div>
        <Stopwatch />
      </div>
    </Provider>
  )
}

export default App
