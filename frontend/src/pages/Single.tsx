import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UIIcon } from '../components';
import { postsSelector } from '../redux/slices/posts/selectors';
import styles from '../styles/pages/Single.module.scss';
import { Aside } from '../widgets';

const Single: React.FC = () => {
  const { posts } = useSelector(postsSelector);

  return (
    <div className={styles.singlePost}>
      <div className={styles.content}>
        <div className={styles.thumbnail}>
          <img
            src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="title"
          />
        </div>
        <div className={styles.authorWrap}>
          <div className={styles.author}>
            <div className={styles.photo}>
              <img
                src="https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?cs=srgb&dl=pexels-daniel-torobekov-4890259.jpg&fm=jpg"
                alt="John"
              />
            </div>
            <div className={styles.name}>
              <h4>John Doe</h4>
              <span>Posted 2 days ago</span>
            </div>
          </div>
          <div className={styles.editPost}>
            <Link to={`/write?edit=2`}>
              <UIIcon icon={faEdit} color="green" size="sm" />
            </Link>
            <UIIcon icon={faTrash} color="red" size="sm" />
          </div>
        </div>
        <div className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab praesentium iusto fugit
          consequatur, repellat cupiditate commodi reprehenderit molestiae. Amet quo ullam non
          officiis sed iure beatae? Quos, quis ipsam.0
        </div>
      </div>
      <div className="aside">
        <Aside posts={posts} />
      </div>
    </div>
  );
};

export default Single;
