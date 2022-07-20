export type Todo = {
  id: String;
  text: String;
  completed: Boolean;
};

export function createStore() {
  return {
    todos: [] as Todo[],
    completed(id: String, completed: Boolean) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) this.todos[index].completed = completed;
    },
    list() {
      return this.todos;
    },
    add(todo: Todo) {
      this.todos.push(todo);
    },
  };
}

export const store = createStore();

export type TodoStore = ReturnType<typeof createStore>;
