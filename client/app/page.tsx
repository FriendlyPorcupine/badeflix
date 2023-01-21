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

function createData(
  bad: string,
  wetter: number,
  ampel: boolean,
  distance: number,
  time: number,

) {
  return {
    Bad: bad,
    Wetter: wetter,
    Ampel: ampel,
    Distanz: distance,
    Wegzeit: time,
    Route:
      [
        {
          instruction: 'Gehen bis Gustav Pick Gasse',
          distance: '63 m',
          duration: '1 Minute'
        },
        {
          instruction: 'Bus in Richtung Salmannsdorf',
          distance: '2,8 km',
          duration: '8 Minuten'
        },
        {
          instruction: 'Gehen bis Salmannsdorfer Str., 1190 Wien, Österreich',
          distance: '0,4 km',
          duration: '6 Minuten'
        },
      ],
  }
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
        <TableCell component="th" scope="row"> {row.Bad}</TableCell>
        <TableCell align="right">{row.Wetter}</TableCell>
        <TableCell align="right">{row.Ampel}</TableCell>
        {/* TODO: hat der Tobi angesagt:*/
          /*== false ? <TrafficLightRed /> : TrafficLightGreen <TrafficLightRed} </TableCell>*/}
        <TableCell align="right">{row.Distanz}</TableCell>
        <TableCell align="right">{row.Wegzeit}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Routenbeschreibung
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Activität</TableCell>
                    <TableCell>Distanz</TableCell>
                    <TableCell align="right">Dauer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.Route.map((historyRow) => (
                    <TableRow key={historyRow.instruction}>
                      <TableCell component="th" scope="row">
                        {historyRow.instruction}
                      </TableCell>
                      <TableCell>{historyRow.distance}</TableCell>
                      <TableCell align="right">{historyRow.duration}</TableCell>
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
  //createData('Frozen yoghurt', 159, res.api bla bla von todolist, 24, 4.0, 3.99),
  createData('Bad1', 15.9, false, 2.4, 16.0),
  createData('Bad2', 23.7, true, 3.7, 18.3),
  createData('Bad3', 26.2, false, 2.4, 17.0),
];


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
    <><Container sx={{padding: 10}}>
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
    </Container><TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell/>
            <TableCell>Freibad</TableCell>
            <TableCell align="right">Temperatur</TableCell>
            <TableCell align="right">Ampel</TableCell>
            <TableCell align="right">Distanz</TableCell>
            <TableCell align="right">Wegzeit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => <Row key={row.Bad} row={row}/>)}
        </TableBody>
      </Table>
    </TableContainer></>
  )
};

export default IndexPage;


