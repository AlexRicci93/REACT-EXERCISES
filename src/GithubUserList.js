import { useEffect, useState } from "react"
import { GithubUser } from "./GithubUser"




export function GithubUserList() {

    const [input, setInput] = useState('')
    const [array, setArray] = useState([])



    function handleInputChange(event) {
        const value = event.target.value
        setInput(value)
    }


    function handleButton() {

        setArray([...array, input])
    }

    useEffect(()=>{

    },[array])

    return (
        <>
        <input value={input} onChange={handleInputChange}></input>
        <button onClick={handleButton}>Find Person</button>

        <div>
            {array.map((user, index) => (
                <GithubUser  username={user} key={index}/>
            ))}
        </div>

        </>
    )
}