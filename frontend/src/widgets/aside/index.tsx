import React from 'react';
import { UIGrid, UIPostItem, UITypography } from '../../components';
import { PostTypes } from '../../redux/slices/posts/types';
import styles from './styles.module.scss';

interface AsideProps {
  posts: PostTypes[];
  category?: string;
}

export const Aside: React.FC<AsideProps> = ({ posts, category }) => {
  return (
    <div className={styles.aside}>
      {posts && (
        <UIGrid columns={1} gridGap={5}>
          {posts.map(
            (post, index) =>
              post.category === category && (
                <>
                  <UITypography variant="h4">Other posts you may like</UITypography>
                  {index <= 4 && (
                    <UIPostItem
                      id={post.id}
                      title={post.title}
                      titleVariant="h5"
                      img={post.img}
                      variant="column"
                      imageBg={false}
                      key={`${post.title}_${post.id}`}
                    />
                  )}
                </>
              ),
          )}
        </UIGrid>
      )}
    </div>
  );
};
