import { Div, Span } from '@stylin.js/elements';
import { FC, PropsWithChildren } from 'react';

import { TabItemPropsItemTextProps } from './tabs.types';

const NavItemText: FC<PropsWithChildren<TabItemPropsItemTextProps>> = ({
  isSelected,
  children,
}) => {
  return (
    <Div
      px="0.5rem"
      width="100%"
      py="0.635rem"
      role="tabpanel"
      fontFamily="Proto"
      textAlign="center"
      position="relative"
    >
      <Span
        zIndex={2}
        fontWeight="600"
        position="relative"
        color={isSelected ? '#000' : '#fff'}
        fontSize={['0.7rem', '0.7rem', '0.7rem', '0.9rem', '0.9rem']}
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
