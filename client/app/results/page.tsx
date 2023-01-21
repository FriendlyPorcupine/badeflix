'use client';
import BathingPlaces from "./components/fetchbath";
import styles from '../styles/todolist.module.css';
import {Results} from "./results_model";
import {Button, Container, Typography} from "@mui/material";
import {useEffect, useRef} from "react";
import {useRouter} from "next/navigation";

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
    <BathingPlaces/>
  </Container>
);
  /**
   export const ResultsList = async () => {
  const resultsfetched = await fetchResults("schönbrunnerstraße", "1050","karlsplatz");
  console.log(resultsfetched)
  return (
    <>Something</>
  );
};
   */
};

export default ResultsListHere;
