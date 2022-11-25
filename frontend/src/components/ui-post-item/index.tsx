import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';
import { PostTypes } from '../../redux/slices/posts/types';
import { UIButton } from '../ui-button';
import styles from './styles.module.scss';

type PostProp = PostTypes & {
  variant?: 'row' | 'column';
  direction?: 'normal' | 'reverse';
};

export const UIPostItem: React.FC<PostProp> = ({
  id,
  title,
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
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link to={`/post/${id}`}>
          <UIButton>Read More</UIButton>
        </Link>
      </div>
    </div>
  );
};
