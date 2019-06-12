import React, {Component} from 'react';
import './App.css';
import ToDoHeader from '../Components/ToDoHeader';
import ToDoList from '../Components/ToDoList';

class App extends React.Component {

  state = {
    todos: []
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

  render() {
    // const { todos } = this.state
    const todos = this.filterTodos(this.state.todos, 2);
    return (
      <div className="App">
        <ToDoHeader/>
        <ToDoList todos={todos}/>
      </div>
    );
  }
}

export default App;
