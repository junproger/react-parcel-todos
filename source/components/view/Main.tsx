import { FC } from 'react';

import styles from './main.module.css';
import { Join } from '../control/Join';
import { Todos } from '../view/Todos';
import { Control } from '../control/Control';

export const Main: FC = () => {
  return (
    <main className={styles['main']}>
      <Join />
      <Todos />
      <Control />
    </main>
  );
};
