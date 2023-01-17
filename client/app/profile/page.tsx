'use client';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import styles from './page.module.css';

const ProfilePage = () => {
  const [email, setEmail] = useState('');
  const passwordRef = useRef<HTMLInputElement>();

  const getUserInformation = async () => {
    try {
      const fetchedUser = await axios.get('http://localhost:3000/v1/user/me', {
        withCredentials: true,
      });
      setEmail(fetchedUser.data.email);
    } catch (_) {
      toast.error('Not logged in!');
    }
  };

  const updateUser = async () => {
    const userData = {
      email,
      password: passwordRef.current?.value,
    };

    try {
      const res = await axios.put(
        'http://localhost:3000/v1/user/user',
        userData,
        {
          withCredentials: true,
        },
      );
      setEmail(res.data.email);
      toast.success('User successfully updated!');
    } catch (_) {
      toast.error('User could not be updated!');
    }
  };

  const deleteUser = async () => {
    try {
      await axios.delete('http://localhost:3000/v1/user/user', {
        withCredentials: true,
      });
      await axios.get('http://localhost:3000/v1/user/signout', {
        withCredentials: true,
      });
      setEmail('');
    } catch (_) {
      toast.error('User could not be deleted!');
    }
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.form} style={{ width: '75%' }}>
        <h1>See your details</h1>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
          label="Your E-Mail"
          variant="outlined"
          fullWidth
        />
        <TextField
          inputRef={passwordRef}
          className={styles.input}
          label="Your Password"
          variant="outlined"
          fullWidth
        />
        <Alert severity="info">
          No account yet? <Link href="/signup">Register</Link> now!
        </Alert>
        <Button variant="contained" onClick={updateUser}>
          Update User
        </Button>
        <Button variant="contained" color="error" onClick={deleteUser}>
          Delete User
        </Button>
      </div>
    </div>
  );
};

export default ProfilePage;
