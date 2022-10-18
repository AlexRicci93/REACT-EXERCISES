import React from "react";
import { Age } from "./Age";


export function Welcome(props) {


        return (
            <>
            <div className="welcome">
            <p>Welcome, {props.name}!</p>
            {!!(props.age > 18 ) && <Age age={props.age}/>}
            {!(props.age > 18 ) && <h2>You are very young!</h2>}
            </div>

            </>
           
        )
    
}