import { faPlusCircle, faRemove } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React from 'react';
import { ImageUpload } from '../../features/add-post/types';
import { UIIcon } from '../ui-icon';
import { UIImage } from '../ui-image';
import { UILabel } from '../ui-label';
import styles from './styles.module.scss';

interface InputUploadProps {
  onChange: (file: ImageUpload) => void;
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
  file: ImageUpload;
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
    },
    ref,
  ) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        let reader = new FileReader();
        let image = e.target.files[0];
        reader.onloadend = () => {
          onChange({ file: image, imagePreviewUrl: URL.createObjectURL(image), fileLoaded: true });
        };

        reader.readAsDataURL(image);
      }
    };

    const removeImage = () => {
      onChange({ file: null, imagePreviewUrl: '', fileLoaded: false });
    };

    return (
      <div className={styles.uploadWrapper}>
        {!file?.fileLoaded ? (
          <div className={styles.shUploadInput}>
            {label && (
              <UILabel htmlFor={id ? id : ''}>
                <FontAwesomeIcon icon={faPlusCircle} color="#fff" size="2xl" />
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
