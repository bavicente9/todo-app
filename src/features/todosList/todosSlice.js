

import {createSlice } from '@reduxjs/toolkit';

const initialState = {
    entities: [
        {
            id: '1',
            text: 'text example',
            active: true
        },
        {
            id: '2',
            text: 'text example number 2',
            active: false
        },
    ],
    filter: 'all',
    counterActive: 2
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            state.entities = [...state.entities, action.payload]
            state.counterActive++
        },

        removeTodo: (state, action) => {

            const index = state.entities.findIndex(item => item.id === action.payload)

            if (state.entities[index].active) state.counterActive--

            state.entities.splice(index, 1)
        },

        removeTodosCompleteds: (state) => {
            state.entities = state.entities.filter(item => item.active === false)
        },

        toggleActiveStatus: (state, action) => {
            const index = state.entities.findIndex(item => item.id === action.payload)

            state.entities[index].active = !state.entities[index].active

            if (state.entities[index].active) {
                state.counterActive++
            } else {
                state.counterActive--
            }
        },
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
    },

});

export const { addTodo, removeTodo, removeTodosCompleteds, toggleActiveStatus,changeFilter } = todosSlice.actions;

export const selectEntities = (state) => state.todos.entities;
export const selectFilter = (state) => state.todos.filter;
export const selectCounterActive = (state) => state.todos.counterActive;


export default todosSlice.reducer;
