import { FC, useState } from 'react';

import styles from './main.module.css';

import { Join } from '../control/Join';
import { Control } from '../control/Control';
import { Todos } from '../view/Todos';

import { ITodo } from '../../types/ITodo';
import { idkey } from '../../helpers/idkey';

export const Main: FC = () => {
  const [getTodos, setTodos] = useState<ITodo[]>([]);
  const addTodo = (value: string): void => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          id: idkey(value),
          todo: value,
          complete: false,
        },
      ];
    });
    // eslint-disable-next-line no-console
    return console.log(getTodos);
  };
  return (
    <main className={styles['main']}>
      <Join callback={addTodo} />
      <Todos todos={getTodos} />
      <Control />
    </main>
  );
};
