import { FC } from 'react';

import * as styles from './item.module.css';

import { ITodo } from '../../types/ITodo';

export interface ItemProp {
  todo: ITodo;
  checking: (id: string) => void;
  deletion: (id: string) => void;
}

export const Item: FC<ItemProp> = ({ todo, checking, deletion }) => {
  return (
    <div className={styles['item']}>
      <label className={todo.complete ? styles['completed'] : styles['active']}>
        <input
          type="checkbox"
          name="complete"
          aria-label="todo complete"
          checked={todo.complete}
          onChange={(): void => checking(todo.id)}
        />
        {todo.todo}
      </label>
      {todo.complete ? (
        <button
          type="button"
          name="delete"
          aria-label="delete todo"
          disabled={!todo.complete}
          onClick={(): void => deletion(todo.id)}
        >
          ❌
        </button>
      ) : null}
    </div>
  );
};
