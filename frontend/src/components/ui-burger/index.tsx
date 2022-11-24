import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

interface BurgerProps {
  toggle: () => void;
  isActive: boolean;
}

export const UIBurger: React.FC<BurgerProps> = ({ toggle, isActive }) => {
  return (
    <button onClick={toggle} className={clsx(styles.burger, { [styles.opened]: isActive })}>
      <div className={styles.burgerBar}></div>
      <div className={styles.burgerBar}></div>
      <div className={styles.burgerBar}></div>
    </button>
  );
};
