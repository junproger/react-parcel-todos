import { FC } from 'react';

import styles from './todos.module.css';

export const Todos: FC = () => {
  return (
    <div className={styles['todos']}>
      <p>No todos jet... </p>
    </div>
  );
};
