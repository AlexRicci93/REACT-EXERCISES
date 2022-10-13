
import React from "react";

export class UncontrolledLogin extends React.Component {


    handleForm = (event) => {

        event.preventDefault() 

        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked
    }




    render() {

        return (

            <form onSubmit={this.handleForm}>
                <input name="username" required autoFocus/>
                <input name="password" type="password" required/>
                <input name="remember" type="checkbox"/>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>

            </form>
        )
    }



}