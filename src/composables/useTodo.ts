import { ref } from 'vue';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export function useTodos() {
  const newTodo = ref('');
  const todos = ref<Todo[]>([]);
  let nextId = 1;

  const addTodo = () => {
    const text = newTodo.value.trim();
    if (!text) return;
    todos.value.push({
      id: nextId++,
      text,
      completed: false,
    });
    newTodo.value = '';
  };

  const removeTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
  };

  return {
    newTodo,
    todos,
    addTodo,
    removeTodo,
  };
}
