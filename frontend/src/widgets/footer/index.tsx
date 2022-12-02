import React from 'react';
import { Logo, UINavigate } from '../../components';
import LogoImg from '../../assets/img/logo-2.svg';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';
import { settingsSelector } from '../../redux/slices/settings/selectors';
import { useAppDispatch } from '../../redux/store';
import { useNavigate } from 'react-router-dom';
import { setCategory } from '../../redux/slices/posts/slice';

export const Footer: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { menu } = useSelector(settingsSelector);
  const currentYear = new Date().getFullYear();
  const yearTxt = currentYear === 2022 ? '2022' : '2022 - ' + currentYear;

  const setCat = (category: string) => {
    dispatch(setCategory(category));
    navigate('/');
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topFooter}>
        <Logo src={LogoImg} alt="logo" link="/" size="lg" />
        <UINavigate>
          {menu.map((link, index) => (
            <span key={`${index}_${link.url}`} onClick={() => setCat(link.url)}>
              {link.title}
            </span>
          ))}
        </UINavigate>
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
function setCat(url: string): void {
  throw new Error('Function not implemented.');
}
