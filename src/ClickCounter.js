import React from "react";

export class ClickCounter extends React.Component {


    state = {

        initialValue: 0,
    }

    handleCounterIncrement = () => {

        this.setState((state) => {
            return {
            initialValue: state.initialValue + 1
            }   
        })
    }

    render() {

        return(


            <div>
                <h1>Count: {this.state.initialValue}</h1>
                <button onClick={this.handleCounterIncrement}>Increment</button>
               
            </div>
        )
    }
}