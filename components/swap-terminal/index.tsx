import dynamic from 'next/dist/shared/lib/dynamic';
import { useFormContext, useWatch } from 'react-hook-form';

import { AddonsFormProps } from '@/views/components/terminal-section/addons/addons.types';

const Terminal = dynamic(
  import('@interest-protocol/sui-coins-terminal').then(
    ({ SwapTerminal }) => SwapTerminal
  ),
  { ssr: false }
);

const SwapTerminal = () => {
  const { control } = useFormContext<AddonsFormProps>();

  const { coinInType, coinOutType, fixedCoinIn, fixedCoinOut, projectAddress } =
    useWatch({
      control,
    });

  return (
    <Terminal
      typeIn={coinInType!}
      fixedIn={fixedCoinIn}
      typeOut={coinOutType!}
      fixedOut={fixedCoinOut}
      projectAddress={projectAddress!}
    />
  );
};

export default SwapTerminal;
