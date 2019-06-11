import React, {Component} from 'react';
import './App.css';
import Header from '../Components/Header';
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

  render() {
    const { todos } = this.state
    return (
      <div className="App">
        <Header/>
        <ToDoList todos={todos}/>
      </div>
    );
  }
}

export default App;
