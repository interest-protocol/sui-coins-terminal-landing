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
        height="3rem"
        display="flex"
        fontSize="1rem"
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
          bg="#FFFFFF"
          width="100%"
          maxHeight="32rem"
          overflowY="auto"
          position="absolute"
          borderRadius="0.25rem"
          border="1px solid #E0E0D7"
        >
          {menuItems.map((value: string | number) => (
            <Div
              p="0.5rem"
              key={v4()}
              height="2rem"
              display="flex"
              color="#353A3E"
              fontSize="1rem"
              alignItems="flex-start"
              textTransform="capitalize"
              borderBottom="1px solid #E0E0D7"
              justifyContent="flex-start"
              nHover={{
                backgroundColor: '#d6d6cc',
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
