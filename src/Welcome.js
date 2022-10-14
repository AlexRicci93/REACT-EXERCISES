import React from "react";
import { Age } from "./Age";


export class Welcome extends React.Component {

    render () {

        return (
            <>
            <div className="welcome">
            <p>Welcome, {this.props.name}!</p>
            {!!(this.props.age > 18 ) && <Age age={this.props.age}/>}
            {!(this.props.age > 18 ) && <h2>You are very young!</h2>}
            </div>

            </>
           
        )
    }
}