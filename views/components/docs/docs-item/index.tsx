import { Button, Div, P } from '@stylin.js/elements';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { v4 } from 'uuid';

import { OpenInNewSVG } from '@/components/svg';
import { copyToClipboard } from '@/utils/clipboard';

import { AddonsFormProps } from '../../terminal-section/addons/addons.types';
import { DocsItemProps } from '../docs.types';
import DocsCodeSnippet from './docs-code-snippet';

const DocsItem: FC<DocsItemProps> = ({
  code,
  title,
  invert,
  buttonList,
  description,
  ...props
}) => {
  const { getValues } = useFormContext<AddonsFormProps>();
  const handleCopyToClipBoard = () => copyToClipboard(code(getValues()));
  const goToUrl = (url: string) => () =>
    window.open(url, '_blank', 'noreferrer');

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
          {buttonList.map(({ title, url, isCopyToClipBoard }) => (
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
              onClick={
                isCopyToClipBoard
                  ? handleCopyToClipBoard
                  : url
                    ? goToUrl(url)
                    : undefined
              }
            >
              {title}
              {url && (
                <OpenInNewSVG
                  maxHeight="1.25rem"
                  maxWidth="1.25rem"
                  width="1.25rem"
                />
              )}
            </Button>
          ))}
        </Div>
      </Div>
      <DocsCodeSnippet code={code} {...props} />
    </Div>
  );
};

export default DocsItem;
