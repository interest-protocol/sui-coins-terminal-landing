import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { ADVANTAGE_DATA } from './advantage.data';
import AdvantageItem from './advantages-item';

const AdvantageSection: FC = () => (
  <Div
    my="6rem"
    width={['100%', '100%', '100%', '62rem', '76rem']}
    display="flex"
    flexDirection="column"
    gap="6rem"
  >
    {ADVANTAGE_DATA.map((advantage) => (
      <AdvantageItem key={v4()} {...advantage} />
    ))}
  </Div>
);

export default AdvantageSection;
