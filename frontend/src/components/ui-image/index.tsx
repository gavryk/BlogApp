import clsx from 'clsx';
import React from 'react';
import styles from './styles.module.scss';

type ImageProps = {
  src: string;
  alt: string;
  reverse?: boolean;
  imageBg?: boolean;
};

export const UIImage: React.FC<ImageProps> = ({ src, alt, reverse, imageBg }) => {
  return (
    <div className={clsx(styles.image, { [styles.reverse]: reverse, [styles.imageBg]: imageBg })}>
      <img src={src} alt={alt} />
    </div>
  );
};
