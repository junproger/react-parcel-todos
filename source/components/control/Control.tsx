import { FC } from 'react';

import * as styles from './control.module.css';

import { ITodo } from '../../types/ITodo';
import { calc } from '../../utils/calc';

export interface ControlProp {
  todos: ITodo[];
}

export const Control: FC<ControlProp> = ({ todos }) => {
  return (
    <div className={styles['control']}>
      <button>Total: {todos.length}</button>
      <button>Active: {calc(todos, false)}</button>
      <button>Completed: {calc(todos, true)}</button>
      <button className={styles['clear']}>Clear completed</button>
    </div>
  );
};
