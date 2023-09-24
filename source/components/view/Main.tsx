import { FC, useState } from 'react';

import { useFilterTodo } from '../hooks/useFilterTodo';

import * as styles from './main.module.css';

import { Join } from '../control/Join';
import { Control } from '../control/Control';
import { Todos } from '../view/Todos';

import { ITodo } from '../../types/ITodo';
import { idkey } from '../../helpers/idkey';

export const Main: FC = () => {
  const [getTodos, setTodos] = useState<ITodo[]>([]);
  const { getFilter, filterTodos, filteredTodo } = useFilterTodo(getTodos);
  const addTodo = (value: string): void => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: idkey(value),
          todo: value,
          complete: false,
        },
      ];
    });
  };
  const checkTodo = (id: string): void => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }
        return {
          ...todo,
          complete: !todo.complete,
        };
      });
    });
  };
  const delTodo = (id: string): void => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  };
  const clearTodo = (): void => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.complete !== true);
    });
  };
  return (
    <main className={styles['main']}>
      <Join callback={addTodo} />
      <Todos filtered={filteredTodo} checking={checkTodo} deletion={delTodo} />
      <Control todos={getTodos} filter={getFilter} callback={filterTodos} clearing={clearTodo} />
    </main>
  );
};
