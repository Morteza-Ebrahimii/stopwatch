import react, { useEffect, useRef, useState } from 'react'

function StopWatch() {

    const [isRunning, setIsRunning] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(() => {

    }, [isRunning])

    const start = () => {

    }
    const stop = () => {

    }
    const reset = () => {

    }
    const formatTime = () => {

    }

    return (
    <>
        <div className="formatTime">
            <div className="display">
                00:00:00
            </div>
        </div>
        <div className="controls">
            <button onClick={stop}>Stop</button>
            <button onClick={start}>Start</button>
            <button onClick={reset}>Reset</button>
        </div>
    </>
    )
}

export default StopWatch