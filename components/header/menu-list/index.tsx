import { Li } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { OpenInNewSVG } from '@/components/svg';

import { NAV_ITEMS } from './menu-list.data';

const MenuList: FC = () => (
  <>
    {NAV_ITEMS.map(({ name, url, id }, index) => (
      <Link
        key={index}
        href={url || id!}
        style={{ textDecoration: 'none', display: 'flex' }}
        target={url ? '_blank' : undefined}
      >
        <Li
          mx="auto"
          color="#fff"
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
