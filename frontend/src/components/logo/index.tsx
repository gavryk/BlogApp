import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

interface LogoProps {
  src: string;
  alt: string;
  link: string;
  logoText?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = React.memo(({ src, alt, link, logoText, size = 'sm' }) => {
  return (
    <div className={clsx(styles.logo, styles[size])}>
      <Link to={link}>
        <img src={src} alt={alt} />
        <span className={styles.logoText}>{logoText}</span>
      </Link>
    </div>
  );
});
