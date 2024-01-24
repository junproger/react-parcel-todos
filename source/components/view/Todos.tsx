import { FC } from 'react';

import * as styles from './todos.module.css';

import { ITodo } from '../../types/ITodo';
import { Item } from '../control/Item';

import { logging } from '../../utils/logging';

export interface TodosProp {
  alltodos: ITodo[];
  checking: (id: string) => void;
  deletion: (id: string) => void;
}

export const Todos: FC<TodosProp> = ({ alltodos, checking, deletion }) => {
  logging('ALL-TODOS is rendered');
  return (
    <div className={styles['todos']}>
      {alltodos.length > 0 ? (
        alltodos
          .filter((todo) => todo.display)
          .map((todo) => <Item key={todo.id} {...todo} checking={checking} deletion={deletion} />)
      ) : (
        <p>You don&apos;t have todos... </p>
      )}
    </div>
  );
};
