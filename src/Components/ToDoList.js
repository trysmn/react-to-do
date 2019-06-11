import React from 'react'
import ToDoElement from './ToDoElement';

const ToDoList = ({todos}) => { 
    return (
        <div data-testid='toDoList'>
            {todos.map(todo => 
                <ToDoElement todo={todo}/>
            )}
        </div>
    )
}

export default ToDoList;