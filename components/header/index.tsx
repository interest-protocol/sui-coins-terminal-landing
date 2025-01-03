import { Button, Div, H1, Header, Nav } from '@stylin.js/elements';
import Link from 'next/link';
import { FC, useEffect, useState } from 'react';

import { MenuSVG, SuiCoinsLogoSVG, TimesSVG } from '../svg';
import MenuList from './menu-list';

const HeaderBar: FC = () => {
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
      inset="0"
      pb="2rem"
      bg="#0E1218"
      width="100%"
      display="inline-flex"
      flexDirection="column"
      px={openMenu ? '1rem' : 'unset'}
      py={openMenu ? '1.5rem' : 'none'}
      zIndex={openMenu ? 99 : 'inherit'}
      position={openMenu ? 'fixed' : 'unset'}
      minHeight={openMenu ? '100vh' : 'auto'}
    >
      <Div
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
        <Div display="flex" gap="1rem" alignItems="center">
          <SuiCoinsLogoSVG maxHeight="2rem" maxWidth="3rem" width="100%" />
          <H1
            color="#ffffff"
            fontSize="1rem"
            whiteSpace="nowrap"
            fontFamily="Satoshi"
            textTransform="uppercase"
          >
            Sui Coins
          </H1>
        </Div>
        <Nav
          gap="1rem"
          display={['none', 'none', 'none', 'flex']}
          justifyContent="center"
        >
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
