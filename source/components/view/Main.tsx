import { FC } from 'react';

import { useStateTodos } from '../hooks/useStateTodos';
import { useFilterTodo } from '../hooks/useFilterTodo';

import { TodosLength } from '../../types/ILength';

import * as styles from './main.module.css';

import { Join } from '../control/Join';
import { Control } from '../control/Control';

import { Todos } from '../view/Todos';

export const Main: FC = () => {
  const { getTodos, joinTodo, checkTodo, deleteTodo, clearTodos } = useStateTodos();
  const { getFilter, filterTodos, filteredTodo } = useFilterTodo(getTodos);
  const todosLength: TodosLength = {
    total: getTodos.length,
    active: getTodos.filter((item) => item.complete === false).length,
    completed: getTodos.filter((item) => item.complete === true).length,
  };
  return (
    <main className={styles['main']}>
      <Join callback={joinTodo} alltodos={getTodos} />
      <Todos filtered={filteredTodo} checking={checkTodo} deletion={deleteTodo} />
      <Control filter={getFilter} todosnum={todosLength} callback={filterTodos} clearing={clearTodos} />
    </main>
  );
};
