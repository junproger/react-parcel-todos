import { FC } from 'react';

import styles from './main.module.css';
import { Join } from '../control/Join';
import { Todos } from '../view/Todos';

export const Main: FC = () => {
  return (
    <main className={styles['main']}>
      <Join />
      <Todos />
    </main>
  );
};
