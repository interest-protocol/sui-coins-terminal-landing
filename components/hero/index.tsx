import { Div, H1, P } from '@stylin.js/elements';
import { useState } from 'react';

import { Tabs } from '../tabs';
import Filters from './filters';
import { TABS_DATA } from './hero.data';

const Hero = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleOnChangeTab = (index: number) => {
    setTabIndex(index);
  };

  return (
    <Div display="flex" alignItems="center" flexDirection="column">
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
              SUI Terminal is an open-source, lightweight version of Jupiter
              that offers an end-to-end swap flow solution. Easily integrate it
              into your HTML for seamless swaps across platforms.
            </P>
          </Div>
        </Div>
      </Div>
      <Div
        p="1.5rem"
        gap="1rem"
        mt="-13rem"
        width="76rem"
        bg="#171f28"
        display="flex"
        height="47.5rem"
        borderRadius="1rem"
      >
        <Filters />
        <Div
          p="1.5rem"
          bg="#0E1218"
          height="100%"
          display="flex"
          width="fill-available"
          borderRadius="inherit"
          justifyContent="center"
        >
          <Div width="21.813rem">
            <Tabs items={TABS_DATA} onChangeTab={handleOnChangeTab} />
            <P
              color="#B6B8BB"
              textAlign="center"
              fontSize="0.75rem"
              lineHeight="1.125rem"
            >
              {TABS_DATA[tabIndex].description}
            </P>
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Hero;
