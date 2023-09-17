import { FC } from 'react';

import styles from './control.module.css';

import { ITodo } from '../../types/ITodo';
import { calc } from '../../utils/calc';

interface ControlProp {
  todos: ITodo[];
}

export const Control: FC<ControlProp> = ({ todos }) => {
  return (
    <div className={styles['control']}>
      <p>Total: {todos.length}</p>
      <p>Active: {calc(todos, false)}</p>
      <p>Completed: {calc(todos, true)}</p>
      <p className={styles['clear']}>Clear completed</p>
    </div>
  );
};
