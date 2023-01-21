'use client';

import {Button, Container, Typography} from "@mui/material";


const BathingPlaces = () => {
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


    const placeAndCategory:string[][] = [];
    placeAndCategory.push([results.name],[results.category]);
    console.log(placeAndCategory);

    return placeAndCategory;
  };

  return (
    <Container>

    </Container>
  );
};

export default BathingPlaces;
