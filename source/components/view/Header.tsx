import { FC } from 'react';

import * as styles from './header.module.css';

export const Header: FC = () => {
  return (
    <header className={styles['header']}>
      <h1>todos</h1>
    </header>
  );
};
