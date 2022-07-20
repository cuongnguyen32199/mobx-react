import React from 'react';
import { observer } from 'mobx-react-lite';
import { Checkbox, FormControlLabel, makeStyles } from '@mui/material';

import { useStore } from '../stores/TodoStore';

export type TodoItem = {
  id: Number;
  text: String;
  completed: Boolean;
};

export type PropsType = {
  id: String;
  text: String;
  completed: Boolean;
};

function Todo({ id, text, completed }: PropsType) {
  const store = useStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.completed(id, e.target.checked);
  };
  return <FormControlLabel label={<span className="item__text">{text}</span>} className="item" labelPlacement="start" control={<Checkbox checked={Boolean(completed)} onChange={handleChange} />} />;
}

export default observer(Todo);
