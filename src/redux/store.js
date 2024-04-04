import stopwatchReducer from "./reducer"
import { configureStore } from "@reduxjs/toolkit"

const store = configureStore({
    reducer: {
        stopwatch: stopwatchReducer
    }
})

export default store

