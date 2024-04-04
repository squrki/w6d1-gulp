import React, { useEffect } from "react";
import { useDispatch, useSelector, connect } from 'react-redux';
import { changeRunning, resetClock, setClock } from "./redux/actions";
import "./Stopwatch.css";

const Stopwatch = (state) => {
    let time = useSelector(state => state.stopwatch.elapsed)
    const isRunning = useSelector(state => state.stopwatch.isRunning)
    const dispatch = useDispatch()

    let intervalId;
    useEffect(() => {
        if (isRunning) {
            intervalId = setInterval(() => dispatch(setClock(++time)), 10)
        }
        return () => clearInterval(intervalId);
    }, [isRunning]);

    useEffect(() => {
        return () => clearInterval(intervalId);
    }, []);

    const toggleRunning = () => {
        dispatch(changeRunning(time, isRunning))
    };

    const reset = () => {
        dispatch(resetClock())
    };

    const formatTimeUnit = (unit) => {
        return unit.toString().padStart(2, "0");
    };

    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000);
    const seconds = Math.floor((time % 6000) / 100);
    const milliseconds = time % 100;

    return (
        <div className="stopwatch-container">
            <p className="stopwatch-time">
                {formatTimeUnit(hours)}:{formatTimeUnit(minutes)}:
                {formatTimeUnit(seconds)}:{formatTimeUnit(milliseconds)}
            </p>
            <div className="stopwatch-buttons">
                <button className="stopwatch-button" onClick={toggleRunning}>
                    {isRunning ? "Stop" : "Start"}
                </button>
                <button className="stopwatch-button" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        elapsed: state.elapsed,
        isRunning: state.isRunning,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setClock: () => dispatch(setClock()),
        changeRunning: () => dispatch(changeRunning()),
        resetClock: () => dispatch(resetClock()),
        getElapsed: () => dispatch(getElapsed()),
        getIsRunning: () => dispatch(getIsRunning()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Stopwatch)

