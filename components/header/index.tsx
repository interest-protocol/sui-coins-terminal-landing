import { Div, H1 } from '@stylin.js/elements';

import { SuiCoinsLogoSVG } from '../svg';
import MenuList from './menu-list';

const Header = () => {
  return (
    <Div display="grid" border="1px solid red" alignItems="center">
      <Div gridColumnStart="1" gridRowStart="1" justifySelf="left">
        <Div
          display="flex"
          flex="0 0 auto"
          alignItems="center"
          justifyContent="space-between"
        >
          <Div maxHeight="4rem" maxWidth="4rem" mr="1rem">
            <SuiCoinsLogoSVG maxHeight="100%" maxWidth="100%" width="100%" />
          </Div>
          <H1 fontSize="1rem">Sui Coins</H1>
        </Div>
      </Div>
      <MenuList />
    </Div>
  );
};

export default Header;
