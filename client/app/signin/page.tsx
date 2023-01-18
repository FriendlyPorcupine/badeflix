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
import {Card, Container, Typography} from "@mui/material";
import {margin} from "@mui/system";

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
    <Container maxWidth="sm" sx={{padding: 10}}>
      <Card sx={{padding: 5}} elevation={4}>
        <Typography variant="h3">
          Log in now
        </Typography>
        <TextField
          inputRef={emailRef}
          label="Enter e-mail"
          variant="filled"
          margin="normal"
          fullWidth
        />
        <TextField
          inputRef={passwordRef}
          label="Enter Password"
          variant="filled"
          margin="normal"
          fullWidth
        />
        <Alert severity="info" sx={{marginBottom: "15px", marginTop: "15px"}}>
          No account yet? <Link href="/signup">Register</Link> now!
        </Alert>
        <Button variant="contained" onClick={signin}>
          Log in
        </Button>
      </Card>
    </Container>
  );
};

export default SignInPage;
