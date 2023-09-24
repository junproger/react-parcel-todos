import { ChangeEvent, KeyboardEvent, useState } from 'react';

export interface JoinTodoReturn {
  getValue: string;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  keyDownHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
}

export const useJoinTodo = (callback: (value: string) => void): JoinTodoReturn => {
  const [getValue, setValue] = useState('');
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (value.trim()) {
      setValue(value);
    }
    if (!value.trim()) {
      setValue('');
    }
  };
  const keyDownHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter' && getValue.trim()) {
      callback(getValue.trim());
      setValue('');
    }
    if (!getValue.trim()) {
      setValue('');
    }
  };
  return {
    getValue,
    onChangeHandler,
    keyDownHandler,
  };
};
