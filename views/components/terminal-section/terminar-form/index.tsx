import { Div, P } from '@stylin.js/elements';
import { useState } from 'react';

import { Tabs } from '../../../../components/tabs';
import { TERMINAL_TYPE } from '../terminal.data';
import { IntegratedTab, ModalTab, WidgetTab } from './tabs';

const TerminalOption = [ModalTab, IntegratedTab, WidgetTab];

const TerminalForm = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleOnChangeTab = (index: number) => {
    setTabIndex(index);
  };

  const renderTabContent = () => {
    const TabContent = TerminalOption[tabIndex];
    return <TabContent />;
  };

  return (
    <Div
      bg="#0E1218"
      height="100%"
      display="flex"
      alignItems="center"
      width="fill-available"
      borderRadius="inherit"
      flexDirection="column"
      py={['1.5rem', '1.5rem', '1.5rem', '1.5rem', '1.5rem']}
      px={['0rem', '0rem', '0rem', '1.5rem', '1.5rem']}
    >
      <Div
        px="1rem"
        mb="1rem"
        width={[
          'fill-available',
          'fill-available',
          '20rem',
          '21.813rem',
          '21.813rem',
        ]}
        position="relative"
      >
        <Tabs items={TERMINAL_TYPE} onChangeTab={handleOnChangeTab} />
        <P
          color="#B6B8BB"
          height="2.25rem"
          textAlign="center"
          fontSize="0.75rem"
          fontFamily="Satoshi"
          lineHeight="1.125rem"
        >
          {TERMINAL_TYPE[tabIndex].description}
        </P>
      </Div>
      <Div
        my="auto"
        height="85%"
        display="flex"
        alignItems="center"
        width="fill-available"
        justifyContent="center"
      >
        {renderTabContent()}
      </Div>
    </Div>
  );
};

export default TerminalForm;
