import React from 'react';
import '../App.css';

const TodoList = ({todoArray, toggleCompleted}) => {
    return (
        <div>
            {todoArray.map(todo =>
                <div key={todo.id} 
                    onClick={()=>toggleCompleted(todo.id)}
                    className={todo.completed?'completed':''}>
                    {todo.item}
                </div>)}
        </div>
    );
};
export default TodoList;