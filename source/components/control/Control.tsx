import { FC } from 'react';

import styles from './control.module.css';

export const Control: FC = () => {
  return (
    <div className={styles['control']}>
      <p>0 items left</p>
    </div>
  );
};
