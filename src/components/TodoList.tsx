import React from 'react';
import { observer } from 'mobx-react-lite';

import Todo from './Todo';
import type { TodoItem } from './Todo';

export type PropTypes = {
  todos: TodoItem[]
}

function TodoList({ todos }: PropTypes) {
  return (
    <div className="items">
      { todos && todos.map((todo, index) => <Todo key={index} text={todo.text} completed={todo.completed} />) }
    </div>
  )
}

export default observer(TodoList);
