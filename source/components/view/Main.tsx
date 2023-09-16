import { FC } from 'react';

import styles from './main.module.css';
import { Join } from '../control/Join';

export const Main: FC = () => {
  return (
    <main className={styles['main']}>
      <Join />
    </main>
  );
};
