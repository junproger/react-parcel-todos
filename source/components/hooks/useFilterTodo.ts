import { useState } from 'react';

import { ITodo } from '../../types/ITodo';
import { Filter } from '../../types/Filter';

export interface TodosLength {
  total: number;
  active: number;
  completed: number;
}

export interface FilterTodoReturn {
  getFilter: Filter;
  filterTodos: (arg: Filter) => void;
  filteredTodo: ITodo[];
  todosLength: TodosLength;
}

export const useFilterTodo = (todos: ITodo[]): FilterTodoReturn => {
  const [getFilter, setFilter] = useState<Filter>(Filter.total);
  const filterTodos = (arg: Filter): void => setFilter(arg);
  const filteredTodo = todos.filter((todo) => {
    if (getFilter === Filter.active) {
      return !todo.complete;
    } else if (getFilter === Filter.completed) {
      return todo.complete;
    }
    return true;
  });
  const todosLength: TodosLength = {
    total: todos.length,
    active: todos.filter((item) => item.complete === false).length,
    completed: todos.filter((item) => item.complete === true).length,
  };
  return {
    getFilter,
    filterTodos,
    filteredTodo,
    todosLength,
  };
};
