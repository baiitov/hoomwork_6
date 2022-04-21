// import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import TodoList from './components/TodoList';
import { useState } from 'react';
function App() {
  const [todos, setTodos] = useState([])
  function data (onTodo){
    console.log(todos);
setTodos([onTodo,...todos])
  }
  return (
    <div className="App">
      <div>
      <Todo onTodo={data}/>
      <hr/>
      <TodoList todos={todos} setTodos={setTodos}/>
      </div>
    
    </div>
  );
}

export default App;
