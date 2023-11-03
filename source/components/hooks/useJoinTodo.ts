import { KeyboardEvent, RefObject, useRef } from 'react';

export interface JoinTodoReturn {
  refInput: RefObject<HTMLInputElement>;
  keyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const useJoinTodo = (callback: (value: string) => void): JoinTodoReturn => {
  const refInput = useRef<HTMLInputElement>(null);
  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    const value = refInput.current!.value;
    if (e.key === 'Enter' && value.trim()) {
      callback(value.trim());
      refInput.current!.value = '';
    }
    if (!value.trim()) {
      refInput.current!.value = '';
    }
  };
  return {
    refInput,
    keyDownHandler,
  };
};
