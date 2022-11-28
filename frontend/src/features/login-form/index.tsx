import { motion } from 'framer-motion';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UIButton, UIInput, UITypography } from '../../components';
import { fetchLogin } from '../../redux/slices/settings/ayncAuth';
import { settingsSelector } from '../../redux/slices/settings/selectors';
import { LoginFormValues } from '../../redux/slices/settings/types';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';

export const LoginForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoaded, auth } = useSelector(settingsSelector);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>();
  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    dispatch(fetchLogin(data));
    if (auth) {
      reset({ username: '', password: '' });
      navigate('/');
    }
  };
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.loginForm}>
      <UITypography variant="h2" fontWeight="bold" bottomSpace="sm" textAlign="center">
        Login
      </UITypography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <UIInput
          type="text"
          id="userNameField"
          label="User Name"
          {...register('username', { required: 'Please enter your username.' })}
          error={errors.username && errors.username.message}
        />
        <UIInput
          type="password"
          id="passwordField"
          label="Password"
          {...register('password', { required: 'Please enter your password.' })}
          error={errors.password && errors.password.message}
        />
        <UIButton fluid type="submit">
          Login
        </UIButton>
        <span className={styles.notice}>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </motion.div>
  );
};
