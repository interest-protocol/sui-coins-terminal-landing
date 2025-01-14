import { Div } from '@stylin.js/elements';

import SwapTerminal from '@/components/swap-terminal';

const IntegratedTerminal = () => {
  return (
    <Div
      display="flex"
      justifyContent="center"
      width={['90%', '90%', '90%', '50%', '50%']}
    >
      <SwapTerminal />
    </Div>
  );
};

export default IntegratedTerminal;
