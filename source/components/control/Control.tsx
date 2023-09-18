import { FC } from 'react';

import * as styles from './control.module.css';

import { ITodo } from '../../types/ITodo';
import { Filter } from '../../types/Filter';
import { calc } from '../../utils/calc';

export interface ControlProp {
  callback: (arg: Filter) => void;
  clearing: () => void;
  todos: ITodo[];
  filter: Filter;
}

export const Control: FC<ControlProp> = ({ callback, clearing, todos, filter }) => {
  return (
    <div className={styles['control']}>
      <button
        className={filter === Filter.total ? styles['active'] : styles['button']}
        disabled={!todos.length}
        onClick={(): void => callback(Filter.total)}
      >
        Total: {todos.length}
      </button>
      <button
        className={filter === Filter.active ? styles['active'] : styles['button']}
        disabled={!calc(todos, false)}
        onClick={(): void => callback(Filter.active)}
      >
        Active: {calc(todos, false)}
      </button>
      <button
        className={filter === Filter.completed ? styles['active'] : styles['button']}
        disabled={!calc(todos, true)}
        onClick={(): void => callback(Filter.completed)}
      >
        Completed: {calc(todos, true)}
      </button>
      <button disabled={!calc(todos, true)} className={styles['clear']} onClick={clearing}>
        Clear completed
      </button>
    </div>
  );
};
