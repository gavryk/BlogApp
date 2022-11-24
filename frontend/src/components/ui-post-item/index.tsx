import React from 'react';
import { Link } from 'react-router-dom';
import { PostTypes } from '../../redux/slices/posts/types';
import { UIButton } from '../ui-button';
import styles from './styles.module.scss';

export const UIPostItem: React.FC<PostTypes> = ({ id, title, desc, img }) => {
  return (
    <div className={styles.postItem}>
      <div className={styles.postImage}>
        <img src={img} alt={title} />
      </div>
      <div className={styles.content}>
        <h2>{title}</h2>
        <p>{desc}</p>
        <Link to={`/post/${id}`}>
          <UIButton>Read More</UIButton>
        </Link>
      </div>
    </div>
  );
};
