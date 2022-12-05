import axios from 'axios';
import moment from 'moment';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { fetchAddPost, fetchUpdatePost } from '../../redux/slices/posts/asyncPosts';
import { setLoading } from '../../redux/slices/settings/slice';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';
import { ImageUpload } from './types';
import { PostCategory, PostController, PostEditor } from './ui';

export const AddPost: React.FC = () => {
  const postState = useLocation().state;
  const dispatch = useAppDispatch();
  const [desc, setDescription] = useState(postState?.desc || '');
  const [title, setTitle] = useState(postState?.title || '');
  const [category, setCategory] = useState(postState?.category || 'art');
  const navigate = useNavigate();
  const [file, setFile] = useState<ImageUpload>({
    file: null,
    imagePreviewUrl: '',
    fileLoaded: false,
  });

  const setPostImage = (imageFile: ImageUpload) => {
    setFile(imageFile);
  };

  const uploadImage = async () => {
    if (file.file !== null) {
      try {
        const res = await axios.post(`/api/upload`, file.file);
        return res.data;
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleSendPost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const imgUrl = await uploadImage();
    dispatch(setLoading(false));
    try {
      postState
        ? dispatch(
            fetchUpdatePost({
              id: postState.id,
              title,
              desc,
              category,
              img: file.fileLoaded ? imgUrl.replace(' ', '_') : '',
            }),
          )
        : dispatch(
            fetchAddPost({
              title,
              desc,
              category,
              img: file.fileLoaded ? imgUrl.replace(' ', '_') : '',
              date: moment(Date.now()).format('YYYY-MM-DD HH:mm:ss'),
            }),
          );
      dispatch(setLoading(true));
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.addPostRoot}>
      <div className={styles.left}>
        <PostEditor
          title={title}
          setTitle={setTitle}
          description={desc}
          setDescription={setDescription}
        />
      </div>
      <div className={styles.right}>
        <PostController
          setImage={setPostImage}
          file={file}
          handleSendPost={handleSendPost}
          edit={postState}
        />
        <PostCategory setCategory={setCategory} category={category} />
      </div>
    </div>
  );
};
