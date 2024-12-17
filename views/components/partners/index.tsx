import { Box, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';
import { v4 } from 'uuid';

import { PARTNERS_IMAGES } from './partners.data';

const Partners: FC = () => (
  <Box px="xl">
    <Box
      py="8xl"
      my="2rem"
      gap="0.5rem"
      display="flex"
      maxWidth="1440px"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="center"
    >
      <Typography
        pb="8xl"
        size="large"
        variant="title"
        fontWeight="700"
        color="#fff"
        lineHeight="100%"
        fontSize={['2.25rem', '2.25rem', '3.5rem']}
      >
        Our Partners
      </Typography>
      <Box
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
          <Box
            m="1rem"
            key={v4()}
            width="auto"
            cursor="pointer"
            overflow="hidden"
          >
            <Link href={item.url} target="blank">
              <img
                src={item.image}
                alt={item.label}
                style={{
                  width: '5rem',
                  height: '5rem',
                  objectFit: 'cover',
                }}
              />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

export default Partners;
