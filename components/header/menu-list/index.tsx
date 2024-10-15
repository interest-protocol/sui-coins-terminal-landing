import { Li, Ul } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { NAV_ITEMS } from './menu-list.data';

const MenuList: FC = () => {
  return (
    <Ul display="inherit" flexDirection="inherit" gap="1rem">
      {NAV_ITEMS.map(({ name, url }, index) => (
        <Li
          key={index}
          color="#fff"
          display="flex"
          listStyle="none"
          fontSize="1rem"
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
