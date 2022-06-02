import { configureStore } from '@reduxjs/toolkit';
import themeSlice from '../features/theme/themeSlice';
import todosSlice from '../features/todosList/todosSlice';

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    todos: todosSlice
  },
});
