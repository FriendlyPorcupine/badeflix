"use client";

import styles from './page.module.css';
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import {  useRef } from 'react';

const SignUpPage =  () => {
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    const register = () => {
        const credentials = {
            email:  passwordRef.current?.value,
            password: emailRef.current?.value,
        };
        
        // POST REQUEST TO API
        console.log(credentials);
    }

    return(
        <div className={styles.container}>
            <div className={styles.form} style={{width: "75%"}}>
                <h1>Register now</h1>
                <TextField 
                    inputRef={emailRef}
                    className={styles.input} 
                    label="Enter e-mail" 
                    variant="outlined" 
                    fullWidth 
                />
                <TextField 
                    inputRef={passwordRef}
                    className={styles.input} 
                    label="Enter Password" 
                    variant="outlined" 
                    fullWidth 
                />
                <Alert severity="info">This is an info alert — check it out!</Alert>
                <Button variant="contained" onClick={register}>Register</Button>
            </div>
        </div>
    );
}

export default SignUpPage;