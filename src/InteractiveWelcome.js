import React from "react"; 
import { Welcome } from "./Welcome"

export class InteractiveWelcome extends React.Component {

    state = {

        name: '',
    
    }

    handleTrackerChange = (event) => {

        this.setState( {
            
            name: event.target.value

            
        })



    }


    render() {

        return(


            <>     
            <input name="name" value={this.state.name} onChange={this.handleTrackerChange} />
            <Welcome name={this.state.name} age={29}/>
            </>
        
            
        )

    }

}