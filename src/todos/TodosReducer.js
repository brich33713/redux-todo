const INITIAL_STATE = {tasks: []}

const TodosReducer = (state = INITIAL_STATE, action) => {
    let arr = state.tasks[0] === undefined ? [action.props] : [...state.tasks,action.props]
    return {...state,tasks:arr}
}

export default TodosReducer;