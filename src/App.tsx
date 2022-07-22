import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import TodoList from './components/TodoList';
import { StoreProvider } from './stores/TodoStore';
import './assets/scss/main.scss';

const darkTheme = createTheme({
  palette: { mode: 'dark' },
  typography: {
    fontFamily: '"Poppins"',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <StoreProvider>
        <div className="root">
          <div className="container">
            <TodoList />
          </div>
        </div>
      </StoreProvider>
    </ThemeProvider>
  );
}

export default App;
