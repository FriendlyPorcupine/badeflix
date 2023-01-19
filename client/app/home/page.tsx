'use client';

import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { toast } from 'react-hot-toast';
import {Card, Container, Typography} from "@mui/material";
import { useRouter } from "next/navigation";


const HomePage = () => {

  const addressRef = useRef<HTMLInputElement>();
  const router = useRouter();

  // @todo post to backend!
  const search = async () => {

    const addressToSearch = {
      address: addressRef.current?.value,
    };
    console.log({addressToSearch})
    try {
      await axios.post('', addressToSearch);
      router.push('/');
  } catch (_) {
    toast.error('There has been an error. Try again!')}
  }

  return (
    <Container sx={{padding: 10}}>
      <Typography variant="subtitle1">
        To search for a bathing(? place, write your address in the search bar and click on search
      </Typography>
      <TextField
      label="Search your address"
      inputMode="search"
      variant="filled"
      margin="normal"
      inputRef={addressRef}
      fullWidth>
      </TextField>
      <Button variant="contained" onClick={search}>
        Search
      </Button>
    </Container>


  );
};

export default HomePage;
