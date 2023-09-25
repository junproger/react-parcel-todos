import { FC } from 'react';

import * as styles from './control.module.css';

import { TodosLength } from '../hooks/useFilterTodo';

import { Filter } from '../../types/Filter';

export interface ControlProp {
  callback: (arg: Filter) => void;
  clearing: () => void;
  todosnum: TodosLength;
  filter: Filter;
}

export const Control: FC<ControlProp> = ({ callback, clearing, todosnum, filter }) => {
  return (
    <div className={styles['control']}>
      <button
        className={filter === Filter.total ? styles['active'] : styles['button']}
        disabled={!todosnum.total}
        onClick={(): void => callback(Filter.total)}
      >
        Total: {todosnum.total}
      </button>
      <button
        className={filter === Filter.active ? styles['active'] : styles['button']}
        disabled={!todosnum.active}
        onClick={(): void => callback(Filter.active)}
      >
        Active: {todosnum.active}
      </button>
      <button
        className={filter === Filter.completed ? styles['active'] : styles['button']}
        disabled={!todosnum.completed}
        onClick={(): void => callback(Filter.completed)}
      >
        Completed: {todosnum.completed}
      </button>
      <button disabled={!todosnum.completed} className={styles['clear']} onClick={clearing}>
        Clear completed
      </button>
    </div>
  );
};
