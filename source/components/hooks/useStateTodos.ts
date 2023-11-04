import { useCallback, useState } from 'react';

import { ITodo } from '../../types/ITodo';

import { idkey } from '../../helpers/idkey';

export interface StateTodosReturn {
  getTodos: ITodo[];
  joinTodo: (value: string) => void;
  checkTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  clearTodo: () => void;
}

export const useStateTodos = (): StateTodosReturn => {
  const [getTodos, setTodos] = useState<ITodo[]>([]);
  const joinTodo = useCallback((value: string): void => {
    setTodos((prev) =>
      prev.concat({
        id: idkey(value),
        todo: value,
        complete: false,
      })
    );
  }, []);
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
  const deleteTodo = useCallback((id: string): void => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== id);
    });
  }, []);
  const clearTodo = (): void => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.complete !== true);
    });
  };
  return {
    getTodos,
    joinTodo,
    checkTodo,
    deleteTodo,
    clearTodo,
  };
};
