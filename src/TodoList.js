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



    handleResetValues = () => {

        this.setState({

            todos: []
        })

    }

    handleRemoveValue = (todo) => {

        
        this.setState((state) => {

            return {
                todos: todo = state.todos.filter((item) => {return item !== todo})
            }
        })


    }
    render() {

        return (

            <ul>
                
                <form onSubmit={this.handleAddValue}>
                <input name="input" />
                <button type="submit">Add Value</button>
                <button type="button" onClick={this.handleResetValues}>Reset</button>
                <button >Remove</button>
                </form>

                {this.props.render(this.state.todos, this.handleRemoveValue)}
            </ul>
           
        )
    }

}

