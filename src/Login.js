import React from "react";


export class Login extends React.Component {

    state = {

        username: '',
        password: '',
        remember: false

    }

    handleLoginInputs = (event) => {

        let name = event.target.name
        let value = event.target.value
        let type = event.target.type
        let checked = event.target.checked


        this.setState({

            [name]: type === 'checkbox' ? checked : value
            
        })

    }



    render() {

        return(

            <>
            <input name="username" value={this.state.username} onChange={this.handleLoginInputs}/>
            <input name="password" type="password" value={this.state.password} onChange={this.handleLoginInputs}/>
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleLoginInputs}/>
            </>
        )
    }
}