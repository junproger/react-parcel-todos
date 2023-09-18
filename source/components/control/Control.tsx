import { FC } from 'react';

import * as styles from './control.module.css';

import { ITodo } from '../../types/ITodo';
import { Filter } from '../../types/Filter';
import { calc } from '../../utils/calc';

export interface ControlProp {
  callback: (arg: Filter) => void;
  clearing: () => void;
  todos: ITodo[];
}

export const Control: FC<ControlProp> = ({ callback, clearing, todos }) => {
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
      <button disabled={!calc(todos, true)} className={styles['clear']} onClick={clearing}>
        Clear completed
      </button>
    </div>
  );
};
