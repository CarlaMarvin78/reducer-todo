import React, {useReducer} from 'react';
import {initialState, reducer} from './reducer';
import TodoList from './Components/TodoList';
import TodoForm from './Components/TodoForm';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('state',state);
  const addTodo = item => {
    if(item)
    dispatch({type: "ADD_TODO", payload: item});
  }
  const toggleCompleted = id => {
    dispatch({type: "TOGGLE_COMPLETED", payload: id});
  }
  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED"});
  }
  return (
    <div className="App">
      <TodoList todoArray={state.todoArray} toggleCompleted={toggleCompleted} />
      <TodoForm addTodo={addTodo} clearCompleted={clearCompleted}/>
    </div>
  );
}

export default App;
