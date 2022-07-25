import React from 'react';
import { observer } from 'mobx-react-lite';
import { Collapse } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';

import Todo from './TodoItem';
import AddTodo from './AddTodo';
import type { TodoItem } from './TodoItem';

import logo from '../assets/logo.svg';
import { useStore } from '../stores/TodoStore';

export type PropTypes = {
  todos: TodoItem[];
};

function TodoList() {
  const store = useStore();

  const todos = store.list();
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="" />
      </header>
      <div className="todos">
        <AddTodo />
        <TransitionGroup className="items">
          {todos && todos.map((todo) => (
            <Collapse key={String(todo.id)}>
              <Todo id={todo.id} text={todo.text} completed={todo.completed} />
            </Collapse>
          ))}
        </TransitionGroup>
      </div>
    </>
  );
}

export default observer(TodoList);
