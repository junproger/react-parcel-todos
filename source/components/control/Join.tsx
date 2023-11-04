import { FC, memo } from 'react';

import { useJoinTodo } from '../hooks/useJoinTodo';

import * as styles from './join.module.css';

import { logging } from '../../utils/logging';

export interface JoinProp {
  callback: (value: string) => void;
}

const memoJoin: FC<JoinProp> = ({ callback }) => {
  const { refInput, keyDownHandler } = useJoinTodo(callback);
  logging('JOIN-TODO is rendered');
  return (
    <div className={styles['join']}>
      <input
        autoFocus
        type="text"
        ref={refInput}
        name="jointodo"
        defaultValue=""
        className={styles['input']}
        aria-label="What needs to be done?"
        placeholder="What needs to be done?"
        onKeyDown={keyDownHandler}
      />
    </div>
  );
};

export const Join = memo(memoJoin);
