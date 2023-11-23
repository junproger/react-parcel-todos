import { FC } from 'react';

import * as styles from './control.module.css';

import { TodosLength } from '../../types/ILength';

import { Filter } from '../../types/Filter';

import { Button } from '../shared/Button';

import { logging } from '../../utils/logging';

export interface ControlProp {
  filtering: (arg: Filter) => void;
  clearing: () => void;
  todosnum: TodosLength;
  filter: Filter;
}

export const Control: FC<ControlProp> = ({ filtering, clearing, todosnum, filter }) => {
  logging('CONTROL is rendered');
  return (
    <div className={styles['control']}>
      <Button
        disabled={!todosnum.total}
        csstyles={filter === Filter.total ? 'active' : 'button'}
        arialabel={Filter.total}
        callback={(): void => filtering(Filter.total)}
      >
        Total: {todosnum.total}
      </Button>
      <Button
        disabled={!todosnum.active}
        csstyles={filter === Filter.active ? 'active' : 'button'}
        arialabel={Filter.active}
        callback={(): void => filtering(Filter.active)}
      >
        Active: {todosnum.active}
      </Button>
      <Button
        disabled={!todosnum.completed}
        csstyles={filter === Filter.completed ? 'active' : 'button'}
        arialabel={Filter.completed}
        callback={(): void => filtering(Filter.completed)}
      >
        Completed: {todosnum.completed}
      </Button>
      <Button disabled={!todosnum.completed} csstyles={'clear'} arialabel="Clear completed" callback={clearing}>
        Clear completed
      </Button>
    </div>
  );
};
