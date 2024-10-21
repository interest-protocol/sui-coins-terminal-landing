import { Button, Div, H1, Header, Nav } from '@stylin.js/elements';
import { useEffect, useState } from 'react';

import { MenuSVG, SuiCoinsLogoSVG, TimesSVG } from '../svg';
import MenuList from './menu-list';

const HeaderBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const handleResize = (e: MediaQueryListEvent) => {
      if (e.matches) {
        setOpenMenu(false);
      }
    };

    mediaQuery.addEventListener('change', handleResize);

    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <Header
      bg="#0E1218"
      pb="2rem"
      width="100%"
      display="inline-flex"
      flexDirection="column"
      zIndex={openMenu ? 99 : 'inherit'}
      minHeight={openMenu ? '100vh' : 'auto'}
      position={openMenu ? 'fixed' : 'unset'}
      left="0rem"
      px={openMenu ? '1rem' : 'unset'}
      pt="2rem"
    >
      <Div
        pb="1rem"
        justifyContent={[
          'space-between',
          'space-between',
          'space-between',
          'unset',
          'unset',
        ]}
        borderBottom={openMenu ? '1px solid #fff' : '1px solid #0e1218'}
        display={['inline-flex', 'inline-flex', 'inline-flex', 'grid', 'grid']}
      >
        <Div gridRowStart="1" justifySelf="left" gridColumnStart="1">
          <Div color="#fff" display="flex" flex="0 0 auto" alignItems="center">
            <Div maxHeight="1.5rem" maxWidth="1.5rem" mr="1rem">
              <SuiCoinsLogoSVG maxHeight="100%" maxWidth="100%" width="100%" />
            </Div>
            <H1 fontSize="1rem">Sui Coins</H1>
          </Div>
        </Div>
        <Nav gridRowStart="1" gridColumnStart="1" justifySelf="center">
          <Div display={['none', 'none', 'none', 'flex', 'flex']}>
            <MenuList />
          </Div>
        </Nav>
        <Button
          bg="unset"
          border="none"
          color="#0053DB"
          onClick={() => setOpenMenu(!openMenu)}
          display={['flex', 'flex', 'flex', 'none', 'none']}
        >
          {openMenu ? (
            <TimesSVG maxHeight="4rem" maxWidth="1.5rem" width="100%" />
          ) : (
            <MenuSVG maxHeight="4rem" maxWidth="2rem" width="100%" />
          )}
        </Button>
      </Div>
      {openMenu && (
        <Div
          pt="1rem"
          gap="1rem"
          flexDirection="column"
          display={['flex', 'flex', 'flex', 'none', 'none']}
        >
          <MenuList />
        </Div>
      )}
    </Header>
  );
};

export default HeaderBar;
