import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Header from '../header';
import Footer from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main
    pt={['2rem', '2rem', '2rem', '3.5rem', '3.5rem']}
    px={['2rem', '2rem', '2rem', '4.5rem', '4.5rem']}
  >
    <Header />
    {children}
    <Footer />
  </Main>
);

export default Layout;
