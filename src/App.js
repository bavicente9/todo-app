import React from 'react';
import './App.scss';

import HeaderLayout from './Layouts/HeaderLayout/HeaderLayout'
import BackgroundLayout from './Layouts/backgroundLayout/BackgroundLayout'
import TodoForm from './Components/todoForm/TodoForm'
import TodoList from './Components/todoList/TodoList'


function App() {
  return (
    <div className="App">
        <BackgroundLayout />

      <HeaderLayout />

      <main>
         <TodoForm />
         <TodoList />
      </main>

    </div>
  );
}

export default App;
