import { Div, H1, Input } from '@stylin.js/elements';
import { useForm, useWatch } from 'react-hook-form';

import Dropdown from '@/components/element/dropdown';
import { ToggleComponent } from '@/components/element/toggle';

import { FilterForm } from './filter.types';

const Aside = () => {
  const templateValues = ['default', 'value 1', 'value 2'];
  const form = useForm<FilterForm>({
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
      gap="0.5rem"
      display="flex"
      bg="#0E1218"
      color="#FFF"
      overflowY="auto"
      height="47.5rem"
      maxHeight="100%"
      minWidth="16.5rem"
      borderRadius="1rem"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      width={['100%', '100%', '100%', '16.5rem']}
    >
      <H1
        mt="0.5rem"
        fontWeight={700}
        fontSize="0.875rem"
        fontFamily="satoshi"
        lineHeight="1.875rem"
      >
        Template
      </H1>
      <Div width="100%">
        <Dropdown
          defaultValue={template}
          menuItems={templateValues}
          onSelect={(values) => handleDropdown(values)}
        />
        <H1
          mt="1.5rem"
          fontWeight={700}
          fontSize="0.875rem"
          fontFamily="satoshi"
          lineHeight="1.875rem"
        >
          Things you can configure
        </H1>
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
        <H1
          mt="1.5rem"
          mb="0.5rem"
          fontWeight={700}
          fontSize="0.875rem"
          fontFamily="satoshi"
          lineHeight="1.875rem"
        >
          Exact output mode
        </H1>
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
        <H1
          mt="1.5rem"
          mb="0.5rem"
          fontWeight={700}
          fontSize="0.875rem"
          fontFamily="satoshi"
          lineHeight="1.875rem"
        >
          Preferred Explorer
        </H1>
        <Dropdown
          defaultValue={template}
          menuItems={templateValues}
          onSelect={(values) => handleDropdown(values)}
        />
      </Div>
    </Div>
  );
};

export default Aside;
