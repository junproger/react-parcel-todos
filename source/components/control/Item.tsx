import { FC } from 'react';

import styles from './item.module.css';

import { ITodo } from '../../types/ITodo';

interface ItemProp {
  todo: ITodo;
  checking: (id: string) => void;
}

export const Item: FC<ItemProp> = ({ todo, checking }) => {
  return (
    <div className={styles['item']}>
      <label className={todo.complete ? styles['completed'] : styles['active']}>
        <input type="checkbox" checked={todo.complete} onChange={(): void => checking(todo.id)} />
        {todo.todo}
      </label>
      {todo.complete ? <span>❌</span> : null}
    </div>
  );
};
