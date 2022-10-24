import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter} from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";



export class App extends React.Component {

    render() {

        return(

            <>
            <Routes>
                <Route path="/" element={<Welcome name="Alex"/>}/>  
                <Route path="/counter" element={<Counter/>}/>   
                <Route path="users/:username" element={<ShowGithubUser/>}/>
            </Routes>
           
            </>
        )
    }
}