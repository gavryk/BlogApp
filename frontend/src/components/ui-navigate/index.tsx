import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../redux/slices/settings/types';
import styles from './styles.module.scss';

interface NavigateProps {
  nav?: MenuItem[];
  children?: React.ReactNode;
  onClick?: () => void;
}

export const UINavigate: React.FC<NavigateProps> = ({ nav, children, onClick }) => {
  return (
    <nav className={styles.navigation}>
      {nav?.map((menu) => (
        <Link to={menu.url} key={menu.title} onClick={onClick}>
          {menu.title}
        </Link>
      ))}
      {children}
    </nav>
  );
};
