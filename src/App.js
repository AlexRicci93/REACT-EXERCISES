import REACT from 'react'
import { Hello } from './Hello'
import { Welcome } from './Welcome'
import { Counter } from './Counter'


export class App extends REACT.Component {

    render() {

        return (

            <div>
                <Hello/>
                <Welcome name="John" age={29}/>
                <Counter initialValue={0} incrementingBy={1} incrementInterval={1000}/>
            </div>
        )
    }
}

