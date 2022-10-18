import { useState } from "react"



export function Login () {

    const [data, setData] = useState({

        username: '',
        password: '',
        remember: false,
        disabled: true
    })




    const handleLogin = () => {

        setData((data)=>{
            return {
                ...data,
                username: "",
                password: "",
                remember: false
            }
        })

    }




    const handleResetButton = () => {

        setData((data) =>{
            return {
                ...data,
                username: '',
                password: '',
                remember: false

            }
           
        })
    }



    const handleLoginInputs = (event) => {

       const {name, value, type, checked} = event.target


        setData({

            [name]: type === 'checkbox' ? checked : value
            
        })

    }


    const MyStyle = {
        color: 'white',
        backgroundColor: data.password.length >= 8 ? 'red' : 'green'
    }




        return(

            <>
            <input name="username" value={data.username} onChange={handleLoginInputs}/>
            <input name="password" type="password" value={data.password} onChange={handleLoginInputs}/>
            <input name="remember" type="checkbox" checked={data.remember} onChange={handleLoginInputs}/>
            <button style={MyStyle} disabled={!data.username || !data.password} onClick={handleLogin}>BUTTON</button>
            <button onClick={handleResetButton}>Reset</button>
            </>
        )
    }

