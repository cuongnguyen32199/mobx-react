import React from 'react';
import { observer } from 'mobx-react-lite';
import clsx from 'clsx';
import { Checkbox, FormControlLabel } from '@mui/material';
import { MdRemoveCircle } from 'react-icons/md';

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

  return (
    <div className="item-wrapper">
      <FormControlLabel
        title={String(text)}
        sx={{
          marginLeft: 0,
          marginRight: 0,
          justifyContent: 'space-between',
          '& .MuiFormControlLabel-label': {
            width: 'calc(100% - 42px)',
          },
        }}
        className="item"
        label={<span className={clsx({ item__text: true, 'item__text--completed': completed })}>{text}</span>}
        labelPlacement="end"
        control={<Checkbox checked={Boolean(completed)} onChange={handleChange} />}
      />
      <MdRemoveCircle className="item-wrapper__delete" onClick={() => store.remove(id)} />
    </div>
  );
}

export default observer(Todo);
