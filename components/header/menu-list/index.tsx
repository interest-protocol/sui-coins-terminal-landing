import { Li, Ul } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { NAV_ITEMS } from './menu-list.data';

const MenuList: FC = () => {
  return (
    <Ul display="inherit" flexDirection="inherit" gap="2rem">
      {NAV_ITEMS.map(({ name, url }, index) => (
        <Li
          key={index}
          color="#fff"
          display="flex"
          fontSize="1rem"
          listStyle="none"
          fontFamily="Satoshi"
          nHover={{ opacity: '.8' }}
          transition="all 300ms ease-in-out"
        >
          <Link href={url} style={{ textDecoration: 'none' }}>
            {name}
          </Link>
        </Li>
      ))}
    </Ul>
  );
};

export default MenuList;
