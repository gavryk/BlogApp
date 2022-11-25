import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UIBurger, UIButton, UINavigate } from '../../../components';
import { settingsSelector } from '../../../redux/slices/settings/selectors';
import { setMenuToggle } from '../../../redux/slices/settings/slice';
import { MenuItem } from '../../../redux/slices/settings/types';
import { useUpdateDimension } from './model';
import styles from './styles.module.scss';

interface NavigateProps {
  nav: MenuItem[];
  currentUser: string;
  auth: boolean;
}
type MenuClick = MouseEvent & {
  path: Node[];
};

export const HeaderHavigation: React.FC<NavigateProps> = ({ nav, currentUser, auth }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { menuOpened } = useSelector(settingsSelector);
  const width = useUpdateDimension();

  const openMenu = () => {
    dispatch(setMenuToggle(!menuOpened));
  };

  const closeMenu = () => {
    menuOpened && dispatch(setMenuToggle(false));
  };

  useEffect(() => {
    const clickOffMenuSlide = (event: MouseEvent) => {
      const _event = event as MenuClick;
      if (navRef.current && !_event.path.includes(navRef.current)) {
        menuOpened && dispatch(setMenuToggle(false));
      }
    };

    document.body.addEventListener('click', clickOffMenuSlide);

    return () => document.body.removeEventListener('click', clickOffMenuSlide);
  }, [menuOpened, dispatch]);

  useEffect(() => {
    if (width >= 1024) {
      closeMenu();
    }
  }, [dispatch, width]);

  return (
    <div
      className={clsx(styles.headerNavigation, {
        [styles.menuActive]: menuOpened,
        [styles.mobile]: width < 1025,
      })}
      ref={navRef}>
      <UINavigate nav={nav} onClick={closeMenu}>
        {auth ? (
          <>
            <Link to="/write" onClick={closeMenu}>
              Add Post
            </Link>
            <Link to="/profile" onClick={closeMenu}>
              {currentUser}
            </Link>
            <Link to="/logout" onClick={closeMenu}>
              Logout
            </Link>
          </>
        ) : (
          <Link to="/login" onClick={closeMenu}>
            {width < 1024 ? <span>Login</span> : <UIButton size="sm">Login</UIButton>}
          </Link>
        )}
      </UINavigate>
      {width < 1024 && <UIBurger toggle={openMenu} isActive={menuOpened} />}
    </div>
  );
};
