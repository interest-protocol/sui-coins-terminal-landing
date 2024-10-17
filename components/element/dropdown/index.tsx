import { Button, Div } from '@stylin.js/elements';
import { FC, useState } from 'react';
import { v4 } from 'uuid';

import { ArrowDownSVG } from '@/components/svg';

import { DropdownProps } from './dropdown.types';

const Dropdown: FC<DropdownProps> = ({ onSelect, defaultValue, menuItems }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuItemClick = (value: string) => {
    onSelect(value);
    setIsDropdownOpen(false);
  };
  return (
    <Div position="relative" width="100%" mt="0.6rem">
      <Button
        p="1rem"
        mr="0.5rem "
        width="100%"
        display="flex"
        fontSize="1rem"
        height="2.75rem"
        cursor="pointer"
        color="#353A3E"
        alignItems="center"
        borderRadius="0.5rem"
        background="#EDEDF1"
        textTransform="capitalize"
        border="1px solid #E0E0D7"
        justifyContent="space-between"
        textAlign={['left', 'left', 'left', 'right']}
        onClick={toggleDropdown}
      >
        {defaultValue}
        <Div width="1.5rem" height="1.5rem">
          <ArrowDownSVG maxHeight="100%" maxWidth="100%" width="100%" />
        </Div>
      </Button>
      {isDropdownOpen && (
        <Div
          my="0.5rem"
          zIndex={999}
          width="100%"
          display="flex"
          overflowY="auto"
          maxHeight="32rem"
          alignItems="flex-start"
          position="absolute"
          borderRadius="0.5rem"
          background="#EDEDF1"
          flexDirection="column"
          justifyContent="flex-start"
          border="1px solid #A8A8A8"
        >
          {menuItems.map((value: string | number) => (
            <Div
              p="1rem"
              key={v4()}
              width="100%"
              fontSize="1rem"
              color="#353A3E"
              background="#EDEDF1"
              textTransform="capitalize"
              nHover={{
                backgroundColor: '#EBEDFF',
                transition: 'all 0.5s ease-in-out',
              }}
              onClick={() => handleMenuItemClick(value as string)}
            >
              {value}
            </Div>
          ))}
        </Div>
      )}
    </Div>
  );
};

export default Dropdown;
