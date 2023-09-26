import { FC, ReactNode } from 'react';

import * as styles from './button.module.css';

import { Filter } from '../../types/Filter';

export interface IButton {
  disabled: boolean;
  csstyles: string;
  arialabel: Filter | string;
  callback: () => void;
  children: ReactNode;
}

export const Button: FC<IButton> = (props: IButton) => {
  const { csstyles, disabled, arialabel, callback, children } = props;
  return (
    <button disabled={disabled} className={styles[csstyles]} aria-label={arialabel} onClick={callback}>
      {children}
    </button>
  );
};
