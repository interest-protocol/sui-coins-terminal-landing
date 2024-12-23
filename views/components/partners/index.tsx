import { Div, H1 } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';
import { v4 } from 'uuid';

import { PARTNERS_IMAGES } from './partners.data';

const Partners: FC = () => (
  <Div px="1.5rem">
    <Div
      py="2.5rem"
      mx="auto"
      gap="0.5rem"
      display="flex"
      maxWidth="1440px"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <H1
        pb="2.5rem"
        color="#fff"
        fontWeight="700"
        lineHeight="100%"
        fontSize={['2.25rem', '2.25rem', '3.5rem']}
      >
        Our Partners
      </H1>
      <Div
        width="100%"
        height="auto"
        display="flex"
        flexWrap="wrap"
        borderRadius="1rem"
        border="1px solid"
        alignItems="center"
        justifyContent="center"
        py={['1rem', '1rem', '1rem', '2xl']}
        px={['1rem', '1rem', '1rem', '5rem']}
        borderColor="#46464A"
        nHover={{ borderColor: '#E2E2E6', DivShadow: '0 0 0.5rem #fff4' }}
      >
        {PARTNERS_IMAGES.map((item) => (
          <Div
            m="1rem"
            width="6rem"
            height="6rem"
            key={v4()}
            cursor="pointer"
            overflow="hidden"
          >
            <Link href={item.url} target="blank">
              <img
                src={item.image}
                alt={item.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  borderRadius: '1rem',
                }}
              />
            </Link>
          </Div>
        ))}
      </Div>
    </Div>
  </Div>
);

export default Partners;
