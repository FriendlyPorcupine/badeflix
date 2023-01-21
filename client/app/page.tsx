'use client';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import React, {useRef } from 'react';
import { toast } from 'react-hot-toast';
import {Container, Table, Typography} from "@mui/material";
import { useRouter } from "next/navigation";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

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
    console.log({firstResponse});

    const dummyLat1 = "48.200978";
    const dummyLong1 = "16.369311";
    const dummyLat2 = "48.137107";
    const dummyLong2 = "11.575382";
    const dummyLat3 = "51.509865";
    const dummyLong3 = "-0.118092";

    const dummyOrgLat = "43.629041";
    const dummyOrgLong = "24.025606";
    const dummyDestLat1 = "40.630099";
    const dummyDestLong1 = "73.993521";

    const key = "CHANGE KEY HERE (signal)";


    //const dummyURL = "https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=40.629041%2C-74.025606&destinations=40.630099%2C-73.993521%3B40.644895%2C-74.013818%3B40.627177%2C-73.980853&rapidapi-key=6f1009739cmsh27747aa4a2e5d42p16af98jsn3372d28d889e"
    //get distance from address to bathing place
    const url1 = `https://trueway-matrix.p.rapidapi.com/CalculateDrivingMatrix?origins=${lati}%2C${long}&destinations=${dummyLat1}%2C${dummyLong1}%3B${dummyLat2}%2C${dummyLong3}%3B${dummyLat3}%2C${dummyLong2}&rapidapi-key=${key}`;
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

  // Table
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    price: number,
  ) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      price,
      history: [
        {
          date: '2020-01-05',
          customerId: '11091700',
          amount: 3,
        },
        {
          date: '2020-01-02',
          customerId: 'Anonymous',
          amount: 1,
        },
      ],
    };
  }

  function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.calories}</TableCell>
          <TableCell align="right">{row.fat}</TableCell>
          <TableCell align="right">{row.carbs}</TableCell>
          <TableCell align="right">{row.protein}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  History
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Date</TableCell>
                      <TableCell>Customer</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Total price ($)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.history.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          {historyRow.date}
                        </TableCell>
                        <TableCell>{historyRow.customerId}</TableCell>
                        <TableCell align="right">{historyRow.amount}</TableCell>
                        <TableCell align="right">
                          {Math.round(historyRow.amount * row.price * 100) / 100}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
    createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
    createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
    createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
  ];

  //export default function CollapsibleTable() {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align="right">Calories</TableCell>
              <TableCell align="right">Fat&nbsp;(g)</TableCell>
              <TableCell align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };
export default IndexPage;

