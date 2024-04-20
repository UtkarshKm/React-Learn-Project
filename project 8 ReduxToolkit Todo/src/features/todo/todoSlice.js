import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
	todos: [{id: 1, text: "hello world"}],
};

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addtodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            };
            state.todos.push(todo);
        },
        deletetodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
    },
});

export const {addtodo, deletetodo} = todoSlice.actions;

// individual export of reducers functions to use in components



export default todoSlice.reducer;

// export of reducer to use in store.js
// if you have multiple reducers then you have to export all reducers and combine them in store.js , NOw uou have only one reducer i.e todoSlice.reducer
//through these reducers you can access the state of the store
