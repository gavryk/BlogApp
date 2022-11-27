import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { UIInput } from '../../../../components';
import styles from './styles.module.scss';

export const PostEditor: React.FC = () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.root}>
      <UIInput type="Text" placeholder="Title" />
      <div className={styles.editorContainer}>
        <ReactQuill className={styles.editor} theme="snow" value={value} onChange={setValue} />
      </div>
    </div>
  );
};
