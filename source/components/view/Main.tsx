import { FC } from 'react';

import styles from './main.module.css';

export const Main: FC = () => {
  return (
    <main className={styles['main']}>
      <p>What needs to be done?</p>
    </main>
  );
};
