import { CHANGERUNNING, RESETCLOCK, SETCLOCK } from "./actionTypes"

const initialState = {
    elapsed: 0,
    isRunning: false,
}

const stopwatchReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGERUNNING:
            return {
                elapsed: action.payload.elapsed,
                isRunning: !state.isRunning
            }
        case RESETCLOCK:
            return {
                elapsed: 0,
                isRunning: false
            }
        case SETCLOCK:
            return {
                elapsed: action.payload.elapsed,
                isRunning: state.isRunning
            }
        default:
            return state
    }
}

export default stopwatchReducer
