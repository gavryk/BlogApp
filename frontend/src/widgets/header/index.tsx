import React from 'react';
import { Logo, UINavigate } from '../../components';
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
      <UINavigate nav={menu} currentUser="John Test" auth={auth} />
    </header>
  );
};
