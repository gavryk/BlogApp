import React from 'react';
import { useSelector } from 'react-redux';
import { UIGrid } from '../components';
import { UIPostItem } from '../components/ui-post-item';
import { postsSelector } from '../redux/slices/posts/selectors';

const Home: React.FC = () => {
  const { posts } = useSelector(postsSelector);

  return (
    <div>
      {posts && (
        <UIGrid columns={1} gridGap={20}>
          {posts.map((post, index) => (
            <UIPostItem
              key={post.id}
              {...post}
              variant="row"
              direction={index % 2 !== 0 ? 'normal' : 'reverse'}
            />
          ))}
        </UIGrid>
      )}
    </div>
  );
};

export default Home;
