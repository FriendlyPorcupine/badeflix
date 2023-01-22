'use client';
import BathingPlaces from "./components/fetchbath";
import {Button, Container, Typography} from "@mui/material";


const ResultsListHere = () => {
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
    console.log(results);
    return results[0].distance;
  };

  const fetchSummerBaths = async () => {
    const url = `http://localhost:3000/v1/bath/baths?category=summer`;
    //needs to be from API
    const bathplaces = await fetch(url);
    if (!bathplaces.ok) {
      throw new Error('Failed to fetch results');
    }
    const results = await bathplaces.json();
    const resultsname= results[3].name;

    console.log(results);
    console.log('______');
    console.log(resultsname);

    return results;
  };


  const allDestinations = async (start:string, zip:string, destination:string) => {
    const bath = await fetchSummerBaths(); //array of names
    const duration = await fetchResults(start, zip, destination); //gets distance from start to destination
    //destination address from where? hard coded???

    //makes a list with bath name and it's duration from fetchSummerBath
    const makeList = []; //new array
    for(let i = 0; i < bath.length; i++) {
      makeList.push([bath[i],duration[i]]);
    }
    console.log("hereeeeeee");
    console.log(makeList);

    return makeList;
  }

  return (
  <div>
    <button onClick={() =>allDestinations("schönbrunnerstraße", "1050", "karlsplatz")}>
      click
    </button>

  </div>
  );

};

export default ResultsListHere;
