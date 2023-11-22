import { KeyboardEvent, RefObject, useRef } from 'react';

import { ITodo } from '../../types/ITodo';

import { idkey } from '../../helpers/idkey';

export interface JoinTodoReturn {
  refInput: RefObject<HTMLInputElement>;
  keyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const useJoinTodo = (callback: (value: string) => void, alltodos: ITodo[]): JoinTodoReturn => {
  const refInput = useRef<HTMLInputElement>(null);
  const isUniqueTodo = (value: string): boolean => {
    if (alltodos.some((todo) => todo.id === idkey(value))) {
      return false;
    }
    return true;
  };
  const joinValidValue = (valid: boolean, value: string): void => {
    if (valid) {
      callback(value);
      refInput.current!.value = '';
    } else {
      alert("DON'T ADD SAME TODO! PLEASE, CHANGE THIS TODO!");
    }
  };
  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    const value = refInput.current!.value.trim();
    if (e.key === 'Enter' && value) {
      joinValidValue(isUniqueTodo(value), value);
    }
    if (!value) {
      refInput.current!.value = '';
    }
  };
  return {
    refInput,
    keyDownHandler,
  };
};
