import { Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Header from '../header';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main>
    <Header />
    {children}
  </Main>
);

export default Layout;
