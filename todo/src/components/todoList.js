import React from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/action";
import { markCompleted } from "../actions/action";

class ToDoList extends React.Component {
  // State's only purpose is to hold the input form value temporarily
  // until it can be handed off to the addTask function
  state = {
    task: ""
  };

  // Sets the input value equal to the name,
  // which since it's the same as state, stores it temporarily
  changeHandler = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log(this.props);
    console.log(this.props.addTask);
    return (
      <>
        Hello from todoList!
        {this.props.todos.map(task => (
          // List existing todo list
          <>
            <h4>{task.value}</h4>
            {/* How to differentiate between items?  Use the click to ID which item you want.
            in the mapping, onClick, take note of which ID is clicked, pass it to action.
            Such a simple concept, difficult to actually code */}
            <button onClick={() => {this.props.markCompleted(task.id);}}>
              Mark Completed
            </button>
          </>
        ))}
        <input
          type="text"
          placeholder="Enter New Task"
          value={this.state.task}
          name="task"
          onChange={this.changeHandler}
        />
        {/* onClick, call addTask from action creator, feed it this.state.task */}
        <button
          onClick={() => {
            this.props.addTask(this.state.task);
          }}
        >
          Submit
        </button>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(
  mapStateToProps,
  { addTask, markCompleted }
)(ToDoList);
