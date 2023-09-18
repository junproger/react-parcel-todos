import { FC } from 'react';

import * as styles from './todos.module.css';

import { ITodo } from '../../types/ITodo';
import { Filter } from '../../types/Filter';
import { Item } from '../control/Item';

export interface TodosProp {
  todos: ITodo[];
  filter: Filter;
  checking: (id: string) => void;
  deletion: (id: string) => void;
}

export const Todos: FC<TodosProp> = ({ todos, filter, checking, deletion }) => {
  const filteredTodo = todos.filter((todo) => {
    if (filter === Filter.active) {
      return !todo.complete;
    } else if (filter === Filter.completed) {
      return todo.complete;
    }
    return true;
  });
  return (
    <div className={styles['todos']}>
      {filteredTodo.length ? (
        filteredTodo.map((todo) => <Item key={todo.id} todo={todo} checking={checking} deletion={deletion} />)
      ) : (
        <p>You don&apos;t have todos... </p>
      )}
    </div>
  );
};
