'use client';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import styles from './page.module.css';

const SignInPage = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const router = useRouter();

  const signin = async () => {
    const credentials = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };
    try {
      await axios.post('http://localhost:3000/v1/user/signin', credentials, {
        withCredentials: true,
      });
      router.push('/');
    } catch (_) {
      toast.error('Invalid credentials!');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.form} style={{ width: '75%' }}>
        <h1>Log in now</h1>
        <TextField
          inputRef={emailRef}
          className={styles.input}
          label="Enter e-mail"
          variant="outlined"
          fullWidth
        />
        <TextField
          inputRef={passwordRef}
          className={styles.input}
          label="Enter Password"
          variant="outlined"
          fullWidth
        />
        <Alert severity="info">
          No account yet? <Link href="/signup">Register</Link> now!
        </Alert>
        <Button variant="contained" onClick={signin}>
          Log in
        </Button>
      </div>
    </div>
  );
};

export default SignInPage;
