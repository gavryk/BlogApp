import { IconProp, SizeProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';
import type * as CSS from 'csstype';

type IconProps = {
  icon: IconProp;
  color?: 'red' | 'green' | 'black';
  size?: SizeProp;
  onClick?: () => void;
  pointer?: boolean;
};

export const UIIcon: React.FC<IconProps> = ({ icon, color = 'green', onClick, size, pointer }) => {
  const s: CSS.Properties = {
    cursor: `${pointer && 'pointer'}`,
  };
  return (
    <div
      style={s}
      onClick={onClick}
      className={clsx(styles.icon, {
        [styles.red]: color === 'red',
        [styles.green]: color === 'green',
        [styles.black]: color === 'black',
      })}>
      <FontAwesomeIcon icon={icon} color="#fff" size={size} />
    </div>
  );
};
