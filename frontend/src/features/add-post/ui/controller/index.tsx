import React from 'react';
import { UIButton, UIImageUploader } from '../../../../components';
import { ImageUpload } from '../../types';
import styles from './styles.module.scss';

interface PostControllerProps {
  setImage: (file: ImageUpload) => void;
  handleSendPost: (e: React.MouseEvent<HTMLButtonElement>) => void;
  file: ImageUpload;
  edit: boolean;
}

export const PostController: React.FC<PostControllerProps> = ({
  setImage,
  file,
  handleSendPost,
  edit,
}) => {
  return (
    <div className={styles.root}>
      <h4>Publish</h4>
      <span>
        <b>Status:</b> {edit ? 'Publish' : 'Draft'}
      </span>
      <span>
        <b>Visibility:</b> Public
      </span>
      <UIImageUploader onChange={setImage} label="upload image" id="file" file={file} />
      <div className={styles.buttons}>
        <UIButton variants="outlined" size="sm">
          Save as a draft
        </UIButton>
        <UIButton onClick={handleSendPost} size="sm">
          {!edit ? 'Publish' : 'Update'}
        </UIButton>
      </div>
    </div>
  );
};
