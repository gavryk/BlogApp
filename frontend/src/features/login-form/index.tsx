import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { UIInput, UITypography } from '../../components';
import styles from './styles.module.scss';

type FormValues = {
  username: string;
  password: string;
};

export const LoginForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
  return (
    <div className={styles.loginForm}>
      <UITypography variant="h1" fontWeight="bold" bottomSpace="sm">
        Login
      </UITypography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UIInput type="text" id="userNameField" label="User Name" {...register('username')} />
        <UIInput type="password" id="passwordField" label="Password" {...register('password')} />
        <input type="submit" />
      </form>
    </div>
  );
};
