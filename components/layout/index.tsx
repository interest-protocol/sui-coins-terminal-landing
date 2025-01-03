import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { ModalProvider } from '@/context/modal';

import Header from '../header';
import Footer from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <ModalProvider>
    <Main
      mx="auto"
      py="1.5rem"
      maxWidth="1280px"
      position="relative"
      px={['1.5rem', '1.5rem', '1.5rem', '0']}
    >
      <Header />
      <Div display="flex" alignItems="center" flexDirection="column" gap="5rem">
        {children}
      </Div>
      <Footer />
    </Main>
  </ModalProvider>
);

export default Layout;
