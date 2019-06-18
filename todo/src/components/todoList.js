import React from "react"
import {connect} from "react-redux"


export default class ToDoList extends React.Component {
    
    render(){
        return(
            <>
            {/* props.map(task => {
                <h3>{task.value}</h3>
            }) */}
            Hello from todoList!
            <button>
                Submit
            </button>
            </>
        )
    }
}

// mapStateToProps = state => {
//     return {
//         todos: state.todos
//     }
// }

// export default connect(mapStateToProps, {})(ToDoList)