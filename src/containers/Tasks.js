import React, { Component } from 'react';
import { connect } from 'react-redux';

import Task from '../components/Task/Task';
import AddTask from '../components/AddTask/AddTask';
import * as actionTypes from '../store/actions';

class Tasks extends Component {
    
    render () {
        return (
            <div>
                <AddTask taskAdded={this.props.onAddedTask} />
                {this.props.tsk.map(task => (
                    <Task
                        key={task.id}
                        name={task.name} 
                        task={task.task} 
                        clicked={() => this.props.onRemovedTask(task.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        tsk: state.tasks
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddedTask: (name, task) => dispatch({type: actionTypes.ADD_TASK, taskData: {name:name, task: task}}),
        onRemovedTask: (id) => dispatch({type: actionTypes.REMOVE_TASK, taskId: id})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);