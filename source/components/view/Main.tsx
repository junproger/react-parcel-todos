import { FC } from 'react';

import styles from './main.module.css';

import { Join } from '../control/Join';
import { Control } from '../control/Control';
import { Todos } from '../view/Todos';

export const Main: FC = () => {
  const addTodo = (value: string): void => {
    // eslint-disable-next-line no-console
    return console.log(value);
  };
  return (
    <main className={styles['main']}>
      <Join callback={addTodo} />
      <Todos />
      <Control />
    </main>
  );
};
