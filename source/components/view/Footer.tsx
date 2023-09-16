import { FC } from 'react';

import styles from './footer.module.css';

export const Footer: FC = () => {
  return (
    <footer className={styles['footer']}>
      <p>
        Created by{' '}
        <a href="https://github.com/junproger" target="new">
          Junproger
        </a>
      </p>
    </footer>
  );
};
