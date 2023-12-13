import { useCallback, useState } from 'react';

import { ITodo } from '../../types/ITodo';
import { Filter } from '../../types/Filter';

import { idkey } from '../../helpers/idkey';

export interface StateTodosReturn {
  getTodos: { filter: Filter; todos: ITodo[] };
  joinTodo: (value: string) => void;
  checkTodo: (id: string) => void;
  filterTodo: (filter: Filter) => void;
  deleteTodo: (id: string) => void;
  clearTodos: () => void;
}

export const initialState = { filter: Filter.total, todos: [] };

export const useStateTodos = (): StateTodosReturn => {
  const [getTodos, setTodos] = useState<{ filter: Filter; todos: ITodo[] }>(initialState);
  const joinTodo = useCallback((value: string): void => {
    setTodos((prev) => {
      return {
        filter: prev.filter,
        todos: prev.todos.concat({
          id: idkey(value),
          todo: value,
          complete: false,
          display: prev.filter !== Filter.completed,
        }),
      };
    });
  }, []);
  const checkTodo = useCallback((id: string): void => {
    setTodos((prev) => {
      return {
        filter: prev.filter,
        todos: prev.todos.map((todo) => {
          if (todo.id === id) {
            todo.complete = !todo.complete;
          }
          return todo;
        }),
      };
    });
  }, []);
  const filterTodo = useCallback((filter: Filter): void => {
    setTodos((prev) => {
      return {
        filter: filter,
        todos: prev.todos.map((todo) => {
          if (filter === Filter.active) {
            todo.display = !todo.complete;
          } else if (filter === Filter.completed) {
            todo.display = todo.complete;
          } else {
            todo.display = true;
          }
          return todo;
        }),
      };
    });
  }, []);
  const deleteTodo = useCallback((id: string): void => {
    setTodos((prev) => {
      return {
        filter: prev.filter,
        todos: prev.todos.filter((todo) => todo.id !== id),
      };
    });
  }, []);
  const clearTodos = useCallback((): void => {
    setTodos((prev) => {
      return {
        filter: prev.filter,
        todos: prev.todos.filter((todo) => todo.complete !== true),
      };
    });
  }, []);
  return {
    getTodos,
    joinTodo,
    checkTodo,
    filterTodo,
    deleteTodo,
    clearTodos,
  };
};
