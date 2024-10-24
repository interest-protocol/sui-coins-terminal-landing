import { Aggregator } from '@interest-protocol/sui-coins-terminal';
import { Div } from '@stylin.js/elements';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import AddonsBar from './addons';
import { AddonsFormProps } from './addons/addons.types';
import TerminalForm from './terminar-form';

const TerminalSection: FC = () => {
  const form = useForm<AddonsFormProps>({
    defaultValues: {
      slippage: '1',
      fixedCoinIn: false,
      fixedCoinOut: false,
      aggregator: Aggregator.Hop,
      coinInType: '0x2::sui::SUI',
      projectAddress:
        '0xdb3a22be6a37c340c6fd3f67a7221dfb841c818442d856f5d17726f4bcf1c8af',
      coinOutType:
        '0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP',
    },
  });

  return (
    <FormProvider {...form}>
      <Div
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
      </Div>
    </FormProvider>
  );
};

export default TerminalSection;
