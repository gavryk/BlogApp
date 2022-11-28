import clsx from 'clsx';
import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useLocation } from 'react-router-dom';
import { Progress } from '../../components';
import { settingsSelector } from '../../redux/slices/settings/selectors';
import { Footer, Header } from '../../widgets';
import styles from './styles.module.scss';

export const MainLayout: React.FC = () => {
  const { menuOpened, isLoaded } = useSelector(settingsSelector);
  const { pathname } = useLocation();
  const path = pathname.replace('/', '');

  return (
    <>
      <div className={clsx(styles.layout, styles[path], { [styles.menuOpened]: menuOpened })}>
        {!isLoaded && <Progress />}
        <div className="container">
          <div className={styles.layoutWrapper}>
            {pathname !== '/login' && pathname !== '/register' && <Header />}
            <div className={styles.content}>
              <Outlet />
            </div>
            {pathname !== '/login' && pathname !== '/register' && <Footer />}
          </div>
        </div>
      </div>
    </>
  );
};
