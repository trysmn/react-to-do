import React from 'react'
import { List } from 'semantic-ui-react'


const ToDoElement = ({ todo }) => {
    return (
        <List.Item>
            <List.Content>
            <List.Header>{todo.title}</List.Header>
            <List.Description>Status: {todo.completed ? "Completed" : "Incomplete"}</List.Description>
            </List.Content>
        </List.Item>
    )
}

export default ToDoElement;