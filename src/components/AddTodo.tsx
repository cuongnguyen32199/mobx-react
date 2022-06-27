import React, { useState } from 'react';

function AddTodo() {
  const [text, setText] = useState<string>('');
  return (
    <div className="toolbar">
      <input type="text" name="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="button">Add Todo</button>
    </div>
  );
}

export default AddTodo;
