import { FC } from 'react';

import styles from './todos.module.css';

import { ITodo } from '../../types/ITodo';
import { Item } from '../control/Item';

interface TodosProp {
  todos: ITodo[];
  checking: (id: string) => void;
  deletion: (id: string) => void;
}

export const Todos: FC<TodosProp> = ({ todos, checking, deletion }) => {
  return (
    <div className={styles['todos']}>
      {todos.length ? (
        todos.map((todo) => <Item key={todo.id} todo={todo} checking={checking} deletion={deletion} />)
      ) : (
        <p>You don&apos;t have todos... </p>
      )}
    </div>
  );
};
