import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { UIInput } from '../../../../components';
import styles from './styles.module.scss';

interface EditorProps {
  title: string;
  description: string;
  setTitle: (e: string) => void;
  setDescription: (e: string) => void;
}

export const PostEditor: React.FC<EditorProps> = ({
  title,
  description,
  setTitle,
  setDescription,
}) => {
  return (
    <div className={styles.root}>
      <UIInput
        type="Text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.editorContainer}>
        <ReactQuill
          className={styles.editor}
          theme="snow"
          value={description}
          onChange={setDescription}
        />
      </div>
    </div>
  );
};
