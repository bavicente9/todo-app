import React from 'react';
import './App.scss';

import HeaderLayout from './Layouts/HeaderLayout/HeaderLayout'
import BackgroundLayout from './Layouts/backgroundLayout/BackgroundLayout'
import TodoInput from './Components/todoInput/TodoInput'
import TodoList from './Components/todoList/TodoList'


function App() {
  return (
    <div className="App">
        <BackgroundLayout />

      <HeaderLayout />

      <main>
         <TodoInput />
         <TodoList />
      </main>

      <footer>
        <p>
        Drag and drop to reader list
        </p>
      </footer>
    </div>
  );
}

export default App;
