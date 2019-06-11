import React from 'react'

const ToDoElement = ({ todo }) => {
    return (
        <div>
            <h1>{todo.title}</h1>
            <p>Status: {todo.completed ? "Completed" : "Incomplete"}</p>
        </div>
    )
}

export default ToDoElement;