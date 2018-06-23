import * as actionTypes from './actions';

const initialState = {
    tasks: []
};

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.ADD_TASK:
            const newTask = {
                id: new Date(),
                name: action.taskData.name,
                task: action.taskData.task
            }
            return {
                ...state,
                tasks: state.tasks.concat( newTask )
            }
        case actionTypes.REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.taskId)
            }
        default:
        return state;
    }
};

export default reducer;