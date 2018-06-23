import React, { Component } from "react";

class AddTask extends Component {
  state = {
    name: "",
    task: ""
  };

  nameChanged = event => {
    this.setState({ name: event.target.value });
  };
  taskChanged = event => {
    this.setState({ task: event.target.value });
  };
  render() {
    return (
      <div className="AddTask">
        <input
          type="text"
          placeholder="Name"
          onChange={this.nameChanged}
          value={this.state.name}
        />
        <input
          type="text"
          placeholder="Task"
          onChange={this.taskChanged}
          value={this.state.task}
        />
        <button onClick={() => this.props.taskAdded(this.state.name, this.state.task)}>Add Task</button>
        {/* <button onClick={console.log("buttonnnnnnnnnnnnnn")}>Add Task</button> */}
      </div>
    );
  }
}

export default AddTask;