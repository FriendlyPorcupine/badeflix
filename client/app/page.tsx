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

      console.log({lati}); console.log({long}); console.log({firstResponse});

      const dummyLat1 = "48.200978";
      const dummyLong1 = "16.369311";
      const dummyLat2 = "48.137107";
      const dummyLong2 = "11.575382";
      const dummyLat3 = "51.509865";
      const dummyLong3 ="-0.118092";

      const dummyOrgLat = "43.629041";
      const dummyOrgLong = "24.025606";
      const dummyDestLat1 = "40.630099";
      const dummyDestLong1 = "73.993521";

      const API1 = "6f1009739cmsh27747aa4a2e5d42p16af98jsn3372d28d889e";

      //const dummyURL = "https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=40.629041%2C-74.025606&destinations=40.630099%2C-73.993521%3B40.644895%2C-74.013818%3B40.627177%2C-73.980853&rapidapi-key=6f1009739cmsh27747aa4a2e5d42p16af98jsn3372d28d889e"
      //get distance from address to bathing place
      const url1 =`https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=${lati}%2C${long}&destinations=${dummyLat1}%2C${dummyLong1}%3B${dummyLat2}%2C${dummyLong3}%3B${dummyLat3}%2C${dummyLong2}&rapidapi-key=${API1}`;
      //const url2 =`https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=${dummyOrgLat}%2C-${dummyOrgLong}&destinations=${dummyDestLat1}%2C-${dummyDestLong1}%3B${dummyDestLat1}%2C-${dummyDestLong1}&rapidapi-key=${API1}`;
      const responseOfRoute = await fetch(url1);
      const responseOfRouteJson = await responseOfRoute.json();
      const firstResponseOfRoute = responseOfRouteJson.distances[0][0]; // [0] distance, [0] origin to first distance
      const secondResp = responseOfRouteJson.distances[0][2];
      const thirdResp = responseOfRouteJson.distances[0][3];
      console.log("_____________________________");
      console.log({firstResponseOfRoute});
      console.log({secondResp});
      console.log({thirdResp});

      //distance in meter @todo: convert to km




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

