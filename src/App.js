import REACT from 'react'
import { Hello } from './Hello'
import { Welcome } from './Welcome'
import { Counter } from './Counter'
import { ClickCounter } from './ClickCounter'
import { ClickTracker } from './ClickTracker'
import { InteractiveWelcome } from './InteractiveWelcome'
import { Login } from './Login'
import { UncontrolledLogin } from './UncontrolledLogin'
import { TodoList } from './TodoList'
import { Container } from './Container'
import { Language } from './Language'
import { Sum } from './Sum'
import { GithubUser } from './GithubUser'
import { GithubUserList } from './GithubUserList'


export class App extends REACT.Component {

    render() {

        return (

            <div>
                <Hello/>
                <InteractiveWelcome/>
                <Counter initialValue={0} incrementingBy={1} incrementInterval={1000}/>
                <ClickCounter onCounterChange={(counter)=> {
                    return console.log(counter)
                }}/>
                <Welcome/>
                <Login/>
                <ClickTracker/>
                <UncontrolledLogin/>
                <Language/>
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
                <Sum numbers={[1, 2, 3, 4, 5]}/>
                <GithubUserList/>
            </div>
        )
    }
}

