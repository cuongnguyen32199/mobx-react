export type Todo = {
  id: String;
  text: String;
  completed: Boolean;
};

const STORE = 'TodoStore';
const persistence = window.localStorage.getItem(STORE);
const todos = JSON.parse(persistence || '[]');

export const createStore = () => {
  return {
    snapshot() {
      window.localStorage.setItem(STORE, JSON.stringify(this.todos));
    },
    todos: todos as Todo[],
    completed(id: String, completed: Boolean) {
      const index = this.todos.findIndex((todo) => todo.id === id);
      if (index !== -1) this.todos[index].completed = completed;

      this.snapshot();
    },
    list() {
      return this.todos;
    },
    add(todo: Todo) {
      this.todos.push(todo);
      this.snapshot();
    },
  };
}

export const store = createStore();

export type TodoStore = ReturnType<typeof createStore>;
