import REACT from 'react'
import { Hello } from './Hello'
import { Welcome } from './Welcome'


export class App extends REACT.Component {

    render() {

        return (

            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

Welcome.defaultProps = {
    name: "Alex"
}