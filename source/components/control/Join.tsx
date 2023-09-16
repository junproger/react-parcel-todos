import { FC, useState } from 'react';

import styles from './join.module.css';

export const Join: FC = () => {
  const [getValue, setValue] = useState('');
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
      />
    </div>
  );
};
