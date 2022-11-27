import React, { useEffect, useState } from 'react';
import { UIButton, UIImageUploader } from '../../../../components';
import styles from './styles.module.scss';

export const PostController: React.FC = () => {
  const [file, setFile] = useState();

  const setImage = (image: any) => {
    setFile(image);
  };

  useEffect(() => {
    console.log(file);
  }, [file]);

  return (
    <div className={styles.root}>
      <h4>Publish</h4>
      <span>
        <b>Status:</b> Draft
      </span>
      <span>
        <b>Visibility:</b> Public
      </span>
      <div className={styles.image}>
        <UIImageUploader onChange={setImage} label="upload image" id="file" />
      </div>
      <div className={styles.buttons}>
        <UIButton variants="outlined" size="sm">
          Save as a draft
        </UIButton>
        <UIButton size="sm">Update</UIButton>
      </div>
    </div>
  );
};
