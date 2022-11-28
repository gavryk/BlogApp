import axios from 'axios';
import { motion } from 'framer-motion';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { UIButton, UIInput, UITypography } from '../../components';
import styles from './styles.module.scss';

type FormValues = {
  username: string;
  email: string;
  password: string;
};

export const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      await axios.post('/api/auth/register', data);
    } catch (err) {
      console.log(data);
    }
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
        <UIButton fluid type="submit">
          Register
        </UIButton>
        <span className={styles.notice}>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </motion.div>
  );
};
