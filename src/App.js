import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Take out trash",
        completed: false,
      },
      {
        id: 2,
        title: "Make bed",
        completed: false,
      },
      {
        id: 3,
        title: "Do Laundry",
        completed: false,
      },
      {
        id: 4,
        title: "Dishes",
        completed: true,
      }
    ]
  }
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    }) })
  }
  delTodo = (id) =>{
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  render(){
    
    
  return (
    <div className="App">
      <Todos markComplete={this.markComplete} delTodo={this.delTodo} todos={this.state.todos}/>
    </div>
  );
  }
}

export default App;
