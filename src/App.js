import React from "react";
import { Routes, Route } from "react-router-dom";
import { Welcome } from "./Welcome";
import { Counter} from "./Counter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Link } from "react-router-dom";



export class App extends React.Component {

    render() {

        return(

            <>
            <Routes>
                <Route path="/" element={<Welcome name="Alex"/>}/>  
                <Route path="/counter" element={<Counter/>}/>   
                <Route path="users/:username" element={<ShowGithubUser/>}/>
            </Routes>
        <div style={{display: 'flex', justifyContent:'space-around'}}>
           <Link to="./" style={{textDecoration: 'none', color: 'maroon'}}><h2>Home</h2></Link>
           <Link to="./counter" style={{textDecoration: 'none', color: 'maroon'}}><h2>Counter</h2></Link>
           <Link to="users/:username" style={{textDecoration: 'none', color: 'maroon' }}><h2>User</h2></Link>
        </div>
            </>
        )
    }
}