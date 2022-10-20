import { useState } from "react"

function useCounter() {

const [counter, setCounter] = useState(0)

function IncrementBy() {
   setCounter((c)=> c + 1 )
}

function DecrementBY() {

   setCounter((c)=> c - 1)
       
   
}


function handleReset()  {
   setCounter(0)
}

return {

    counter, IncrementBy, DecrementBY, handleReset
}

}

export function CustomCounter() {

    const {counter, IncrementBy, DecrementBY, handleReset} = useCounter()

    return (
        <>
        <h2>Count: {counter}</h2>
        <button onClick={IncrementBy}>Increment</button>
        <button onClick={DecrementBY}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        </>
    )

}