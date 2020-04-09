import React, { Component } from 'react';
import '.Todo.css';

class Todo extends Component {
  render() {
    return (
      <div className="App">
        <h1>ToDo App</h1>
      </div>
render() {
  return (
    <div id="01234" className="todo">
      <button className="complete">Check</button>
      <p>Do A thing</p>
    </div>
  );
}
render(
<div class="content">
  <div id="todos">
    <!-- form -->
    <form id="todoInput">
      <input id="newItem" type="text" alt= "input new item for todo list" placeholder="New Item..."/>
      <!-- submit item button -->
      <button id="submitItem">+</button>
      </form>
  </div>
</div>
  
    );
  }
}

export default Todo;
