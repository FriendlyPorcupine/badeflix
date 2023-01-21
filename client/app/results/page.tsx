'use client';
import BathingPlaces from "./components/fetchbath";
import {Button, Container, Typography} from "@mui/material";


const ResultsListHere = () => {
  //const emailRef = useRef<HTMLInputElement>();
  //const passwordRef = useRef<HTMLInputElement>();
  //const router = useRouter();
  const dummystart ="schonbrunnerstrasse";
  const dummyzip = "1050";
  const dummydest = "Karlsplatz";
  const fetchResults = async (start: string, zip: string, destination: string) => {
    //start: string, zip: string, destination: string


    const url = `http://localhost:3000/v1/direction/direction?start_street=${start}&start_zip=${zip}&destination_address=${destination}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Failed to fetch results');
    }

    const results = await res.json();
    const distanceResult = results.distance;

    console.log(distanceResult)
    console.log(results);


    const placeAndDistanceArray:string[][] = [];
    placeAndDistanceArray.push([results.duration],[results.distance]);
    console.log(placeAndDistanceArray);

    return placeAndDistanceArray;
  };


/**
  const addDataToArray = () => {
  const placeAndDistanceArray:string[][];
  placeAndDistanceArray.forEach()
  }
*/


    const data = fetchResults(dummystart, dummyzip, dummydest);
    console.log(data);

  return (
  <Container>
    <button onClick={() =>fetchResults("schönbrunnerstraße", "1050", "karlsplatz")}>click to try</button>
  </Container>
);

};

export default ResultsListHere;
