import { FC, KeyboardEvent, useState } from 'react';

import styles from './join.module.css';

interface JoinProp {
  callback: (value: string) => void;
}

export const Join: FC<JoinProp> = ({ callback }) => {
  const [getValue, setValue] = useState('');
  const keyHandler = (e: KeyboardEvent<HTMLInputElement>): void => {
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
        onChange={(e): void => setValue(e.target.value)}
        onKeyDown={keyHandler}
      />
    </div>
  );
};
