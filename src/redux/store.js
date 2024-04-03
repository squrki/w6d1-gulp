import stopwatchReducer from "./reducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore(stopwatchReducer)

export default store

