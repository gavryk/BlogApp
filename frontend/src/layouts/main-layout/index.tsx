import clsx from 'clsx';
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer, Header } from '../../widgets';
import styles from './styles.module.scss';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();
  const path = pathname.replace('/', '');

  return (
    <>
      <div className={clsx(styles.layout, styles[path])}>
        <div className="container">
          <div className={styles.layoutWrapper}>
            <Header />
            <div className={styles.content}>
              <Outlet />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};
