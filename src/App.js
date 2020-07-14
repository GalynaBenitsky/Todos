import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import './App.css';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuid } from 'uuid';
import axios from 'axios';



class App extends Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }));
  }

  //Toggle Complete
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });

  };
  //Delete Todo
  deleteTodo = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>
      this.setState({
        todos: [...this.state.todos.filter(todo => todo.id !== id)]
      })
    );

  };
  //Add new item to the list
  addTodo = title => {
    axios
      .post('https://jsonplaceholder.typicode.com/todos', {
        title,
        completed: false
      })
      .then(res => {
        res.data.id = uuid.v4;
        this.setState({ todos: [...this.state.todos, res.data] });
      });
  }


  render() {

    return (

      <Router>

        <div className="App" >
          <div className="container">
            <div className="row">
              <div className="col-md-6 mx-auto">
                <Header />
                <div className="border border-dark">
                  <Route exact path="/" render={props => (
                    <React.Fragment>
                      <AddTodo addTodo={this.addTodo} />
                      <Todos todos={this.state.todos} toggleComplete={this.toggleComplete} deleteTodo={this.deleteTodo} />
                    </React.Fragment>
                  )} />
                  <Route path="/about" component={About} />
                </div>

              </div>
            </div>
          </div>
        </div >


      </Router >
    );
  }
}

export default App;