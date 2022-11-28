import React, { useState } from 'react';
import { UIButton, UIImageUploader } from '../../../../components';
import { ImageUpload } from '../../types';
import styles from './styles.module.scss';

export const PostController: React.FC = () => {
  const [file, setFile] = useState<ImageUpload>({
    file: null,
    imagePreviewUrl: '',
    fileLoaded: false,
  });

  const setImage = (image: File) => {
    let reader = new FileReader();

    reader.onloadend = () => {
      setFile({ file: image, imagePreviewUrl: URL.createObjectURL(image), fileLoaded: true });
    };

    reader.readAsDataURL(image);
  };

  const removeImage = () => {
    setFile({ file: null, imagePreviewUrl: '', fileLoaded: false });
  };

  return (
    <div className={styles.root}>
      <h4>Publish</h4>
      <span>
        <b>Status:</b> Draft
      </span>
      <span>
        <b>Visibility:</b> Public
      </span>
      <UIImageUploader
        onChange={setImage}
        label="upload image"
        id="file"
        file={file}
        removeImage={removeImage}
      />
      <div className={styles.buttons}>
        <UIButton variants="outlined" size="sm">
          Save as a draft
        </UIButton>
        <UIButton size="sm">Update</UIButton>
      </div>
    </div>
  );
};
