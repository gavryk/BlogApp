import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UIIcon } from '../components';
import { postsSelector } from '../redux/slices/posts/selectors';
import { PostTypes } from '../redux/slices/posts/types';
import { settingsSelector } from '../redux/slices/settings/selectors';
import { setLoading } from '../redux/slices/settings/slice';
import styles from '../styles/pages/Single.module.scss';
import { Aside } from '../widgets';

const Single: React.FC = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector(settingsSelector);
  const { posts } = useSelector(postsSelector);
  const [post, setPost] = useState<PostTypes>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setLoading(false));
    async function fetchSinglePost() {
      try {
        const res = await axios.get(`/api/posts/${id}`);
        setPost(res.data);
        dispatch(setLoading(true));
        console.log(res.data);
      } catch (err) {
        alert('Oops, something wrong...');
      }
    }
    fetchSinglePost();
  }, [id, dispatch, navigate]);

  return (
    <div className={styles.singlePost}>
      <div className={styles.content}>
        <div className={styles.thumbnail}>
          <img src={post?.img} alt={post?.title} />
        </div>
        <div className={styles.authorWrap}>
          <div className={styles.author}>
            <div className={styles.photo}>
              {post?.userImage ? (
                <img src={post?.userImage} alt={post?.username} />
              ) : (
                <span className={styles.avatarHolder}>{post?.username?.substring(0, 2)}</span>
              )}
            </div>
            <div className={styles.name}>
              <h4>{post?.username}</h4>
              <span>Posted 2 days ago</span>
            </div>
          </div>
          {auth !== null && post?.username === auth?.username && (
            <div className={styles.editPost}>
              <Link to={`/write?edit=2`}>
                <UIIcon icon={faEdit} color="green" size="sm" />
              </Link>
              <UIIcon icon={faTrash} color="red" size="sm" />
            </div>
          )}
        </div>
        <div className="text">{post?.desc}</div>
      </div>
      <div className="aside">
        <Aside posts={posts} />
      </div>
    </div>
  );
};

export default Single;
