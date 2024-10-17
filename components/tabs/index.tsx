import { Nav } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import TabItem from './tab-item';
import { TabsProps } from './tabs.types';

export const Tabs: FC<TabsProps> = ({
  items,
  px,
  onChangeTab,
  defaultTabIndex = 0,
}) => {
  const [tabIndex, setTabIndex] = useState(defaultTabIndex);

  const handleChangeTab = (index: number) => () => {
    setTabIndex(index);
    onChangeTab?.(index);
  };

  return (
    <Nav
      mb="0.5rem"
      bg="#171F28"
      p="0.125rem"
      height="3rem"
      role="tablist"
      display="flex"
      flexDirection="row"
      position="relative"
      minWidth="max-content"
      width="fill-available"
      borderRadius="0.625rem"
    >
      {items.map((item, index) => (
        <TabItem
          px={px}
          key={v4()}
          item={item}
          isSelected={index === tabIndex}
          onChange={handleChangeTab(index)}
        />
      ))}
    </Nav>
  );
};

export * from './tabs.types';
