'use client';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import {Card, Container, Divider, Typography} from "@mui/material";


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
    <Container maxWidth="md" sx={{padding: 10}}>
      <Card sx={{padding: 5}} elevation={4} style={{borderRadius: 20}}>
        <Typography variant="h3">Your profile </Typography>
        <Divider><b>Update your info</b></Divider>
        <Typography variant="subtitle2" sx={{paddingTop: 2}}>
          To update your email or password, just type in the new one and click on "update user".
        </Typography>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label={email}
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <TextField
          inputRef={passwordRef}
          label="Your Password"
          variant="outlined"
          margin="normal"
          type="password"
          fullWidth
        />
        <Button variant="contained" onClick={updateUser}>
          Update User
        </Button>
        <Divider sx={{paddingBottom: 2}}><b>Delete your account</b></Divider>
        <Typography variant="subtitle2" sx={{paddingTop: 2, paddingBottom: 2}}>
          To delete your user, just click on the button below:
        </Typography>
        <Button variant="contained" color="error" onClick={deleteUser}>
          Delete User
        </Button>
      </Card>
    </Container>
  );
};

export default ProfilePage;
