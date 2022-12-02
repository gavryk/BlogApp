import clsx from 'clsx';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UIBurger, UIButton, UINavigate } from '../../../components';
import { setCategory } from '../../../redux/slices/posts/slice';
import { fetchLogout } from '../../../redux/slices/settings/ayncAuth';
import { settingsSelector } from '../../../redux/slices/settings/selectors';
import { setMenuToggle } from '../../../redux/slices/settings/slice';
import { MenuItem } from '../../../redux/slices/settings/types';
import { useAppDispatch } from '../../../redux/store';
import { useUpdateDimension } from './model';
import styles from './styles.module.scss';

interface NavigateProps {
  nav: MenuItem[];
}
type MenuClick = MouseEvent & {
  path: Node[];
};

export const HeaderHavigation: React.FC<NavigateProps> = ({ nav }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { menuOpened, auth } = useSelector(settingsSelector);
  const width = useUpdateDimension();

  const openMenu = () => {
    dispatch(setMenuToggle(!menuOpened));
  };

  const closeMenu = () => {
    menuOpened && dispatch(setMenuToggle(false));
  };

  const logOut = () => {
    closeMenu();
    dispatch(fetchLogout());
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
    // eslint-disable-next-line
  }, [dispatch, width]);

  const setCat = (category: string) => {
    dispatch(setCategory(category));
    navigate('/');
  };

  return (
    <div
      className={clsx(styles.headerNavigation, {
        [styles.menuActive]: menuOpened,
        [styles.mobile]: width < 1025,
      })}
      ref={navRef}>
      <UINavigate onClick={closeMenu}>
        {auth !== null ? (
          <>
            {nav.map((link, index) => (
              <span key={`${index}_${link.url}`} onClick={() => setCat(link.url)}>
                {link.title}
              </span>
            ))}
            <Link to="/write" onClick={closeMenu}>
              Add Post
            </Link>
            <Link to="/profile" onClick={closeMenu}>
              {auth.username}
            </Link>
            <span onClick={logOut}>Logout</span>
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
