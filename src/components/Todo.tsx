import React from 'react';

export type TodoItem = {
  id: Number;
  text: String;
  completed: Boolean;
}

export type PropsType = {
  text: String;
  completed: Boolean;
  handleChange?(): void;
};

function Todo({ text, completed, handleChange }: PropsType) {
  return (
    <div className="item">
      <span className="item__text">{text}</span>
      <input type="checkbox" checked={Boolean(completed)} onChange={handleChange} className="item__checkbox" />
    </div>
  );
}

export default Todo;
