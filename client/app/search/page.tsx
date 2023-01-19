import * as React from 'react';
import {Card} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useRouter} from "next/navigation";
/*import {useRef} from "react";*/



const Search = () => {
  /*const addressRef = useRef<HTMLInputElement>();*/
  const router = useRouter();
  /**
  const searchaddress = async () => {
    const address = {
      address: addressRef.current?.value,
    };
   /** @todo send addresses to server for searching (API!)
    * try {
      await axios.post('', searchaddress)
      {
      });}**/

  return (
    <Card sx={{padding: 10}}>
      <TextField
        /*inputRef={addressRef}*/
        label="Search address"
        variant="filled"
        margin="normal"
        fullWidth
      />
    </Card>
  );
};
export default Search;

