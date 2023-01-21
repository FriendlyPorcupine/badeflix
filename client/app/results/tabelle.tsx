import React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import {Table, Typography} from "@mui/material";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";

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

//put into return of container

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
