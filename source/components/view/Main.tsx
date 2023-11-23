import { FC } from 'react';

import { useStateTodos } from '../hooks/useStateTodos';

import { TodosLength } from '../../types/ILength';

import * as styles from './main.module.css';

import { Join } from '../control/Join';
import { Control } from '../control/Control';

import { Todos } from '../view/Todos';

export const Main: FC = () => {
  const { getTodos, getFilter, joinTodo, checkTodo, filterTodo, deleteTodo, clearTodos } = useStateTodos();
  const todosLength: TodosLength = {
    total: getTodos.length,
    active: getTodos.filter((item) => item.complete === false).length,
    completed: getTodos.filter((item) => item.complete === true).length,
  };
  return (
    <main className={styles['main']}>
      <Join callback={joinTodo} alltodos={getTodos} />
      <Todos alltodos={getTodos} checking={checkTodo} deletion={deleteTodo} />
      <Control filter={getFilter} todosnum={todosLength} filtering={filterTodo} clearing={clearTodos} />
    </main>
  );
};
