import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { PARTNERS_DATA } from './partners.data';

const Partners: FC = () => (
  <Div py="6rem" display="flex">
    <Div
      display="flex"
      alignItems="center"
      mx="auto"
      gap={['2.5rem', '2.5rem', '3rem']}
      flexDirection={['column', 'row']}
      flexWrap="wrap"
      justifyContent="center"
    >
      {PARTNERS_DATA.map(({ size, Icon }) => (
        <Div height="3rem" width={size} key={v4()}>
          <Icon maxHeight="3rem" maxWidth={size} width="100%" />
        </Div>
      ))}
    </Div>
  </Div>
);

export default Partners;
