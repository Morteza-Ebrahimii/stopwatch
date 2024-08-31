make stopWatch in react.

1. make stopWathch file in src file.
    .extract isRunning(false) and elapsedTime(0) from useState.
    .extract intervalIdRef(null) and startTimeRef(0) from useRef.

2. make useEffect and set isRunning for inacial value.

3. make functoin start
                 stop
                 reset 
                 formatTime.

4. return div.stopWatch 
          div.display(set format time for here)
    .return div.controls
            .you need 3 button(start, stop and reset) 
            .write some css code

5. handle start fucntion
    .isRunning true.
    .handle startTimeRef.current to Date.now() - elapsedTime.
    get log for startTimeRef.current 
    (search for all thing i cunfiuse for me.)

6. handle stop function
    .isRunning false

7. handle reset function
    .elapsedTime to 0 .
    .isRunning false.

8. inside useEffect
    if isRunning do this(
        setInterval with 10ms delay(
            elapsedTime to Date.now() - startTimeRef.current 
        )
    definde setInterval to intervalIdRef.current
    )

    .make cleanUp return for useEffect.(clear the intervalIdRef.current)

9. handle function formatTime
    .let hours = Math.floor(elapsedTime/ (1000 * 60 * 60))
    .let minutes = Math.floor(elapsedTime/ (1000 * 60 )% 60)
    .let seconds = Math.floor(elapsedTime/ (1000) % 60)
    .let milliSeconds = Math.floor((elapsedTime % 1000) / 10)

    .return minutes, seconds and milliSeconds.
    reasign these(
        hours = String(hours).padStart(2, "0")
        minutes = String(minutes).padStart(2, "0")
        seconds = String(seconds).padStart(2, "0")
        milliSeconds = String(milliSeconds).padStart    (2, "0")
    )