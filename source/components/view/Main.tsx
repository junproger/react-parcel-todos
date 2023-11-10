import { FC } from 'react';

import { useStateTodos } from '../hooks/useStateTodos';
import { useFilterTodo } from '../hooks/useFilterTodo';

import * as styles from './main.module.css';

import { Join } from '../control/Join';
import { Control } from '../control/Control';

import { Todos } from '../view/Todos';

export const Main: FC = () => {
  const { getTodos, isUnique, joinTodo, checkTodo, deleteTodo, clearTodo } = useStateTodos();
  const { getFilter, filterTodos, filteredTodo, todosLength } = useFilterTodo(getTodos);
  return (
    <main className={styles['main']}>
      <Join callback={joinTodo} uniquely={isUnique} />
      <Todos filtered={filteredTodo} checking={checkTodo} deletion={deleteTodo} />
      <Control filter={getFilter} todosnum={todosLength} callback={filterTodos} clearing={clearTodo} />
    </main>
  );
};
