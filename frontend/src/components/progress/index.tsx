import clsx from 'clsx';
import styles from './styles.module.scss';

export const Progress = () => {
  return (
    <div className={clsx(styles.progressBar)}>
      <span className={styles.progress}></span>
    </div>
  );
};
