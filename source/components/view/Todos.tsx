import { FC } from 'react';

import styles from './todos.module.css';

import { ITodo } from '../../types/ITodo';
import { Item } from '../control/Item';

interface TodosProp {
  todos: ITodo[];
  checking: (id: string) => void;
}

export const Todos: FC<TodosProp> = ({ todos, checking }) => {
  return (
    <div className={styles['todos']}>
      {todos.length ? (
        todos.map((todo) => <Item key={todo.id} todo={todo} checking={checking} />)
      ) : (
        <p>No todos jet... </p>
      )}
    </div>
  );
};
