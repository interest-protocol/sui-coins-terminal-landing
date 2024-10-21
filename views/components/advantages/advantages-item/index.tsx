import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { AdvantageItemProps } from './advantage-item.types';
import AdvantageItemCodeSide from './code-side';

const AdvantageItem: FC<AdvantageItemProps> = ({
  code,
  title,
  invert,
  description,
  buttonList,
}) => (
  <Div
    px="2rem"
    display="flex"
    justifyContent="space-between"
    flexDirection={[
      'column',
      'column',
      'column',
      invert ? 'row-reverse' : 'row',
      invert ? 'row-reverse' : 'row',
    ]}
    gap="4rem"
  >
    <Div
      display="flex"
      flexDirection="column"
      gap="2rem"
      width={['100%', '100%', '100%', '35rem', '35rem']}
      my="auto"
      justifyContent="center"
    >
      <P
        color="#fff"
        fontWeight="700"
        fontSize="1.875rem"
        lineHeight="2.375rem"
        textAlign={['center', 'center', 'center', 'left', 'left']}
      >
        {title}
      </P>
      <P
        color="#B6B8BB"
        fontWeight="500"
        fontSize="1.125rem"
        lineHeight="1.75rem"
        textAlign={['center', 'center', 'center', 'left', 'left']}
      >
        {description}
      </P>
      <Div
        display="flex"
        mx={['auto', 'auto', 'auto', 'unset', 'unset']}
        gap="1rem"
        justifyContent={['center', 'center', 'center', 'unset', 'unset']}
        flexWrap="wrap"
      >
        {buttonList.map(({ title, onClick, Icon }) => (
          <Button
            key={v4()}
            px="1rem"
            py="0.6rem"
            color="#fff"
            fontSize="1rem"
            fontWeight="500"
            bg="transparent"
            cursor="pointer"
            width="fit-content"
            borderRadius="10rem"
            border="1px solid #ddd"
            transition="all 300ms ease-in-out"
            nHover={{
              scale: '1.1',
            }}
            nActive={{
              opacity: 0.4,
              scale: '1',
            }}
            onClick={onClick}
            display="flex"
            gap="1rem"
            alignItems="center"
          >
            {title}
            {Icon && (
              <Icon maxHeight="1.25rem" maxWidth="1.25rem" width="1.25rem" />
            )}
          </Button>
        ))}
      </Div>
    </Div>
    <AdvantageItemCodeSide code={code} />
  </Div>
);

export default AdvantageItem;
