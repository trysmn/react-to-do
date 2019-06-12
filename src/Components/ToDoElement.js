import React from 'react'
import { List, Icon } from 'semantic-ui-react'


const ToDoElement = ({ todo }) => {
    return (
        <List.Item>
            <List.Content>
            <List.Header>{todo.title}</List.Header>
            <List.Description>Completed: {todo.completed ? <Icon name='check circle outline'/> : <Icon name='close'/>}</List.Description>
            
            </List.Content>
        </List.Item>
    )
}

export default ToDoElement;