import React from "react"
import {connect} from "react-redux"


class ToDoList extends React.Component {
    
    render(){
        console.log(this.props)
        return(
            
            <>
            
            Hello from todoList!
           {this.props.todos.map(task => 
                <h4>{task.value}</h4>
                )}
            <button>
                Submit
            </button>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps, {})(ToDoList)