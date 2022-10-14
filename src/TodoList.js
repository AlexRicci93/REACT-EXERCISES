import React from "react";

export class TodoList extends React.Component {


    state = {

        todos: ['tuningGuitar', 'playingSong', 'recordingVocals', 'Mixing', 'Mastering']      

    }


    handleAddValue = (event) => {

       event.preventDefault()
        const value =  event.target.input.value

        this.setState( {

           todo: value
          
            
        })
        
        this.state.todos.push(value)

        event.target.input.value = ''
    }


    render() {

        return (

            <ul>
                {this.state.todos.map((todo, index) => <li key={index}> {todo} </li>)}
                <form onSubmit={this.handleAddValue}>
                <input name="input" />
                <button type="submit">Add Value</button>
                </form>
            </ul>
           
        )
    }

}

