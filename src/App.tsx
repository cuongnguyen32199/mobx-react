import React from 'react';
import TodoList from './components/TodoList';
import { StoreProvider } from './stores/TodoStore';
import './assets/scss/main.scss';

function App() {
  return (
    <StoreProvider>
      <div className="root">
        <div className="container">
          <TodoList />
        </div>
      </div>
    </StoreProvider>
  );
}

export default App;
