import { Div, Span } from '@stylin.js/elements';
import { useForm, useWatch } from 'react-hook-form';

import Dropdown from '@/components/dropdown';
import { ToggleComponent } from '@/components/toogle';

import { AddonsFormProps } from './addons.types';

const AddonsBar = () => {
  const templateValues = ['default', 'value 1', 'value 2'];

  const form = useForm<AddonsFormProps>({
    defaultValues: {
      fixedAmount: false,
      fixedInputMint: false,
      simulateWallet: false,
      fixedOutputMint: false,
      strictTokenList: false,
      useUserSlippage: false,
      template: templateValues[0],
      exactOutputMode: templateValues[0],
      preferredExplorer: templateValues[0],
    },
  });

  const { control, setValue } = form;
  const template = useWatch({ control, name: 'template' });
  const exactOutputMode = useWatch({ control, name: 'exactOutputMode' });
  const preferredExplorer = useWatch({ control, name: 'preferredExplorer' });

  const handleDropdown = (field: keyof AddonsFormProps, value: string) => {
    setValue(field, value);
  };

  const handleToggle = (field: keyof AddonsFormProps, value: boolean) => {
    setValue(field, value);
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
      width={['100%', '100%', '100%', '20%', '20%']}
      minWidth={['100%', '100%', '100%', '20%', '20%']}
    >
      <Div mb="1rem" width="100%">
        <Span fontWeight={700} fontSize="0.875rem" lineHeight="1.875rem">
          Template
        </Span>
        <Dropdown
          defaultValue={template}
          menuItems={templateValues}
          onSelect={(value) => handleDropdown('template', value)}
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
          onChange={(value) => handleToggle('fixedInputMint', value)}
        />
        <ToggleComponent
          defaultValue={false}
          hasBorderBottom={true}
          label="Fixed output mint"
          description="Output mint cannot be changed"
          onChange={(value) => handleToggle('fixedOutputMint', value)}
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
          menuItems={templateValues}
          defaultValue={exactOutputMode}
          onSelect={(value) => handleDropdown('exactOutputMode', value)}
        />
      </Div>
      <Div width="100%">
        <ToggleComponent
          defaultValue={false}
          hasBorderBottom={true}
          label="Fixed amount"
          onChange={(value) => handleToggle('fixedAmount', value)}
          description="Depending on Exact In / Exact Out, the amount cannot be changed"
        />
        <ToggleComponent
          defaultValue={false}
          hasBorderBottom={true}
          label="Use user slippage"
          onChange={(value) => handleToggle('useUserSlippage', value)}
          description="Prevent Initial slippage from overriding user's last saved slippage"
        />
      </Div>
      <Div width="100%">
        <ToggleComponent
          defaultValue={false}
          hasBorderBottom={true}
          label="Strict Token List"
          onChange={(value) => handleToggle('strictTokenList', value)}
          description="The strict list contains a smaller set of validated tokens. To see all tokens, toggle 'off'."
        />
        <ToggleComponent
          defaultValue={false}
          hasBorderBottom={true}
          label="Simulate wallet"
          onChange={(value) => handleToggle('simulateWallet', value)}
          description="Simulate Terminal with a fake wallet passthrough (Testing available on Desktop only)"
        />
      </Div>
      <Div width="100%" pb="1rem">
        <Span
          mt="1.5rem"
          mb="0.5rem"
          fontWeight={700}
          fontSize="0.875rem"
          lineHeight="1.875rem"
        >
          Preferred Explorer
        </Span>
        <Dropdown
          menuItems={templateValues}
          defaultValue={preferredExplorer}
          onSelect={(value) => handleDropdown('preferredExplorer', value)}
        />
      </Div>
    </Div>
  );
};

export default AddonsBar;
