import react, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import Todo from './todo'

const TodoList = () => {
    const dispatch = useDispatch()
    const todos = useSelector(store => store.tasks)
    const [input,changeInput] = useState()
    const [listExists,changeListExistance] = useState(false)
    
    const handleChange = (e) => {
        e.preventDefault()
        const {name,value} = e.target;
        changeInput(()=>(
        {
            ...input,
            [name]:value
        }))
    }

    const handleClick = (e) => {
        e.preventDefault()
        if(e.target.innerHTML === 'Remove'){
            e.target.parentElement.remove()
        } else {
        if(input.task !== undefined){
            dispatch({type: "add",props: input.task})
            changeListExistance(true)
        }
        }
    }
    
    return (
        <div>
            <h1>Todo List</h1>
            <form>
                <label htmlFor="task">New Task: </label>
                <input type="text" id="task" name="task" onChange={handleChange} />
                <button onClick={handleClick}>Add Task</button>
            </form>
            {listExists && 
                <div>
                    <ol>
                    {todos.map(todo =>
                        <li>{todo} <button onClick={handleClick}>Remove</button></li>
                    )}
                    </ol>
                </div>}

        </div>
    )
}


export default TodoList;