

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
            text: '10 minutes meditation',
            active: true
        },
        {
            id: '3',
            text: 'Read for 1hour',
            active: true
        },
        {
            id: '4',
            text: "280char Example Lorem ipsum dolor sit amet, consectetur adipiscing elit.Morbi erat felis, congue a consectetur ac, pretium sed risus.Cras ornare tortor ut ullamcorper posuere. Sed vel dui bibendum,laoreet lectus non, viverra erat. Mauris aliquet velit sagittis elitcommodo venena.",
            active: false
        },
    ],
    filter: 'all',
    counterActive:3
};


export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        addTodo: (state, action) => {
            state.entities = [...state.entities, action.payload]
            if(action.payload.active)state.counterActive++
        },

        removeTodo: (state, action) => {
            const index = state.entities.findIndex(item => item.id === action.payload)

            if (state.entities[index].active) state.counterActive--

            state.entities.splice(index, 1)
        },

        removeTodosCompleteds: (state) => {
            const activeTodos = state.entities.filter(item => item.active === true) 
            state.entities = activeTodos
            state.counterActive = activeTodos.length
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
