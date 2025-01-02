import { Section } from '@stylin.js/elements';
import { FC } from 'react';

import AddonsBar from './addons';
import TerminalForm from './terminar-form';

const TerminalSection: FC = () => (
  <Section
    id="terminal"
    p={['0.5rem', '0.5rem', '0.5rem', '1.5rem', '1.5rem']}
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
    <AddonsBar />
    <TerminalForm />
  </Section>
);

export default TerminalSection;
