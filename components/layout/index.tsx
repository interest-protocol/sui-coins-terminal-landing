import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { ModalProvider } from '@/context/modal';

import Header from '../header';
import Footer from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <ModalProvider>
    <Main
      py={['0', '0', '0', '3.5rem', '3.5rem']}
      px={['1.5rem', '1.5rem', '1.5rem', '4.5rem', '4.5rem']}
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
