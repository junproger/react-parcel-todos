import { FC, memo } from 'react';

import * as styles from './item.module.css';

import { ITodo } from '../../types/ITodo';

import { logging } from '../../utils/logging';

export interface ItemProp extends ITodo {
  checking: (id: string) => void;
  deletion: (id: string) => void;
}

const memoItem: FC<ItemProp> = ({ id, todo, complete, checking, deletion }) => {
  logging('TODO-ITEM is rendered', id);
  return (
    <div className={styles['item']}>
      <label className={complete ? styles['completed'] : styles['active']}>
        <input
          type="checkbox"
          name="complete"
          aria-label="todo complete"
          checked={complete}
          onChange={(): void => checking(id)}
        />
        {todo}
      </label>
      {complete ? (
        <button
          type="button"
          name="delete"
          aria-label="delete todo"
          disabled={!complete}
          onClick={(): void => deletion(id)}
        >
          ❌
        </button>
      ) : null}
    </div>
  );
};

export const Item = memo<ItemProp>(memoItem);
