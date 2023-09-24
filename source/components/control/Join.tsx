import { FC } from 'react';

import { useJoinTodo } from '../hooks/useJoinTodo';

import * as styles from './join.module.css';

export interface JoinProp {
  callback: (value: string) => void;
}

export const Join: FC<JoinProp> = ({ callback }) => {
  const { getValue, onChangeHandler, keyDownHandler } = useJoinTodo(callback);
  return (
    <div className={styles['join']}>
      <input
        autoFocus
        type="text"
        name="jointodo"
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
