import { Div, Li, Nav } from '@stylin.js/elements';
import Link from 'next/link';

import { NAV_ITEMS } from './menu-list.data';

const MenuList = () => {
  return (
    <Nav gridRowStart="1" gridColumnStart="1" justifySelf="center">
      <Div gap="1rem" display="flex" alignItems="center">
        {NAV_ITEMS.map(({ name, url }, index) => (
          <Link href={url} key={index} style={{ textDecoration: 'none' }}>
            <Li
              display="flex"
              listStyle="none"
              fontSize="1.25rem"
              nHover={{ opacity: '.8' }}
              transition="all 300ms ease-in-out"
            >
              {name}
            </Li>
          </Link>
        ))}
      </Div>
    </Nav>
  );
};

export default MenuList;
