import React, { useState } from 'react';
import styles from './styles.module.scss';
import { ImageUpload } from './types';
import { PostCategory, PostController, PostEditor } from './ui';

export const AddPost: React.FC = () => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('art');
  const [file, setFile] = useState<ImageUpload>({
    file: null,
    imagePreviewUrl: '',
    fileLoaded: false,
  });

  const setPostImage = (imageFile: ImageUpload) => {
    setFile(imageFile);
  };

  return (
    <div className={styles.addPostRoot}>
      <div className={styles.left}>
        <PostEditor
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
      </div>
      <div className={styles.right}>
        <PostController setImage={setPostImage} file={file} />
        <PostCategory setCategory={setCategory} category={category} />
      </div>
    </div>
  );
};
