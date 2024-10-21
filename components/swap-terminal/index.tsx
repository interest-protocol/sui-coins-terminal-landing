import dynamic from 'next/dist/shared/lib/dynamic';

import {
  EMOJI_ADDRESS,
  PROJECT_ADDRESS,
  SUI_ADDRESS,
} from '@/constants/swap-terminal';

const Terminal = dynamic(
  import('@interest-protocol/sui-coins-terminal').then(
    ({ SwapTerminal }) => SwapTerminal
  ),
  { ssr: false }
);

const SwapTerminal = () => {
  return (
    <Terminal
      typeIn={SUI_ADDRESS}
      typeOut={EMOJI_ADDRESS}
      projectAddress={PROJECT_ADDRESS}
    />
  );
};

export default SwapTerminal;
