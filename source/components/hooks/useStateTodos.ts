import { useCallback, useState } from 'react';

import { ITodo } from '../../types/ITodo';
import { Filter } from '../../types/Filter';

import { idkey } from '../../helpers/idkey';

export interface StateTodosReturn {
  getTodos: ITodo[];
  getFilter: Filter;
  joinTodo: (value: string) => void;
  checkTodo: (id: string) => void;
  filterTodo: (filter: Filter) => void;
  deleteTodo: (id: string) => void;
  clearTodos: () => void;
}

export const useStateTodos = (): StateTodosReturn => {
  const [getTodos, setTodos] = useState<ITodo[]>([]);
  const [getFilter, setFilter] = useState<Filter>(Filter.total);
  const joinTodo = useCallback(
    (value: string): void => {
      setTodos((prev) =>
        prev.concat({
          id: idkey(value),
          todo: value,
          complete: false,
          display: getFilter !== Filter.completed,
        })
      );
    },
    [getFilter]
  );
  const checkTodo = useCallback((id: string): void => {
    setTodos((prev) =>
      prev.map((todo) => {
        if (todo.id === id) {
          todo.complete = !todo.complete;
        }
        return todo;
      })
    );
  }, []);
  const filterTodo = useCallback((filter: Filter): void => {
    setFilter(filter);
    setTodos((prev) =>
      prev.map((todo) => {
        if (filter === Filter.active) {
          todo.display = !todo.complete;
        } else if (filter === Filter.completed) {
          todo.display = todo.complete;
        } else {
          todo.display = true;
        }
        return todo;
      })
    );
  }, []);
  const deleteTodo = useCallback((id: string): void => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  }, []);
  const clearTodos = useCallback((): void => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.complete !== true);
    });
  }, []);
  return {
    getTodos,
    getFilter,
    joinTodo,
    checkTodo,
    filterTodo,
    deleteTodo,
    clearTodos,
  };
};
