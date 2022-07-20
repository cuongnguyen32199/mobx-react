import React from 'react';
import { observer } from 'mobx-react-lite';
import Todo from './TodoItem';
import type { TodoItem } from './TodoItem';
import AddTodo from './AddTodo';

import { useStore } from '../stores/TodoStore';

export type PropTypes = {
  todos: TodoItem[];
};

function TodoList() {
  const store = useStore();

  const todos = store.todos || [];
  return (
    <div className="todos">
      <AddTodo />
      <div className="items">{todos && todos.map((todo, index) => <Todo key={index} id={todo.id} text={todo.text} completed={todo.completed} />)}</div>
    </div>
  );
}

export default observer(TodoList);
