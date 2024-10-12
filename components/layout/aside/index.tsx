import { Div, H1 } from '@stylin.js/elements';

import Dropdown from '@/components/element/dropdown';

const Aside = () => {
  const DROPDOWN_VALUE = ['default', 'value 1', 'value'];
  const handleDropdown = () => {
    console.log('dropdown value');
  };

  return (
    <Div
      p="1rem"
      display="flex"
      gap="0.5rem"
      height="100vh"
      bg="#0E1218"
      minWidth="25%"
      color="#FFF"
      overflowY="auto"
      minHeight="100%"
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
          menuItems={DROPDOWN_VALUE}
          defaultValue={DROPDOWN_VALUE[0]}
          onSelect={() => handleDropdown()}
        />
      </Div>
    </Div>
  );
};

export default Aside;
