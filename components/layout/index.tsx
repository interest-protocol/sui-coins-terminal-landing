import { Div, Main } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import Aside from './aside';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Main p="1rem">
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
  </Main>
);

export default Layout;
