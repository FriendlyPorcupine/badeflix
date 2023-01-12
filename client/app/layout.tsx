import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import './index.css';

import {ReactNode, FC} from "react";
import { Navbar } from '../src/components/Navbar/Navbar';

interface Props {
  children: ReactNode;
}

const RootLayout: FC<Props> = ({children}) => {
  return (
    <html>
      <head />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

export default RootLayout;
