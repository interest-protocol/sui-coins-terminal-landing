import { Li } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { OpenInNewSVG } from '@/components/svg';

import { NAV_ITEMS } from './menu-list.data';
import { MenuListProps } from './menu-list.types';

const MenuList: FC<MenuListProps> = ({ onClose }) => (
  <>
    {NAV_ITEMS.map(({ name, url, id }, index) => (
      <Link
        key={index}
        href={url || id!}
        onClick={() => onClose?.()}
        target={url ? '_blank' : undefined}
        style={{ textDecoration: 'none', display: 'flex' }}
      >
        <Li
          mx="auto"
          color="#fff"
          width="100%"
          gap="0.25rem"
          display="flex"
          fontSize="1rem"
          listStyle="none"
          textAlign="center"
          alignItems="center"
          fontFamily="Satoshi"
          nHover={{ opacity: '.8' }}
          transition="all 300ms ease-in-out"
          p={['0.5rem', '0.5rem', '0.5rem', 'none']}
        >
          {name}
          {url && (
            <OpenInNewSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          )}
        </Li>
      </Link>
    ))}
  </>
);

export default MenuList;
