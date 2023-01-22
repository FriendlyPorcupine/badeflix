'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Container } from '@mui/material';
import Image from 'next/image';
import { ReactNode, FC } from 'react';
import { Toaster } from 'react-hot-toast';

import './layout.css';
import Navbar from '../src/components/Navbar/Navbar';
import logo from '../src/images/logo.png';

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({ children }) => {
  return (
    <html lang="de">
      <head />
      <body>
        <header>
          <Image
            src={logo}
            alt={'logo of Badeflix'}
            width={200}
            height={100}
            style={{ marginTop: 2 }}
          />
          <Navbar />
        </header>
        <Toaster />
        <main>
          <Container maxWidth="lg">{children}</Container>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
