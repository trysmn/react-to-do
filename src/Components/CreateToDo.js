import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react';

const CreateForm = ({ createTodo, handleTodoChange }) => {
    return(
        <Form>
            <Form.Field>
                <label>User id</label>
                <input placeholder='User id' name='userId' onChange={handleTodoChange}/>
            </Form.Field>
            <Form.Field>
                <label>Title</label>
                <input placeholder='Title' name='title' onChange={handleTodoChange}/>
            </Form.Field>
            <Form.Field>
                <Checkbox name='completed' onChange={handleTodoChange} label='Tick this checkbox if it is completed.'/>
            </Form.Field>
            <Button type='submit' onClick={createTodo}>Create</Button>
        </Form>
    );
}

export default CreateForm;