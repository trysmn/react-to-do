import React, {Component} from 'react';
import { Button, Divider, Grid, Header, Icon, Search, Segment } from 'semantic-ui-react'

import './App.css';
import ToDoHeader from '../Components/ToDoHeader';
import ToDoList from '../Components/ToDoList';
import CreateForm from '../Components/CreateToDo';

class App extends React.Component {

  state = {
    userId: 1, 
    todos: [],
    newTodo: {}
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.json()
    this.setState({
      todos
    })
  }

  filterTodos = (todos, userId) => todos.filter(todo => 
    todo.userId === userId
  );

  handleTodoChange = (event, data) => {
    let value;
    let name;
    console.log(event.target.value);
    if (!data) {
      value = typeof parseInt(event.target.value) === Number ? parseInt(event.target.value) : event.target.value;
      name = event.target.name;
    } else {
      value = data.checked;
      name = data.name;
    }
    this.setState({
      newTodo: {
        ...this.state.newTodo, [name]: value
      }
    })
  }

  createTodo = (event) => {
    console.log('created!')
    // grab this.state.newTodo
    this.setState({
      todos: [
        ...this.state.todos, this.state.newTodo
      ]
    });
    // add this to our Todos array in state (200 todos)
    // spread operater, new tosdo
  }

  render() {
    // const { todos } = this.state
    const { handleTodoChange, createTodo } = this
    const todos = this.filterTodos(this.state.todos, this.state.userId);
    return (
      <div className="App">
        <ToDoHeader/>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign='left'>
            <Grid.Column>
              <ToDoList todos={todos}/>
            </Grid.Column>
            <Grid.Column>
              <CreateForm handleTodoChange={handleTodoChange} createTodo={createTodo}/>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default App;
