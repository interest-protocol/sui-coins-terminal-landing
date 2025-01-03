import { Button, Div, H1, Header, Nav } from '@stylin.js/elements';
import Link from 'next/link';
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
      pb="2rem"
      bg="#0E1218"
      width="100%"
      display="inline-flex"
      flexDirection="column"
      px={openMenu ? '1rem' : 'unset'}
      zIndex={openMenu ? 99 : 'inherit'}
      minHeight={openMenu ? '100vh' : 'auto'}
      position={openMenu ? 'fixed' : 'unset'}
      pt={['2rem', '2rem', '2rem', '0', '0']}
    >
      <Div
        flex="1"
        pb="1rem"
        gap="1rem"
        alignItems="center"
        gridTemplateColumns="auto 1fr auto"
        display={['inline-flex', 'inline-flex', 'inline-flex', 'grid']}
        borderBottom={openMenu ? '1px solid #fff' : '1px solid #0e1218'}
        justifyContent={[
          'space-between',
          'space-between',
          'space-between',
          'unset',
          'unset',
        ]}
      >
        <Div gridRowStart="1" justifySelf="left" gridColumnStart="1">
          <Div color="#fff" display="flex" flex="0 0 auto" alignItems="center">
            <SuiCoinsLogoSVG maxHeight="2rem" maxWidth="3rem" width="100%" />
            <H1 fontSize="1rem" fontFamily="Satoshi">
              Sui Coins
            </H1>
          </Div>
        </Div>
        <Nav display={['none', 'none', 'none', 'flex']} justifyContent="center">
          <MenuList />
        </Nav>
        <Div display={['none', 'none', 'none', 'block']}>
          <Link href="https://t.me/SatoshiMedici" target="_blank">
            <Button
              all="unset"
              p="1rem"
              bg="#0053DB"
              color="#ffffff"
              fontFamily="Proto"
              borderRadius="2rem"
            >
              Get In touch
            </Button>
          </Link>
        </Div>
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
