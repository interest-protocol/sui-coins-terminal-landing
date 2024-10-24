import { Div, H1, Input, P, Span } from '@stylin.js/elements';
import { useFormContext } from 'react-hook-form';

import { ToggleComponent } from '@/components/toogle';

import AddonAggregator from './addon-aggregator';
import { AddonsFormProps } from './addons.types';

const AddonsBar = () => {
  const { setValue, register } = useFormContext<AddonsFormProps>();

  return (
    <Div
      p="1rem"
      bg="#0E1218"
      color="#FFF"
      overflowY="auto"
      alignItems="center"
      borderRadius="1rem"
      flexDirection="column"
      justifyContent="center"
      height={['60vh', '60vh', '60vh', '100%', '100%']}
      width={['100%', '100%', '100%', '20%', '20%']}
      minWidth={['100%', '100%', '100%', '20%', '20%']}
    >
      <Div pt="1rem" width="100%" borderBottom="1px solid #A8A8A8">
        <Div pb="0.5rem">
          <H1
            color="#B6B8BB"
            fontWeight={700}
            fontSize="0.875rem"
            fontFamily="Satoshi"
            lineHeight="1.313rem"
          >
            Project Address
          </H1>
          <P
            color="#64686E"
            fontWeight={400}
            fontSize="0.75rem"
            fontFamily="Satoshi"
            lineHeight="1.125rem"
          >
            Insert your project address to get {'"future"'} fees from Swapping
          </P>
        </Div>
        <Input
          p="1rem"
          mb="1.5rem"
          type="text"
          width="100%"
          color="#353A3E"
          height="2.75rem"
          background="#EDEDF1"
          borderRadius="0.5rem"
          border="1px solid #E0E0D7"
          {...register('projectAddress')}
        />
      </Div>
      <Div mb="1rem">
        <Span
          mt="0.5rem"
          fontWeight={700}
          fontSize="0.875rem"
          fontFamily="Satoshi"
          lineHeight="1.875rem"
        >
          Things you can configure
        </Span>
        <Div pt="1rem" width="100%" borderBottom="1px solid #A8A8A8">
          <Div pb="0.5rem">
            <H1
              color="#B6B8BB"
              fontWeight={700}
              fontSize="0.875rem"
              fontFamily="Satoshi"
              lineHeight="1.313rem"
            >
              Input Token
            </H1>
            <P
              color="#64686E"
              fontWeight={400}
              fontSize="0.75rem"
              fontFamily="Satoshi"
              lineHeight="1.125rem"
            >
              Insert the type of the token that you want to sell
            </P>
          </Div>
          <Input
            p="1rem"
            mb="1.5rem"
            type="text"
            width="100%"
            color="#353A3E"
            height="2.75rem"
            background="#EDEDF1"
            borderRadius="0.5rem"
            border="1px solid #E0E0D7"
            {...register('coinInType')}
          />
        </Div>
        <ToggleComponent
          defaultValue={false}
          hasBorderBottom={true}
          label="Fixed Input Coin"
          description="Input coin cannot be changed"
          onChange={(value) => setValue('fixedCoinIn', value)}
        />
        <Div pt="1rem" width="100%" borderBottom="1px solid #A8A8A8">
          <Div pb="0.5rem">
            <H1
              color="#B6B8BB"
              fontWeight={700}
              fontSize="0.875rem"
              fontFamily="Satoshi"
              lineHeight="1.313rem"
            >
              Output Token
            </H1>
            <P
              color="#64686E"
              fontWeight={400}
              fontSize="0.75rem"
              fontFamily="Satoshi"
              lineHeight="1.125rem"
            >
              Insert the type of the token that you want to buy
            </P>
          </Div>
          <Input
            p="1rem"
            mb="1.5rem"
            type="text"
            width="100%"
            color="#353A3E"
            height="2.75rem"
            background="#EDEDF1"
            borderRadius="0.5rem"
            border="1px solid #E0E0D7"
            {...register('coinOutType')}
          />
        </Div>
        <ToggleComponent
          defaultValue={false}
          hasBorderBottom={true}
          label="Fixed Output Coin"
          description="Output coin cannot be changed"
          onChange={(value) => setValue('fixedCoinOut', value)}
        />
      </Div>
      <AddonAggregator />
      <Div mb="0.5rem" width="100%">
        <Div pb="0.5rem">
          <H1
            color="#B6B8BB"
            fontWeight={700}
            fontSize="0.875rem"
            fontFamily="Satoshi"
            lineHeight="1.313rem"
          >
            Use user slippage
          </H1>
          <P
            display="flex"
            color="#64686E"
            fontWeight={400}
            fontSize="0.75rem"
            fontFamily="Satoshi"
            lineHeight="1.125rem"
            flexDirection="column"
          >
            Slippage to be prefilled on first load
            <Span color="#D87706">Use user slippage is true</Span>
          </P>
        </Div>
        <Input
          p="1rem"
          mb="1.5rem"
          type="text"
          width="100%"
          color="#353A3E"
          height="2.75rem"
          background="#EDEDF1"
          borderRadius="0.5rem"
          border="1px solid #E0E0D7"
          {...register('slippage')}
        />
      </Div>
    </Div>
  );
};

export default AddonsBar;
