import React from 'react';
import { UIInput } from '../../../../components';
import styles from './styles.module.scss';

const categories = [
  { value: 'art', label: 'Art' },
  { value: 'science', label: 'Science' },
  { value: 'technology', label: 'Technology' },
  { value: 'cinema', label: 'Cinema' },
  { value: 'food', label: 'Food' },
];

interface PostCategoryProps {
  setCategory: (cat: string) => void;
  category: string;
}

export const PostCategory: React.FC<PostCategoryProps> = ({ setCategory, category }) => {
  const setCat = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  };

  return (
    <div className={styles.root}>
      <h4>Category</h4>
      {categories.map((cat) => (
        <UIInput
          key={cat.value}
          type="radio"
          name="cat"
          value={cat.value}
          label={cat.label}
          id={cat.value}
          onChange={setCat}
          checked={category === cat.value}
        />
      ))}
    </div>
  );
};
