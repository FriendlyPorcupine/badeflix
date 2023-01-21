import { Todo } from '../model/todo';
import styles from '../styles/todolist.module.css';

import { TodoItem } from './TodoItem';

const fetchTodos = async () => {
  // Forschleife für alle Bäder machen, hole directions, sortieren und an Tablle schicken
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');

  if (!res.ok) {
    throw new Error('Failed to fetch todos');
  }

  const todos: Todo[] = await res.json();
  return todos;
};

export const TodoList = async () => {
  const todos = await fetchTodos();

  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} title={todo.title} completed={todo.completed} />
      ))}
    </ul>
  );
};
