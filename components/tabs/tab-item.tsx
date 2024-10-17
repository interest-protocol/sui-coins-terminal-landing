import { Div } from '@stylin.js/elements';
import { FC } from 'react';

import NavItemText from './tab-item-text';
import { TabItemProps } from './tabs.types';

const TabItem: FC<TabItemProps> = ({ px, item, onChange, isSelected }) => {
  return (
    <Div
      p="0.2rem"
      role="tab"
      display="flex"
      cursor="pointer"
      onClick={onChange}
      alignItems="center"
      borderRadius="0.625rem"
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      nHover={{
        opacity: '0.8',
      }}
    >
      <NavItemText isSelected={isSelected} px={px}>
        {item.label}
      </NavItemText>
    </Div>
  );
};

export default TabItem;
