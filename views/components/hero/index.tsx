import { Div, H1, P } from '@stylin.js/elements';
import { FC } from 'react';

const Hero: FC = () => {
  return (
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
            fontSize={['2rem', '2rem', '2rem', '3.75rem', '3.75rem']}
          >
            SUICOIN Terminal
          </H1>
        </Div>
        <Div color="#fff" maxWidth="48rem">
          <P
            fontWeight="500"
            textAlign="center"
            lineHeight="1.875rem"
            fontSize={['0.875rem', '0.875rem', '0.875rem', '1rem', '1rem']}
          >
            SUI Terminal is an open-source, lightweight version of Jupiter that
            offers an end-to-end swap flow solution. Easily integrate it into
            your HTML for seamless swaps across platforms.
          </P>
        </Div>
      </Div>
    </Div>
  );
};

export default Hero;
