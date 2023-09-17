import { FC } from 'react';

import styles from './todos.module.css';

import { ITodo } from '../../types/ITodo';
import { Item } from '../control/Item';

interface TodosProp {
  todos: ITodo[];
}

export const Todos: FC<TodosProp> = ({ todos }) => {
  return (
    <div className={styles['todos']}>
      {todos.length ? todos.map((todo) => <Item key={todo.id} todo={todo} />) : <p>No todos jet... </p>}
    </div>
  );
};
