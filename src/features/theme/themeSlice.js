import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'dark',
};


export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changeToDark: (state) => {
      state.value = 'dark';
    },
    changeToLight: (state) => {
      state.value = 'light';
    },
  },
});

export const {changeToDark, changeToLight} = counterSlice.actions;

export default counterSlice.reducer;
