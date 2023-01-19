'use client';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import {Card, Container, Typography} from "@mui/material";

const SignUpPage = () => {
  const emailRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const router = useRouter();

  const register = async () => {
    const credentials = {
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
    };

    try {
      await axios.post('http://localhost:3000/v1/user/signup', credentials);
      await axios.post('http://localhost:3000/v1/user/signin', credentials);
      router.push('/');
    } catch (_) {
      toast.error('User already exists!');
    }
  };

  return (
    <Container maxWidth="sm" sx={{padding: 10}}>
      <Card sx={{padding: 5}} elevation={4} style={{borderRadius: 20}}>
        <Typography variant="h3">
          Register now
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
          type="password"
          fullWidth
        />
        <Alert severity="info" sx={{marginBottom: "15px", marginTop: "15px"}}>
          Already registered? <Link href="/signin">Log in</Link> now!
        </Alert>
        <Button variant="contained" onClick={register}>
          Register
        </Button>
      </Card>
    </Container>
  );
};

export default SignUpPage;
