import { FC, useCallback } from 'react';

import { useStateTodos } from '../hooks/useStateTodos';

import { TodosLength } from '../../types/ILength';

import * as styles from './main.module.css';

import { Join } from '../control/Join';
import { Control } from '../control/Control';

import { Todos } from '../view/Todos';

import { idkey } from '../../helpers/idkey';

export const Main: FC = () => {
  const { getTodos, joinTodo, checkTodo, filterTodo, deleteTodo, clearTodos } = useStateTodos();
  const isUniqueTodo = useCallback(
    (value: string): boolean => {
      if (getTodos.todos.some((todo) => todo.id === idkey(value))) {
        return false;
      }
      return true;
    },
    [getTodos]
  );
  const todosLength: TodosLength = {
    total: getTodos.todos.length,
    active: getTodos.todos.filter((item) => item.complete === false).length,
    completed: getTodos.todos.filter((item) => item.complete === true).length,
  };
  return (
    <main className={styles['main']}>
      <Join callback={joinTodo} uniquely={isUniqueTodo} />
      <Todos alltodos={getTodos.todos} checking={checkTodo} deletion={deleteTodo} />
      <Control filter={getTodos.filter} todosnum={todosLength} filtering={filterTodo} clearing={clearTodos} />
    </main>
  );
};
