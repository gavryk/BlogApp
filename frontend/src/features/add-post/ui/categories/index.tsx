import React from 'react';
import { UIInput } from '../../../../components';
import styles from './styles.module.scss';

export const PostCategory: React.FC = () => {
  return (
    <div className={styles.root}>
      <h4>Category</h4>
      <UIInput type="radio" name="cat" value="art" label="Art" id="art" />
      <UIInput type="radio" name="cat" value="science" label="Science" id="science" />
      <UIInput type="radio" name="cat" value="technology" label="Technology" id="technology" />
      <UIInput type="radio" name="cat" value="cinema" label="Cinema" id="cinema" />
      <UIInput type="radio" name="cat" value="food" label="Food" id="food" />
    </div>
  );
};
