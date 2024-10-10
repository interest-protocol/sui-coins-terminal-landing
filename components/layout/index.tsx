import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Footer from './footer';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main>
    {children}
    <Footer />
  </Main>
);

export default Layout;
