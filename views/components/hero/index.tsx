import { Div, H1, P } from '@stylin.js/elements';
import { FC } from 'react';

const Hero: FC = () => (
  <Div
    pt="3rem"
    height="30rem"
    display="flex"
    alignItems="center"
    flexDirection="column"
    backgroundSize="cover"
    backgroundPosition="center"
    backgroundImage="url('/img/background.webp')"
  >
    <Div display="flex" alignItems="center" flexDirection="column">
      <Div color="#fff" display="flex" justifyContent="center">
        <H1
          mb="2rem"
          fontFamily="Satoshi"
          fontSize={['2rem', '2rem', '2rem', '3.75rem', '3.75rem']}
        >
          SuiCoins Terminal
        </H1>
      </Div>
      <Div color="#fff" maxWidth="48rem">
        <P
          fontWeight="500"
          textAlign="center"
          fontFamily="Satoshi"
          lineHeight="1.875rem"
          fontSize={['0.875rem', '0.875rem', '0.875rem', '1rem', '1rem']}
        >
          SuiCoins Terminal is an open-source, lightweight version of SuiCoins
          Swap feature, designed to provide a seamless end-to-end swap flow
          solution. It can be easily integrated into your Website, enabling
          smooth swaps across platforms.
        </P>
      </Div>
    </Div>
  </Div>
);

export default Hero;
