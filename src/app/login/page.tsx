'use client';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './page.module.scss';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { LoginPageProps } from '../shared/types/PropTypes';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { IconButton } from '@mui/material';

type LoginInput = {
  username: string;
  password: string;
}

export default function LoginPage({ searchParams }: LoginPageProps) {
  const [inputs, setInputs] = useState<LoginInput>({ username: '', password: '' });
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({ ...values, [name]: value }));
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    await signIn('credentials', {
      username: inputs.username,
      password: inputs.password,
      callbackUrl: '/'
    });
  }

  return (
    <main className={styles.login}>
      <div className={styles.content}>
        <h3 className={styles.title}>Welcome!</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <span className={styles.input_container}>
            <input
              id='username'
              name='username'
              type='text'
              placeholder='Email'
              autoComplete='off'
              required
              value={inputs.username}
              onChange={handleChange}
              className={styles.form__input}
            />

            <IconButton className={styles.icon}>
              <EmailOutlinedIcon />
            </IconButton>
          </span>

          <span className={styles.input_container}>
            <input
              id='password'
              name='password'
              type={passwordVisible ? 'text' : 'password'}
              placeholder='Password'
              autoComplete='off'
              required
              value={inputs.password}
              onChange={handleChange}
              className={styles.form__input}
            />

            {passwordVisible ? (
              <IconButton
                className={styles.icon}
                onClick={() => setPasswordVisible(false)}
              >
                <VisibilityOffOutlinedIcon />
              </IconButton>
            ) : (
              <IconButton
                className={styles.icon}
                onClick={() => setPasswordVisible(true)}
              >
                <VisibilityOutlinedIcon />
              </IconButton>
            )}
          </span>

          <button type='submit' className={styles.login_button}>
            Log In
          </button>
        </form>

        {searchParams.error && (
          <span className={styles.error_message}>
            <p>Login failed! Please check your email and password.</p>
          </span>
        )}

        <span className={styles.register}>
          <p className={styles.register__text}>Dont have an account?</p>
          <Link
            href='signup'
            className={`${styles.register__text} ${styles.register__link}`}
          >
            Register
          </Link>
        </span>
      </div>
    </main>
  );
}
