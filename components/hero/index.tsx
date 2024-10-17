import { Div, H1, P } from '@stylin.js/elements';
import { useState } from 'react';

import { Tabs } from '../tabs';
import Filters from './filters';
import { TABS_DATA } from './hero.data';
import HeroModal from './modal';
import HeroWidget from './widget';

const Hero = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleOnChangeTab = (index: number) => {
    setTabIndex(index);
  };

  const renderTabContent = () => {
    if (tabIndex === 2) {
      return <HeroWidget />;
    }
    if (tabIndex === 0) {
      return <HeroModal />;
    }
    return null;
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
        bg="#171f28"
        display="flex"
        height={['auto', 'auto', 'auto', '47.5rem', '47.5rem']}
        borderRadius="1rem"
        width={['100%', '100%', '100%', '62rem', '76rem']}
        flexDirection={[
          'column-reverse',
          'column-reverse',
          'column-reverse',
          'row',
          'row',
        ]}
      >
        <Filters />
        <Div
          py={['1.5rem', '1.5rem', '1.5rem', '1.5rem', '1.5rem']}
          px={['0rem', '0rem', '0rem', '1.5rem', '1.5rem']}
          bg="#0E1218"
          height="100%"
          display="flex"
          width="fill-available"
          borderRadius="inherit"
          flexDirection="column"
          alignItems="center"
        >
          <Div
            px="1rem"
            mb="1rem"
            width={[
              'fill-available',
              'fill-available',
              '20rem',
              '21.813rem',
              '21.813rem',
            ]}
          >
            <Tabs items={TABS_DATA} onChangeTab={handleOnChangeTab} />
            <P
              color="#B6B8BB"
              height="2.25rem"
              textAlign="center"
              fontSize="0.75rem"
              lineHeight="1.125rem"
            >
              {TABS_DATA[tabIndex].description}
            </P>
          </Div>
          <Div
            display="flex"
            alignItems="center"
            width="fill-available"
            height="fill-available"
            justifyContent="center"
          >
            {renderTabContent()}
          </Div>
        </Div>
      </Div>
    </Div>
  );
};

export default Hero;
