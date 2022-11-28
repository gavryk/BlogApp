import { motion } from 'framer-motion';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { UIButton, UIInput, UITypography } from '../../components';
import { fetchRegister } from '../../redux/slices/settings/ayncAuth';
import { settingsSelector } from '../../redux/slices/settings/selectors';
import { RegisterFormValues } from '../../redux/slices/settings/types';
import { useAppDispatch } from '../../redux/store';
import styles from './styles.module.scss';

export const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isLoaded } = useSelector(settingsSelector);
  const navigate = useNavigate();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>();
  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    dispatch(fetchRegister(data));
    reset({ username: '', email: '', password: '' });
    navigate('/login');
  };

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      className={styles.registerForm}>
      <UITypography variant="h2" fontWeight="bold" bottomSpace="sm" textAlign="center">
        Register
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
          type="email"
          id="emailField"
          label="Email"
          {...register('email', { required: 'Please enter your email.' })}
          error={errors.email && errors.email.message}
        />
        <UIInput
          type="password"
          id="passwordField"
          label="Password"
          {...register('password', { required: 'Please enter your password.' })}
          error={errors.password && errors.password.message}
        />
        <UIButton fluid type="submit" disabled={!isLoaded}>
          Register
        </UIButton>
        <span className={styles.notice}>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </motion.div>
  );
};
