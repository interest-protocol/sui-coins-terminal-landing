import { Section } from '@stylin.js/elements';
import { FC } from 'react';

import Partners from '../partners';

const Informative: FC = () => (
  <Section
    p="2rem"
    mb="6rem"
    gap="1rem"
    bg="#171F28"
    id="projects"
    width="100%"
    display="flex"
    borderRadius="1rem"
    flexDirection="column"
  >
    <Partners />
  </Section>
);

export default Informative;
