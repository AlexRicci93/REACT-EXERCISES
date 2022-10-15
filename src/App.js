import REACT from 'react'
import { Hello } from './Hello'
// import { Welcome } from './Welcome'
import { Counter } from './Counter'
import { ClickCounter } from './ClickCounter'
import { ClickTracker } from './ClickTracker'
import { InteractiveWelcome } from './InteractiveWelcome'
import { Login } from './Login'
import { UncontrolledLogin } from './UncontrolledLogin'
import { TodoList } from './TodoList'
import { Container } from './Container'


export class App extends REACT.Component {

    render() {

        return (

            <div>
                <Hello/>
                <InteractiveWelcome/>
                <Counter initialValue={0} incrementingBy={1} incrementInterval={1000}/>
                <ClickCounter/>
                <Login/>
                <ClickTracker/>
                <UncontrolledLogin/>
                <TodoList render = {(todos, handleRemoveValue) => {
                    return (
                        todos.map((todo, index) => (
                            <li key={index}>
                            {todo}
                            <button key={index} onClick={() => {handleRemoveValue(todo)}}>Remove</button>
                            </li>
                        ))
                    )
                    }
                    }
                        
                />        
                <Container title="Title"/>
            </div>
        )
    }
}

