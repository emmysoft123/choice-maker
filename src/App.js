import React, { Component } from 'react';
import Form from './Form';
import Header from './Header';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'






class App extends Component{
   state={
     fields:[]

   };
  onSubmit = (fields) =>{
    this.setState({fields});

  //  console.log('App comp got:',fields);
  }
  deleteTodo = (fields) => {
    console.log(fields.length);
  }

  render(){

    return(
    <BrowserRouter>
    <div className ="choicemaker-App container">

     <Header />
      <h6 className="question">Question</h6>
      <Form  onSubmit={fields => this.onSubmit(fields)} />
      <p>{JSON.stringify(this.state.fields, null,2)}</p>

      </div>
      </BrowserRouter>
    );
  }

}
export default App;
/*
import AddTodo from './AddTodo';

class app extends Component{

  class = {
    content:''
  }
  handleChange = (e) =>{
    this.setState({
      content: e.target.value
    })
  }
  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state);
  }
  render(){
    return(
      <div className ="todo-App container">
      <h3 className="center green-text">WELCOME TO YOUR CHOICE MAKER APP</h3>
      <form onSubmit = {this.handleSubmit}>
      <label>Add new todo:</label>
      <input type = "text" onChange={this.handleChange} />
      <label htmlfor ="password">passwoed</label>
      <input type ="text"name="text"value={this.handleChange}
      onChange={this.handleChange}/>
      </form>
      </div>

    )
  }
}
export default app;
/*
class App extends Component {

  state = {
    todos : [
     { id:1, content: 'buy some milk'},
      { id :2, content: 'play mario Kart'}
   ]
  }

 deleteTodo = (id) => {
  const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className ="todo-App container">
<h3 className="center green-text">WELCOME TO YOUR CHOICE MAKER APP</h3>
<h3 className = "center blue-text">Question</h3>
<Todos todos = {this.state.todos} deleteTodo={this.deleteTodo}/>
<AddTodo />
      </div>
    );
  }
}
*/
//export default App;
