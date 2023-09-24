import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import * as styles from './join.module.css';

export interface JoinProp {
  callback: (value: string) => void;
}

export const Join: FC<JoinProp> = ({ callback }) => {
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
  return (
    <div className={styles['join']}>
      <input
        autoFocus
        type="text"
        value={getValue}
        className={styles['input']}
        aria-label="What needs to be done?"
        placeholder="What needs to be done?"
        onChange={onChangeHandler}
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};
