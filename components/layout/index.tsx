import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Header from '../header';
import Footer from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main px="2rem">
    <Header />
    {children}
    <Footer />
  </Main>
);

export default Layout;
