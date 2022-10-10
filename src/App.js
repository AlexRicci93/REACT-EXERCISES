import REACT from 'react'
import { Hello } from './Hello'
import { Welcome } from './Welcome'


export class App extends REACT.Component {

    render() {

        return (

            <div>
                <Hello/>
                <Welcome name="John" age={29}/>
            </div>
        )
    }
}

