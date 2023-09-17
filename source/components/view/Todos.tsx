import { FC } from 'react';

import styles from './todos.module.css';

import { ITodo } from '../../types/ITodo';

interface TodosProp {
  todos: ITodo[];
}

export const Todos: FC<TodosProp> = ({ todos }) => {
  return (
    <div className={styles['todos']}>
      {todos.length ? todos.map((todo) => <p key={todo.id}>{todo.todo}</p>) : <p>No todos jet... </p>}
    </div>
  );
};
