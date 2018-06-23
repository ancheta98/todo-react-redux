import React from 'react';

const task = (props) => (
    <div className="Task" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <p>Task: {props.task}</p>
    </div>
);

export default task;