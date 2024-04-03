import { CHANGERUNNING, RESETCLOCK, SETCLOCK } from "./actionTypes"

export const setClock = (time) => ({
    type: SETCLOCK,
    payload: { elapsed: time },
})

export const changeRunning = (time, on) => ({
    type: CHANGERUNNING,
    payload: { elapsed: time, isRunning: on },
})

export const resetClock = () => ({
    type: RESETCLOCK,
    payload: {
        isRunning: false,
        elapsed: 0
    },
})

