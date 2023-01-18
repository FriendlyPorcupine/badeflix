'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ReactNode, FC } from 'react';
import { Toaster } from 'react-hot-toast';

import './layout.css';
import Navbar from "../src/components/Navbar/Navbar";
import Footer from "../src/components/Footer/Footer";
import {Container} from "@mui/material";

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="de">
      <head />
      <body>
        <Toaster />
        <Navbar />
        <main>
          <Container maxWidth="md">
            {children}
          </Container>
        </main>
        <Footer/>
      </body>
    </html>
  );
};

export default RootLayout;
