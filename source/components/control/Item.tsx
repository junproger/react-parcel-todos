import { FC } from 'react';

import styles from './item.module.css';

import { ITodo } from '../../types/ITodo';

interface ItemProp {
  todo: ITodo;
}

export const Item: FC<ItemProp> = ({ todo }) => {
  return (
    <div className={styles['item']}>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.todo}
      </label>
    </div>
  );
};
