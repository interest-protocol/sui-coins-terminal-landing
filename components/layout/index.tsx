import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { ModalProvider } from '@/context/modal';

import Header from '../header';
import Aside from './aside';
import Footer from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <ModalProvider>
    <Main
      pt={['0', '0', '0', '3.5rem', '3.5rem']}
      px={['1rem', '1rem', '1rem', '4.5rem', '4.5rem']}
      position="relative"
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
      <Div display="flex" alignItems="center" flexDirection="column">
        {children}
      </Div>
      <Footer />
    </Main>
  </ModalProvider>
);

export default Layout;
