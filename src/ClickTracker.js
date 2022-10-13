import React from "react";

export class ClickTracker extends React.Component {


    state =  {

        name: '',

    }


    handleTrackerButton = (event) => {
 
        this.setState(() => {
            return {
            name: event.target.name
        }
        })
        

    }



    render() {

        return (

            <div>
                <h1>{this.state.name}</h1>
                <button name="ciao" onClick={this.handleTrackerButton}>1</button>
                <button name="ciaooo" onClick={this.handleTrackerButton}>2</button>
                <button name="tao" onClick={this.handleTrackerButton}>3</button>
                
            </div>
        )
    }
}