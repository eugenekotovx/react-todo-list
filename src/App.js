import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList';
import { TextField, Button, Container, Box, AppBar, Typography } from '@material-ui/core';
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      todo: {
        title: '',
        description: ''
      }
    };
  }

  deleteTodo = (id) => {
    const filteredTodos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: filteredTodos
    })
  }

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      todo: {
        ...this.state.todo,
        [name]: value,

      }
    })
  }

  updateStatus = (id, done) => {
    const todoList = this.state.todos;

    const updateTodoList = (id, done) => {
      return todoList.map(todo => {
        if (todo.id == id) {
          return { ...todo, done }
        }
        return todo
      })
    }

    const newTodoList = updateTodoList(id, done);
    this.setState({
      todos: newTodoList
    })
  }

  handleSubmit = (e) => {
    if (this.state.todo.title.length && this.state.todo.description.length !== 0) {
      const newTodo = this.state.todo;
      newTodo.done = false;
      newTodo.id = getRandomInt(1, 2000)
      const todoList = [...this.state.todos, newTodo]
      this.setState({
        todos: todoList,
        todo: {
          title: '',
          description: '',
        }
      })
    }
    e.preventDefault()
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Box p={2} display="flex">
            <img src={logo} className='logo'></img>
            <Typography variant="h5">
              React App
          </Typography>
          </Box>
        </AppBar>
        <Container className='App' maxWidth="sm">
          <form onSubmit={this.handleSubmit}>
            <h1>New todo:</h1>
            <Box boxShadow={3} p={3} mb={5}>
              <Box mb={2}>
                <TextField label="Title" type="text" name="title" value={this.state.todo.title} onChange={this.handleChange} fullWidth={true}></TextField>
              </Box>
              <TextField multiline
                fullWidth={true}
                rows={5}
                label="Description" type="text" name="description" value={this.state.todo.description} onChange={this.handleChange}>
              </TextField>
              <Box mt={4}>
                <Button type="submit" variant="contained" color="primary">
                  add todo
                </Button>
              </Box>
            </Box>
          </form>
          <Typography variant="h5">
            {this.state.todos.length} todos:
          </Typography>
          <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} updateStatus={this.updateStatus} />
        </Container>
      </div>
    )
  }
}

export default App;
