import { FC } from 'react';

import styles from './footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles['footer']}>
      <p>0 items left</p>
    </footer>
  );
};
