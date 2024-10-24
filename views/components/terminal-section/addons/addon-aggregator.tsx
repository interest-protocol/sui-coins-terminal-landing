import { Aggregator } from '@interest-protocol/sui-coins-terminal';
import { Div, Span } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import Dropdown from '@/components/dropdown';

import { AddonsFormProps } from './addons.types';

const AddonAggregator: FC = () => {
  const { control, setValue } = useFormContext<AddonsFormProps>();

  const aggregator = useWatch({ control, name: 'aggregator' });

  return (
    <Div mb="1rem" width="100%">
      <Span
        fontWeight={700}
        fontSize="0.875rem"
        fontFamily="Satoshi"
        lineHeight="1.875rem"
      >
        Aggregator
      </Span>
      <Dropdown
        defaultValue={aggregator}
        menuItems={[Aggregator.Hop, Aggregator.Aftermath]}
        onSelect={(value) => setValue('aggregator', value as Aggregator)}
      />
    </Div>
  );
};

export default AddonAggregator;
