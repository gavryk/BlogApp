import React from 'react';
import { UIGrid, UIPostItem } from '../../components';
import { PostTypes } from '../../redux/slices/posts/types';
import styles from './styles.module.scss';

interface AsideProps {
  posts: PostTypes[];
}

export const Aside: React.FC<AsideProps> = ({ posts }) => {
  return (
    <div className={styles.aside}>
      {posts && (
        <>
          <h4>Other posts you may like</h4>
          <UIGrid columns={1} gridGap={5}>
            {posts.map((post) => (
              <UIPostItem
                id={post.id}
                title={post.title}
                titleVariant="h5"
                img={post.img}
                variant="column"
                imageBg={false}
                key={`${post.title}_${post.id}`}
              />
            ))}
          </UIGrid>
        </>
      )}
    </div>
  );
};
