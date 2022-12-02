import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UIGrid, UIPostItem } from '../components';
import { fetchPosts } from '../redux/slices/posts/asyncPosts';
import { postsSelector } from '../redux/slices/posts/selectors';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, activeCat } = useSelector(postsSelector);

  useEffect(() => {
    dispatch(fetchPosts(activeCat));
  }, [activeCat, dispatch]);

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
