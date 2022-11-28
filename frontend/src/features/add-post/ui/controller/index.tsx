import React from 'react';
import { UIButton, UIImageUploader } from '../../../../components';
import { ImageUpload } from '../../types';
import styles from './styles.module.scss';

interface PostControllerProps {
  setImage: (file: ImageUpload) => void;
  file: ImageUpload;
}

export const PostController: React.FC<PostControllerProps> = ({ setImage, file }) => {
  return (
    <div className={styles.root}>
      <h4>Publish</h4>
      <span>
        <b>Status:</b> Draft
      </span>
      <span>
        <b>Visibility:</b> Public
      </span>
      <UIImageUploader onChange={setImage} label="upload image" id="file" file={file} />
      <div className={styles.buttons}>
        <UIButton variants="outlined" size="sm">
          Save as a draft
        </UIButton>
        <UIButton size="sm">Update</UIButton>
      </div>
    </div>
  );
};
