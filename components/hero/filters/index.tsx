import { Div, Span } from '@stylin.js/elements';
import { useForm, useWatch } from 'react-hook-form';

import Dropdown from '@/components/element/dropdown';
import { ToggleComponent } from '@/components/element/toogle';

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
      bg="#0E1218"
      color="#FFF"
      overflowY="auto"
      alignItems="center"
      borderRadius="1rem"
      flexDirection="column"
      justifyContent="center"
      height={['60vh', '60vh', '60vh', '100%', '100%']}
      width={['100%', '100%', '100%', '16.5rem', '16.5rem']}
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
      </Div>
      <Div mb="1rem">
        <Span
          mt="0.5rem"
          fontWeight={700}
          fontSize="0.875rem"
          lineHeight="1.875rem"
        >
          Things you can configure
        </Span>
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
      </Div>
      <Div width="100%" borderBottom="1px solid #A8A8A8" pb="1rem">
        <Span
          mt="1.5rem"
          mb="0.5rem"
          fontWeight={700}
          fontSize="0.875rem"
          lineHeight="1.875rem"
        >
          Exact output mode
        </Span>
        <Dropdown
          defaultValue={template}
          menuItems={templateValues}
          onSelect={(values) => handleDropdown(values)}
        />
      </Div>
      <Div width="100%">
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
