import { FC } from 'react';

import * as styles from './control.module.css';

import { TodosLength } from '../hooks/useFilterTodo';

import { Filter } from '../../types/Filter';

import { Button } from '../shared/Button';

export interface ControlProp {
  callback: (arg: Filter) => void;
  clearing: () => void;
  todosnum: TodosLength;
  filter: Filter;
}

export const Control: FC<ControlProp> = ({ callback, clearing, todosnum, filter }) => {
  return (
    <div className={styles['control']}>
      <Button
        disabled={!todosnum.total}
        csstyles={filter === Filter.total ? 'active' : 'button'}
        arialabel={Filter.total}
        callback={(): void => callback(Filter.total)}
      >
        Total: {todosnum.total}
      </Button>
      <Button
        disabled={!todosnum.active}
        csstyles={filter === Filter.active ? 'active' : 'button'}
        arialabel={Filter.active}
        callback={(): void => callback(Filter.active)}
      >
        Active: {todosnum.active}
      </Button>
      <Button
        disabled={!todosnum.completed}
        csstyles={filter === Filter.completed ? 'active' : 'button'}
        arialabel={Filter.completed}
        callback={(): void => callback(Filter.completed)}
      >
        Completed: {todosnum.completed}
      </Button>
      <Button disabled={!todosnum.completed} csstyles={'clear'} arialabel="Clear completed" callback={clearing}>
        Clear completed
      </Button>
    </div>
  );
};
