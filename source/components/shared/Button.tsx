import { FC, ReactNode } from 'react';

import * as styles from './button.module.css';

export interface IButton {
  disabled: boolean;
  csstyles: string;
  callback: () => void;
  children: ReactNode;
}

export const Button: FC<IButton> = (props: IButton) => {
  const { csstyles, disabled, callback, children } = props;
  return (
    <button disabled={disabled} className={styles[csstyles]} onClick={callback}>
      {children}
    </button>
  );
};
