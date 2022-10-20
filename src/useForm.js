
import { useState } from 'react'



 function useForm() {

    const [data, setData] = useState({

        username: '',
        password: '',
    })

   function handleInput(event) {
    const name = event.target.name
    const value = event.target.value
    setData(() => {
        return {
            [name]: value
        }
    })

   }



    return{

        input: data.input,
        password: data.password,
        handleInput
    }

}

export function FormHook() {


    const {input, password, handleInput} = useForm()

return(

    <>
    <input name="username" value={input} onChange={handleInput}/>
    <input name="password" value={password} type="password"onChange={handleInput}/>
    </>
)

}