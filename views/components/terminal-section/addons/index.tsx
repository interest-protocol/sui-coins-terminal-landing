import { Div, Input, Span } from '@stylin.js/elements';
import { useForm, useWatch } from 'react-hook-form';

import Dropdown from '@/components/dropdown';
import { ToggleComponent } from '@/components/toogle';

import { AddonsFormProps } from './addons.types';

const AddonsBar = () => {
  const templateValues = ['default', 'value 1', 'value 2'];
  const form = useForm<AddonsFormProps>({
    defaultValues: {
      template: templateValues[0],
    },
  });

  const { control, setValue } = form;
  const template = useWatch({
    control,
    name: 'template',
  });

  const handleDropdown = (value: string) => {
    templateValues.filter((item) => item === value);
    setValue('template', value);
  };

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
      width={['100%', '100%', '100%', '25%', '25%']}
      minWidth={['100%', '100%', '100%', '25%', '25%']}
    >
      <Div mb="1rem" width="100%">
        <Span fontWeight={700} fontSize="0.875rem" lineHeight="1.875rem">
          Template
        </Span>
        <Dropdown
          defaultValue={template}
          menuItems={templateValues}
          onSelect={(values) => handleDropdown(values)}
        />
        <Span
          mt="1.5rem"
          fontWeight={700}
          fontSize="0.875rem"
          fontFamily="satoshi"
          lineHeight="1.875rem"
        >
          Things you can configure
        </Span>
        <ToggleComponent
          hasToggle={true}
          hasBorderTop={false}
          hasBorderBottom={true}
          label="Fixed input mint"
          description="Input mint cannot be changed"
        />
        <ToggleComponent
          hasToggle={true}
          hasBorderTop={false}
          hasBorderBottom={true}
          label="Fixed input mint"
          description="Output mint cannot be changed"
        />
        <Dropdown
          defaultValue={template}
          menuItems={templateValues}
          onSelect={(values) => handleDropdown(values)}
        />
        <Span
          mt="1.5rem"
          mb="0.5rem"
          fontWeight={700}
          fontSize="0.875rem"
          fontFamily="satoshi"
          lineHeight="1.875rem"
        >
          Exact output mode
        </Span>
        <ToggleComponent
          hasToggle={true}
          hasBorderTop={false}
          hasBorderBottom={true}
          description="User can freely switch between Exact In / Exact out mode."
        />
        <ToggleComponent
          hasToggle={true}
          hasBorderTop={false}
          hasBorderBottom={true}
          label="Fixed amount"
          description="Depending on Exact In / Exact Out, the amount cannot be changed"
        />
        <ToggleComponent
          hasToggle={true}
          hasBorderTop={false}
          hasBorderBottom={true}
          label="Use user slippage"
          description="Prevent Initial slippage from overriding user's last saved slippage"
        />
        <ToggleComponent
          hasToggle={false}
          hasBorderTop={false}
          hasBorderBottom={false}
          subtitle="Use user slippage is true"
          label="Use user slippage"
          description="Slippage to be prefilled on first load"
        />
        <Input
          p="1rem"
          mb="1.5rem"
          type="text"
          width="100%"
          height="2.75rem"
          cursor="pointer"
          color="#353A3E"
          borderRadius="0.5rem"
          background="#EDEDF1"
          textTransform="capitalize"
          border="1px solid #E0E0D7"
        />
        <ToggleComponent
          hasToggle={false}
          hasBorderTop={true}
          label="Initial amount"
          hasBorderBottom={false}
          description="Amount to be prefilled on first load"
        />
        <Input
          p="1rem"
          mb="1.5rem"
          type="text"
          width="100%"
          height="2.75rem"
          cursor="pointer"
          color="#353A3E"
          borderRadius="0.5rem"
          background="#EDEDF1"
          textTransform="capitalize"
          border="1px solid #E0E0D7"
        />
        <ToggleComponent
          hasToggle={true}
          hasBorderTop={true}
          hasBorderBottom={true}
          label="Strict token list"
          description="The strict list contains a smaller set of validated tokens. To see all tokens, toggle off."
        />
        <ToggleComponent
          hasToggle={true}
          hasBorderTop={false}
          hasBorderBottom={true}
          label="Simulate wallet"
          description="Simulate Terminal with a fake wallet passthrough
(Testing available on Desktop only)"
        />
        <Span
          mt="2rem"
          mb="0.5rem"
          fontWeight={700}
          fontSize="0.875rem"
          fontFamily="satoshi"
          lineHeight="1.875rem"
        >
          Preferred Explorer
        </Span>
        <Dropdown
          defaultValue={template}
          menuItems={templateValues}
          onSelect={(values) => handleDropdown(values)}
        />
      </Div>
    </Div>
  );
};

export default AddonsBar;
