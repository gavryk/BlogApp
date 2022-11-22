import React from 'react';
import { Logo } from '../../components';
import LogoImg from '../../assets/img/logo-2.svg';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { settingsSelector } from '../../redux/slices/settings/selectors';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const { menu, auth } = useSelector(settingsSelector);

  return (
    <header className={styles.header}>
      <Logo src={LogoImg} alt="logo" link="/" size="lg" />
      {auth ? (
        <nav className={styles.navigation}>
          {menu.map((menu) => (
            <Link to={menu.url}>{menu.title}</Link>
          ))}
        </nav>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </header>
  );
};
