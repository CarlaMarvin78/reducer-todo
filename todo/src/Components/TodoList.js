import React from 'react';
const TodoList = ({todoArray}) => {
    return (
        <div>
            {todoArray.map(todo => <div key={todo.id}>{todo.item}</div>)}
        </div>
    );
};
export default TodoList;