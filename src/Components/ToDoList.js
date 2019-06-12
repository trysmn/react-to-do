import React from 'react'
import { Segment, List } from 'semantic-ui-react'

import ToDoElement from './ToDoElement';

const ToDoList = ({todos}) => { 
    return (
        <Segment compact>
            <List celled>
            {todos.map(todo => 
                <ToDoElement todo={todo}/>
            )}
            </List>
        </Segment>
    )
}

export default ToDoList;