import { ITodo } from '../types/ITodo';

export const calc = (todos: ITodo[], value: boolean): number => {
  return todos.filter((item) => item.complete === value).length;
};
