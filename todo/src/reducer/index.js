export const initialState = {
    todoArray: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 389298758
        }
    ]
};
export function reducer(state, action) {
    console.log('action', action);
    switch(action.type) {
        case "ADD_TODO":
            return {...state, todoArray: [...state.todoArray, {item: action.payload, completed:false, id:Date.now()}]};
        case "TOGGLE_COMPLETED":
            const newTodoArray = state.todoArray.map(todo=> {
                if (todo.id===action.payload) return {...todo, completed: !todo.completed};
                return todo;
            });
            return {...state, todoArray: newTodoArray};
        case "CLEAR_COMPLETED":
            return {...state, todoArray: state.todoArray.filter(todo => !todo.completed)};
        default:
            return state;
    }
}

