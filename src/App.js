import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import Header from './components/layout/Header'
import uuid from 'uuid'

class App extends Component {
    state = {
        todos: [
            {
                id: uuid.v4(),
                title: "Take out trash",
                completed: false,
            },
            {
                id: uuid.v4(),
                title: "Make bed",
                completed: false,
            },
            {
                id: uuid.v4(),
                title: "Do Laundry",
                completed: false,
            },
            {
                id: uuid.v4(),
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
    addTodo = (title) => {
        const newTodo = {
            id: uuid.v4(),
            title,
            completed: false
        }
        this.setState({todos: [...this.state.todos, newTodo]})
    }
    render(){    
        return (
            <div className="App">
                <div className="container">
                    <Header />
                    <AddTodo addTodo={this.addTodo} />
                    <Todos markComplete={this.markComplete} delTodo={this.delTodo} todos={this.state.todos}/>
                </div>
            </div>
        );
    }
}

export default App;
