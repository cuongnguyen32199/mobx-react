import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TextField, Button } from '@mui/material';

import type { Todo } from '../stores/todo';
import { useStore } from '../stores/TodoStore';

function AddTodo() {
  const [text, setText] = useState<string>('');
  const store = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === '') return;

    const todo: Todo = {
      id: `ID_${Math.floor(Math.random() * 100000000)}`,
      text,
      completed: false,
    };

    store.add(todo);
    setText('');
  };

  return (
    <form action="" onSubmit={handleSubmit} className="form">
      <TextField type="text" variant="outlined" size="small" label="TODO" autoComplete="off" fullWidth value={text} onChange={(e) => setText(e.target.value)} />
      <Button type="submit" variant="contained" size="small" color="info" style={{ width: '150px' }}>
        Add Todo
      </Button>
    </form>
);
}

export default observer(AddTodo);
