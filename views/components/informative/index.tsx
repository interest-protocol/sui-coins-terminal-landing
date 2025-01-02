import { Button, Div, P, Section } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import Partners from '../partners';

const Informative: FC = () => (
  <Section
    p="2rem"
    my="6rem"
    gap="1rem"
    bg="#171F28"
    id="projects"
    width="100%"
    display="flex"
    borderRadius="1rem"
    flexDirection="column"
  >
    <Partners />
    <P
      color="#fff"
      fontWeight="700"
      textAlign="center"
      fontSize="1.875rem"
      lineHeight="2.375rem"
    >
      Step Into the Future with Suicoin Terminal
    </P>
    <P
      color="#B6B8BB"
      fontWeight="500"
      textAlign="center"
      fontSize="1.125rem"
      lineHeight="1.75rem"
    >
      Discover the ultimate crypto command center! Our terminal is designed to
      give you full control of your digital assets, offering lightning-fast
      swaps, easy token creation, and real-time analytics all in one sleek
      platform.
    </P>
    <Div textAlign="center">
      <Link href="https://t.me/SatoshiMedici" target="_blank">
        <Button
          all="unset"
          p="1rem"
          bg="#0053DB"
          color="#ffffff"
          fontFamily="Proto"
          borderRadius="2rem"
        >
          Get In touch
        </Button>
      </Link>
    </Div>
  </Section>
);

export default Informative;
