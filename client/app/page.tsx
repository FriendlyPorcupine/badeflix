'use client';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FC, useRef, useState } from 'react';
import {
  TrafficLightGreen,
  TrafficLightRed,
} from '../src/components/TrafficLight';
import { BathData, fetchBathData } from '../src/services/bath.service';
import { fetchWeatherData, WeatherData } from '../src/services/weather.service';

interface RowProps {
  row: BathData;
  weather?: WeatherData;
}

const Row: FC<RowProps> = ({ row, weather }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
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
        <TableCell component="th" scope="row">
          {weather?.temperature ?? ''} °C
        </TableCell>
        <TableCell align="right">
          {row.available ? <TrafficLightGreen /> : <TrafficLightRed />}
        </TableCell>
        <TableCell align="right">{row.distance + ' km'}</TableCell>
        <TableCell align="right">{row.duration}</TableCell>
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
                    <TableCell>Aktivität</TableCell>
                    <TableCell>Distanz</TableCell>
                    <TableCell align="right">Dauer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.steps.map((step) => (
                    <TableRow key={step.instruction}>
                      <TableCell component="th" scope="row">
                        {step.instruction}
                      </TableCell>
                      <TableCell>{step.distance}</TableCell>
                      <TableCell align="right">{step.duration}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

const IndexPage = () => {
  const streetRef = useRef<HTMLInputElement>();
  const zipRef = useRef<HTMLInputElement>();

  const [weather, setWeather] = useState<WeatherData | undefined>(undefined);
  const [rows, setRows] = useState<BathData[]>([]);

  const initializeTable = async () => {
    const data = await Promise.all([
      fetchBathData(
        streetRef.current?.value ?? '',
        zipRef.current?.value ?? '',
      ),
      fetchWeatherData('Wien'),
    ]);
    setWeather(data[1]);
    setRows(data[0]);
  };

  return (
    <>
      <Container sx={{ padding: 10 }}>
        <Typography variant="subtitle1">
          To search for a bathing place, write your address in the search bar
          and click on search. Please keep in mind, you need to be logged in first for it to work!
        </Typography>
        <TextField
          label="Enter your street"
          inputMode="search"
          variant="filled"
          margin="normal"
          inputRef={streetRef}
          fullWidth
        />
        <TextField
          label="Enter your zip code"
          inputMode="search"
          variant="filled"
          margin="normal"
          inputRef={zipRef}
          fullWidth
        />
        <Button variant="contained" fullWidth onClick={initializeTable}>
          Search
        </Button>
      </Container>

      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Freibad</TableCell>
              <TableCell align="right">Temperatur</TableCell>
              <TableCell align="right">Ampel</TableCell>
              <TableCell align="right">Distanz</TableCell>
              <TableCell align="right">Wegzeit</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.address} row={row} weather={weather} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default IndexPage;
