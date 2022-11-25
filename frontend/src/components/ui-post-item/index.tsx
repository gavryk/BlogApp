import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { PostTypes } from '../../redux/slices/posts/types';
import { UIButton } from '../ui-button';
import { UITypography } from '../ui-typography';
import styles from './styles.module.scss';

type PostProp = PostTypes & {
  variant?: 'row' | 'column';
  titleVariant?: 'h1' | 'h2' | 'h3' | 'h3' | 'h4' | 'h5' | 'h6';
  direction?: 'normal' | 'reverse';
};

export const UIPostItem: React.FC<PostProp> = ({
  id,
  title,
  titleVariant = 'h3',
  desc,
  img,
  variant = 'row',
  direction = 'normal',
}) => {
  return (
    <div className={clsx(styles.postItem, styles[variant], styles[direction])}>
      <div className={styles.postImage}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.postContent}>
        <UITypography variant={titleVariant} fontWeight="bold">
          {title}
        </UITypography>
        {desc && <UITypography variant="body">{desc}</UITypography>}
        <Link to={`/post/${id}`}>
          <UIButton>Read More</UIButton>
        </Link>
      </div>
    </div>
  );
};
