import React from 'react';
import styles from './styles.module.scss';
import { PostCategory, PostController, PostEditor } from './ui';

export const AddPost: React.FC = () => {
  return (
    <div className={styles.addPostRoot}>
      <div className={styles.left}>
        <PostEditor />
      </div>
      <div className={styles.right}>
        <PostController />
        <PostCategory />
      </div>
    </div>
  );
};
