import REACT from 'react'
import {Message} from "./Message"


export class Hello extends REACT.Component {

    render() {
        return  (
            <>
            <h1>Hello, World!</h1>
            <Message/>
            </>
            )
    }
}