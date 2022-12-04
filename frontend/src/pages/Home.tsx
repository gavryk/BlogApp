import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { UIGrid, UIPostItem, UITypography } from '../components';
import { fetchPosts } from '../redux/slices/posts/asyncPosts';
import { postsSelector } from '../redux/slices/posts/selectors';
import { settingsSelector } from '../redux/slices/settings/selectors';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const { posts, activeCat } = useSelector(postsSelector);
  const { isLoaded } = useSelector(settingsSelector);

  useEffect(() => {
    dispatch(fetchPosts(activeCat));
  }, [activeCat, dispatch]);

  return (
    <div>
      {posts.length > 0 ? (
        <UIGrid columns={1} gridGap={20}>
          {posts.map((post, index) => (
            <UIPostItem
              key={post.id}
              id={post.id}
              title={post.title}
              desc={post.desc}
              img={`../uploads/posts-images/${post.img}`}
              variant="row"
              direction={index % 2 !== 0 ? 'normal' : 'reverse'}
            />
          ))}
        </UIGrid>
      ) : (
        isLoaded && (
          <UITypography variant="h2" textAlign="center">
            Posts not found!
          </UITypography>
        )
      )}
    </div>
  );
};

export default Home;
