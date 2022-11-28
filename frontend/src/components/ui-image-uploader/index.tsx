import { faRemove } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import React from 'react';
import { ImageUpload } from '../../features/add-post/types';
import { UIIcon } from '../ui-icon';
import { UIImage } from '../ui-image';
import { UILabel } from '../ui-label';
import styles from './styles.module.scss';

interface InputUploadProps {
  onChange: (files: any) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  id?: string;
  name?: string;
  error?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
  customClass?: string;
  label?: string;
  accept?: string;
  multiple?: boolean;
  file?: ImageUpload;
  removeImage?: () => void;
}

export const UIImageUploader = React.forwardRef<HTMLInputElement, InputUploadProps>(
  (
    {
      onChange,
      placeholder,
      id,
      name,
      onBlur,
      error,
      onClick,
      customClass,
      label,
      accept = 'image/*',
      multiple,
      file,
      removeImage,
    },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        onChange(e.target.files[0]);
      }
    };

    return (
      <div className={styles.uploadWrapper}>
        {!file?.fileLoaded ? (
          <div className={styles.shUploadInput}>
            {label && (
              <UILabel htmlFor={id ? id : ''}>
                <span>{label}</span>
              </UILabel>
            )}
            <input
              id={id}
              onBlur={onBlur}
              name={name}
              type="file"
              onChange={handleChange}
              className={clsx(styles.root, customClass, { [styles.error]: error })}
              ref={ref}
              placeholder={placeholder}
              onClick={onClick}
              accept={accept}
              multiple={multiple}
              value=""
            />
            {error && <span className={styles.errorTxt}>{error}</span>}
          </div>
        ) : (
          <>
            <UIImage src={file?.imagePreviewUrl as string} alt={file?.file?.name as string} />
            <div className={styles.removeBtn} onClick={removeImage}>
              <UIIcon icon={faRemove} color="red" size="2xs" />
            </div>
          </>
        )}
      </div>
    );
  },
);
