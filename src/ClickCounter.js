import { useState, useEffect } from "react"


export function ClickCounter(props) {


 const [counter, setCounter] = useState(0)

    function handleCounterIncrement()  {
        
        setCounter((c)=> c +1)
   
    }


    useEffect(()=> {
        props.onCounterChange(counter)
    },[counter, props])

        return(


            <div>
                <h1>Count: {counter}</h1>
                <button onClick={handleCounterIncrement}>Increment</button>
               
            </div>
        )
    }
