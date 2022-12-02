import React, { useRef } from 'react';
import { Logo } from '../../components';
import LogoImg from '../../assets/img/logo-2.svg';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { settingsSelector } from '../../redux/slices/settings/selectors';
import { HeaderHavigation } from './header-navigation';
import { useAppDispatch } from '../../redux/store';
import { setCategory } from '../../redux/slices/posts/slice';

export const Header: React.FC = () => {
  const containerRef = useRef(null);
  const dispatch = useAppDispatch();
  const { menu } = useSelector(settingsSelector);

  const setCat = (category: string) => {
    dispatch(setCategory(category));
  };

  return (
    <header className={styles.header} ref={containerRef}>
      <Logo src={LogoImg} alt="logo" link="/" size="lg" onClick={() => setCat('')} />
      <HeaderHavigation nav={menu} />
    </header>
  );
};
