import { Aggregator } from '@interest-protocol/sui-coins-terminal';
import { FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { Layout } from '@/components';

import {
  DocsSection,
  HeroSection,
  InformativeSection,
  TerminalSection,
} from '../components';
import { AddonsFormProps } from '../components/terminal/addons/addons.types';

const Home: FC = () => {
  const form = useForm<AddonsFormProps>({
    defaultValues: {
      slippage: '1',
      fixedCoinIn: false,
      fixedCoinOut: false,
      aggregator: Aggregator.Aftermath,
      coinInType: '0x2::sui::SUI',
      projectAddress:
        '0xdb3a22be6a37c340c6fd3f67a7221dfb841c818442d856f5d17726f4bcf1c8af',
      coinOutType:
        '0xdeeb7a4662eec9f2f3def03fb937a663dddaa2e215b8078a284d026b7946c270::deep::DEEP',
    },
  });

  return (
    <FormProvider {...form}>
      <Layout>
        <HeroSection />
        <TerminalSection />
        <DocsSection />
        <InformativeSection />
      </Layout>
    </FormProvider>
  );
};

export default Home;
