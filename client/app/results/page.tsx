'use client';

import styles from '../styles/todolist.module.css';
import {Results} from "./results_model";
import {Button, Container} from "@mui/material";
import {useRef} from "react";
import {useRouter} from "next/navigation";

const ResultsListHere = () => {
  //const emailRef = useRef<HTMLInputElement>();
  //const passwordRef = useRef<HTMLInputElement>();
  //const router = useRouter();
  const dummystart ="schonbrunnerstrasse";
  const dummyzip = "1050";
  const dummydest = "Karlsplatz";
  const fetchResults = async () => {
    //start: string, zip: string, destination: string
    const start = dummystart;
    const zip = dummyzip;
    const destination = dummydest;

    const url = `http://localhost:3000/v1/direction/direction?start_street=${dummystart}&start_zip=${dummyzip}&destination_address=${dummydest}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error('Failed to fetch results');
    }

    const results = await res.json();
    console.log(results);

  };


  return (
  <Container>
    <Button onClick={fetchResults}> try here </Button>
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
