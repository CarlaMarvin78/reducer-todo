import React, {useReducer} from 'react';
import {initialState, reducer} from './reducer';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state',state);
  const addTodo = item => {
    dispatch({type: "ADD_TODO", payload: item});
  }
  return (
    <div className="App">
      <TodoList todoArray={state.todoArray} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
