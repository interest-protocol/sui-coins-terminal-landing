import { Div, Span } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { TabItemPropsItemTextProps } from './tabs.types';

const NavItemText: FC<PropsWithChildren<TabItemPropsItemTextProps>> = ({
  isSelected,
  children,
  px,
}) => {
  return (
    <Div
      py="0.635rem"
      role="tabpanel"
      fontFamily="Proto"
      position="relative"
      px={px ?? ['2rem', '2rem', '1.5rem']}
    >
      <Span
        zIndex={2}
        fontSize="1rem"
        position="relative"
        fontWeight="600"
        color={isSelected ? '#000' : '#fff'}
      >
        {children}
      </Span>
      {isSelected && (
        <Div
          zIndex={1}
          top="0"
          left="0"
          bg="#fff"
          width="100%"
          height="100%"
          position="absolute"
          borderRadius="0.625rem"
          boxShadow="0px 2px 4px -2px #0d10170a, 0px 4px 8px -2px #0d10171f"
          nHover={{
            bg: '#fff',
          }}
        />
      )}
    </Div>
  );
};
export default NavItemText;
