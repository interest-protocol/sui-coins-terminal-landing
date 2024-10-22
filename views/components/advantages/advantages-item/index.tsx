import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { v4 } from 'uuid';

import { copyToClipboard } from '@/utils/clipboard';

import { AdvantageItemProps } from './advantage-item.types';
import AdvantageItemCodeSide from './code-side';

const AdvantageItem: FC<AdvantageItemProps> = ({
  code,
  title,
  invert,
  description,
  buttonList,
}) => {
  const handleCopyToClipBoard = () => {
    copyToClipboard(code);
  };

  return (
    <Div
      px="2rem"
      gap="4rem"
      display="flex"
      justifyContent="space-between"
      flexDirection={[
        'column',
        'column',
        'column',
        invert ? 'row-reverse' : 'row',
        invert ? 'row-reverse' : 'row',
      ]}
    >
      <Div
        my="auto"
        gap="2rem"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width={['100%', '100%', '100%', '35rem', '35rem']}
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
          {buttonList.map(({ title, onClick, Icon, isCopyToClipBoard }) => (
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
              gap="1rem"
              display="flex"
              alignItems="center"
              onClick={!isCopyToClipBoard ? onClick : handleCopyToClipBoard}
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
};

export default AdvantageItem;
