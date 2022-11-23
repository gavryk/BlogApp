import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../../redux/slices/settings/types';
import { UIButton } from '../ui-button';
import styles from './styles.module.scss';

interface NavigateProps {
  nav: MenuItem[];
  currentUser: string;
  auth: boolean;
}

export const UINavigate: React.FC<NavigateProps> = ({ nav, currentUser, auth }) => {
  return (
    <nav className={styles.navigation}>
      {auth ? (
        <>
          {nav.map((menu) => (
            <Link to={menu.url}>{menu.title}</Link>
          ))}
          <Link to="/profile">{currentUser}</Link>
          <Link to="/logout">Logout</Link>
        </>
      ) : (
        <Link to="/login">
          <UIButton size="sm">Login</UIButton>
        </Link>
      )}
    </nav>
  );
};
