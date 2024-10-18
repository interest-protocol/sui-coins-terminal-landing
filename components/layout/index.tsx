import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { ModalProvider } from '@/context/modal';

import Header from '../header';
import Footer from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <ModalProvider>
    <Main
      pt={['0', '0', '0', '1.8rem', '1.8rem']}
      px={['1rem', '1rem', '1rem', '2.8rem', '2.8rem']}
      position="relative"
    >
      <Header />
      <Div display="flex" alignItems="center" flexDirection="column">
        {children}
      </Div>
      <Footer />
    </Main>
  </ModalProvider>
);

export default Layout;
