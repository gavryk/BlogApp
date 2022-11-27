import React from 'react';
import { Logo, UINavigate } from '../../components';
import LogoImg from '../../assets/img/logo-2.svg';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { settingsSelector } from '../../redux/slices/settings/selectors';

export const Footer: React.FC = () => {
  const { menu } = useSelector(settingsSelector);
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? '2022' : '2022 - ' + currentYear;

  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <Logo src={LogoImg} alt="logo" link="/" size="lg" />
        <UINavigate nav={menu}></UINavigate>
      </div>
      <div className={styles.copyright}>
        <span>
          Development By{' '}
          <a
            href="https://www.linkedin.com/in/oleg-gvozd-20a16116a/"
            target="_blank"
            rel="noreferrer">
            Oleg Gvozd{' '}
          </a>
          © {yearTxt}
        </span>
      </div>
    </footer>
  );
};
