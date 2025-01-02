import { Li, Ul } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { OpenInNewSVG } from '@/components/svg';

import { NAV_ITEMS } from './menu-list.data';

const MenuList: FC = () => (
  <Ul display="inherit" flexDirection="inherit" gap="2rem">
    {NAV_ITEMS.map(({ name, url, id }, index) => (
      <Li
        key={index}
        color="#fff"
        display="flex"
        fontSize="1rem"
        listStyle="none"
        gap="0.25rem"
        alignItems="center"
        fontFamily="Satoshi"
        nHover={{ opacity: '.8' }}
        transition="all 300ms ease-in-out"
      >
        <Link
          href={url || id!}
          style={{ textDecoration: 'none' }}
          target={url ? '_blank' : undefined}
        >
          {name}
        </Link>
        {url && <OpenInNewSVG maxWidth="1rem" maxHeight="1rem" width="100%" />}
      </Li>
    ))}
  </Ul>
);

export default MenuList;
