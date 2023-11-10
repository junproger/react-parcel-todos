import { KeyboardEvent, RefObject, useRef } from 'react';

export interface JoinTodoReturn {
  refInput: RefObject<HTMLInputElement>;
  keyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const useJoinTodo = (
  callback: (value: string) => void,
  uniquely: (value: string) => boolean
): JoinTodoReturn => {
  const refInput = useRef<HTMLInputElement>(null);
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
      joinValidValue(uniquely(value), value);
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
