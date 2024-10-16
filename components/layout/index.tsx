import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Header from '../header';
import Aside from './aside';
import Footer from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main
    pt={['2rem', '2rem', '2rem', '3.5rem', '3.5rem']}
    px={['2rem', '2rem', '2rem', '4.5rem', '4.5rem']}
  >
    <Header />
    <Div
      gap="1rem"
      p="1.5rem"
      display="flex"
      bg="#171F28"
      minWidth="100%"
      height="37.5rem"
      minHeight="37.5rem"
      borderRadius="0.5rem"
      alignItems="flex-start"
      justifyContent="flex-start"
      flexDirection={['column', 'column', 'column', 'row']}
    >
      <Aside />
    </Div>
    {children}
    <Footer />
  </Main>
);

export default Layout;
