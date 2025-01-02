import { Div, Footer, P } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { SOCIAL } from '@/constants/social';

const FooterBar: FC = () => (
  <Footer
    pt="2rem"
    width="100%"
    bg="#0E1218"
    display="flex"
    alignItems="center"
    justifyContent="space-between"
    flexDirection={['column', 'column', 'column', 'row']}
  >
    <Div display="flex" justifyContent="center" alignItems="center">
      {SOCIAL.map(({ title, Icon, link }) => (
        <Link href={link} target="blank" key={title} title={title}>
          <Div
            mr="0.5rem"
            bg="#171F28"
            color="#FFF"
            width="2.5rem"
            display="flex"
            height="2.5rem"
            cursor="pointer"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
          >
            <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
          </Div>
        </Link>
      ))}
    </Div>
    <Div>
      <P
        p="0.5rem"
        color="#FFF"
        fontWeight={500}
        lineHeight="1.rem"
        fontSize={['0.7rem', '0.875rem']}
        fontFamily="Satoshi"
      >
        &copy; {new Date().getFullYear()} — Copyright All Rights reserved
      </P>
    </Div>
  </Footer>
);

export default FooterBar;
