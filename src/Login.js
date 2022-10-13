import React from "react";


export class Login extends React.Component {

    state = {

        username: '',
        password: '',
        remember: false,
        disabled: true

    }



    handleLogin = (event) => {

        let disabledButton = event.target.disabled

        this.setState({

            disabled: disabledButton
        })



    }




    handleResetButton = () => {

        this.setState({
            username: '',
            password: '',
            remember: false
        })
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
            <button disabled={!this.state.username || !this.state.password} onClick={this.handleLogin}>BUTTON</button>
            <button onClick={this.handleResetButton}>Reset</button>
            </>
        )
    }
}