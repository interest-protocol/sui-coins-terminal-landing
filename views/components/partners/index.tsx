import { Box } from '@interest-protocol/ui-kit';
import { Img, P } from '@stylin.js/elements';
import Link from 'next/link';
import { FC } from 'react';
import { v4 } from 'uuid';

import { PARTNERS_IMAGES } from './partners.data';

const Partners: FC = () => (
  <>
    <P
      color="#fff"
      fontWeight="700"
      textAlign="center"
      fontSize="1.875rem"
      lineHeight="2.375rem"
    >
      Successfully Integrated
    </P>
    <Box
      gap="2rem"
      width="100%"
      height="auto"
      display="flex"
      flexWrap="wrap"
      alignItems="center"
      justifyContent="center"
      py={['m', 'm', 'm', '2xl']}
      px={['m', 'm', 'm', '5rem']}
    >
      {PARTNERS_IMAGES.map((item) => (
        <Link key={v4()} href={item.url} target="blank">
          <Img
            width="6rem"
            src={item.image}
            alt={item.label}
            objectFit="cover"
            borderRadius="1rem"
          />
        </Link>
      ))}
    </Box>
  </>
);

export default Partners;
