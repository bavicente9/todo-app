import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'dark',
};


export const counterSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeToDark: (state) => {
      state.value = 'dark';
    },
    changeToLight: (state) => {
      state.value = 'light';
    },
  },
});

export const selectTheme = (state) => state.theme.value;

export const {changeToDark, changeToLight} = counterSlice.actions;

export default counterSlice.reducer;
