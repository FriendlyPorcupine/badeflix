'use client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ReactNode, FC } from 'react';
import { Toaster } from 'react-hot-toast';
import { Navbar } from '../src/components/Navbar/Navbar';

import './index.css';

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
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
