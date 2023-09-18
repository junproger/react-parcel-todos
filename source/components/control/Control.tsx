import { FC } from 'react';

import * as styles from './control.module.css';

import { ITodo } from '../../types/ITodo';
import { Filter } from '../../types/Filter';
import { calc } from '../../utils/calc';

export interface ControlProp {
  callback: (arg: Filter) => void;
  todos: ITodo[];
}

export const Control: FC<ControlProp> = ({ callback, todos }) => {
  return (
    <div className={styles['control']}>
      <button disabled={!todos.length} onClick={(): void => callback(Filter.total)}>
        Total: {todos.length}
      </button>
      <button disabled={!calc(todos, false)} onClick={(): void => callback(Filter.active)}>
        Active: {calc(todos, false)}
      </button>
      <button disabled={!calc(todos, true)} onClick={(): void => callback(Filter.completed)}>
        Completed: {calc(todos, true)}
      </button>
      <button disabled={!calc(todos, true)} className={styles['clear']}>
        Clear completed
      </button>
    </div>
  );
};
