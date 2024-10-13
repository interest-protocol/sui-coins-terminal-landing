import { Div, H1 } from '@stylin.js/elements';
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
      height="100%"
      bg="#0E1218"
      minWidth="25%"
      color="#FFF"
      overflowY="auto"
      maxHeight="100%"
      borderRadius="1rem"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-start"
      width={['100%', '100%', '100%', '25%']}
    >
      <H1
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
          mt="0.5rem"
          mb="0.5rem"
          fontWeight={700}
          fontSize="0.875rem"
          fontFamily="satoshi"
          lineHeight="1.875rem"
        >
          Things you can configure
        </H1>
        <ToggleComponent
          defaultValue={false}
          hasBorderBottom={true}
          label="Fixed input mint"
          description="Input mint cannot be changed"
        />
        <ToggleComponent
          defaultValue={false}
          hasBorderBottom={true}
          label="Fixed input mint"
          description="Input mint cannot be changed"
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
          defaultValue={false}
          hasBorderBottom={true}
          description="User can freely switch between Exact In / Exact out mode."
        />
        <ToggleComponent
          defaultValue={false}
          hasBorderBottom={true}
          label="Fixed amount"
          description="Depending on Exact In / Exact Out, the amount cannot be changed"
        />
        <ToggleComponent
          defaultValue={false}
          hasBorderBottom={true}
          label="Use user slippage"
          description="Prevent Initial slippage from overriding user's last saved slippage"
        />
      </Div>
    </Div>
  );
};

export default Aside;
