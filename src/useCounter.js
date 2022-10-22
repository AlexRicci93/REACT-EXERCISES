import { useState, useCallback } from "react"

function useCounter() {

const [counter, setCounter] = useState(0)

const IncrementBy = useCallback (function IncrementBy() {
   setCounter((c)=> c + 1 )
}, [])

 const DecrementBy = useCallback (function DecrementBY() {

   setCounter((c)=> c - 1)
         
}, [])


const handleReset = useCallback(function handleReset() {
   setCounter(0)
}, [])

return {

    counter, IncrementBy, DecrementBy, handleReset
}

}

export function CustomCounter() {

    const {counter, IncrementBy, DecrementBy, handleReset} = useCounter()

    return (
        <>
        <h2>Count: {counter}</h2>
        <button onClick={IncrementBy}>Increment</button>
        <button onClick={DecrementBy}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )

}