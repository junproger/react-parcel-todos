import { FC } from 'react';

import * as styles from './todos.module.css';

import { ITodo } from '../../types/ITodo';
import { Item } from '../control/Item';

export interface TodosProp {
  filtered: ITodo[];
  checking: (id: string) => void;
  deletion: (id: string) => void;
}

export const Todos: FC<TodosProp> = ({ filtered, checking, deletion }) => {
  return (
    <div className={styles['todos']}>
      {filtered.length > 0 ? (
        filtered.map((todo) => <Item key={todo.id} {...todo} checking={checking} deletion={deletion} />)
      ) : (
        <p>You don&apos;t have todos... </p>
      )}
    </div>
  );
};
