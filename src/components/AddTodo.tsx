import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { TextField } from '@mui/material';

import type { Todo } from '../stores/todo';
import { useStore } from '../stores/TodoStore';

function AddTodo() {
  const [text, setText] = useState<string>('');
  const store = useStore();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === '') return;

    const todo: Todo = { id: `ID_${Date.now()}`, text, completed: false };
    store.add(todo);
    setText('');
  };

  return (
    <form action="" onSubmit={handleSubmit} className="form">
      <TextField type="text" variant="outlined" size="medium" label="What need to be done" autoComplete="off" fullWidth value={text} onChange={(e) => setText(e.target.value)} />
    </form>
);
}

export default observer(AddTodo);
