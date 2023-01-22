'use client';

import { Button, Container } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { string } from 'prop-types';
import { useRef } from 'react';
import styles from '../styles/todolist.module.css';
import { Results } from './results_model';

// http://localhost:3000/v1/weather/geolocation?city=vienna

/*const city = string;

const w_Res = await axios.put(
  '/v1/weather/geolocation',
  {
    params: city
  };*/

const fetchResults = async () => {
  const city = 'vienna';
  const url = `/v1/weather/geolocation?city=${city}`;
  const weatherRes = await fetch(url);

  if (!weatherRes.ok) {
    throw new Error('Failed to fetch results');
  }

  const w_results = await weatherRes.json();
  console.log(w_results);
};

/*try {
  fetch('/v1/weather/geolocation?city=${city}')
    .then(r => r.json())
    .then(temp => {
    let temperature = string

    temperature = temp.
    }
})*/
