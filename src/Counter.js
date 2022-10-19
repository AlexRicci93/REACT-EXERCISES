import React from "react";
import { CounterDisplay } from "./CounterDisplay";
import { useEffect, useState } from "react";

export function Counter() {
 
const [counter, setCounter] = useState(0)

  useEffect(() => {
    const clear = setInterval(()=> {
      setCounter(counter + 1)
    }, 1000)
    return () => clearInterval(clear)         
  }, [counter])

  

    return (
            <>
            <CounterDisplay count={counter}/>
            </>
    )
  
}
