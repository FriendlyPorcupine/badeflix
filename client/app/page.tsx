'use client';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import {useRef } from 'react';
import { toast } from 'react-hot-toast';
import {Container, Typography} from "@mui/material";
import { useRouter } from "next/navigation";


const IndexPage = () => {
    const addressRef = useRef<HTMLInputElement>();
    const router = useRouter();

    // takes the address (user input) and saves it as a string,
  // then takes the address string and uses OpenStreetMap to get the latitude & longitude
    const addressToGeoCode = async (address: any) => {
      const addressToStr = address.toString();
      console.log({addressToStr});
      const locationAsURI = encodeURI(addressToStr);
      const url = `https://nominatim.openstreetmap.org/search?q=${locationAsURI}&format=json`;
      const response = await fetch(url);
      const responseJson = await response.json();
      const firstResponse = responseJson[0]; // we take the first result
      const lati = firstResponse.lat;
      const long = firstResponse.lon;

      console.log({lati});
      console.log({long});
      return {
        lat: firstResponse.lat,
        lon: firstResponse.lon,
      };
    };





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
        <Button variant="contained" onClick={() => addressToGeoCode(addressRef.current?.value)}>
          Search
        </Button>
      </Container>


    );
};


export default IndexPage;

