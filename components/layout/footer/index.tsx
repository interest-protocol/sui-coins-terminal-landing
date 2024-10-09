import { Div, P } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';

import { SOCIAL } from '@/constants/social';

const Footer: FC = () => {
  return (
    <Div
      py="1rem"
      px="2rem"
      width="100%"
      display="flex"
      bg="#0E1218"
      alignItems="center"
      justifyContent="space-between"
    >
      <Div display="flex" justifyContent="center" alignItems="center">
        {SOCIAL.map(({ title, Icon, link }) => {
          return (
            <Link href={link} target="blank" key={title} title={title}>
              <Div
                p="0.5rem"
                m="0.5rem"
                bg="#171F28"
                color="#FFF"
                cursor="pointer"
                height="2.5rem"
                width="2.5rem"
                borderRadius="50%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
              </Div>
            </Link>
          );
        })}
      </Div>
      <Div>
        <P
          color="#FFF"
          fontWeight={500}
          lineHeight="1.rem"
          fontSize={['0.5rem', ['0.5rem', '0.5rem', '0.875rem']]}
          fontFamily="Satoshi"
        >
          &copy; {new Date().getFullYear()} — Copyright All Rights reserved
        </P>
      </Div>
    </Div>
  );
};
export default Footer;
