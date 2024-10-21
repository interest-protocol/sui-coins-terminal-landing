import { Div, P, Span } from '@stylin.js/elements';
import { useState } from 'react';

import {
  ArrowBottomLeftSVG,
  ArrowBottomRightSVG,
  ArrowTopLeftSVG,
  ArrowTopRightSVG,
  ChevronBottomSVG,
  ChevronUpSVG,
  SuiCoinsLogoSVG,
} from '@/components/svg';
import SwapTerminal from '@/components/swap-terminal';
import { Tabs } from '@/components/tabs';

import { WIDGET_ITEMS } from '../../../terminal.data';
import { getAlignment, positionStyles } from './widget-terminal.data';
import { IconPosition } from './widget-terminal.types';

const WidgetTerminal = () => {
  const [widgetSize, setWidgetSize] = useState<string>('3.5rem');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [iconPosition, setIconPosition] = useState<IconPosition>(null);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleArrowClick = (position: IconPosition) => {
    setIconPosition(position);
  };

  const handleWidgetSize = (tabIndex: number) => {
    if (tabIndex === 0) setWidgetSize('2.5rem');
    if (tabIndex === 1) setWidgetSize('3rem');
  };

  return (
    <Div
      px="1rem"
      width={['fill-available', '20rem', '23.313rem', '23.313rem', '23.313rem']}
    >
      <Div
        mb="1rem"
        bg="#28282F"
        color="#fff"
        display="flex"
        height="auto"
        borderRadius="1rem"
        alignItems="center"
        width="fill-available"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Div
          display="flex"
          width="fill-available"
          justifyContent="space-between"
        >
          <ArrowTopLeftSVG
            width="3rem"
            maxWidth="3rem"
            maxHeight="3rem"
            cursor="pointer"
            onClick={() => handleArrowClick('topLeft')}
          />
          <ArrowTopRightSVG
            width="3rem"
            maxWidth="3rem"
            maxHeight="3rem"
            cursor="pointer"
            onClick={() => handleArrowClick('topRight')}
          />
        </Div>
        <Div width="15.75rem" textAlign="center">
          <P
            color="#B6B8BB"
            fontWeight="500"
            lineHeight="1.875rem"
            px={['2rem', '2rem', '2rem', 'unset', 'unset']}
            fontSize={['0.75rem', '0.75rem', '0.75rem', '0.75rem', '0.75rem']}
          >
            Click on the arrows to see how the Jupiter Widget will appear on
            your web browser. Click on the logo to view the Jupiter Swap Modal.
          </P>
        </Div>
        <Div
          display="flex"
          width="fill-available"
          justifyContent="space-between"
        >
          <ArrowBottomLeftSVG
            width="3rem"
            maxWidth="3rem"
            maxHeight="3rem"
            cursor="pointer"
            onClick={() => handleArrowClick('bottomLeft')}
          />
          <ArrowBottomRightSVG
            width="3rem"
            maxWidth="3rem"
            maxHeight="3rem"
            cursor="pointer"
            onClick={() => handleArrowClick('bottomRight')}
          />
        </Div>
      </Div>
      <Div
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row', 'row', 'row']}
      >
        <Span
          color="#fff"
          fontWeight="700"
          fontSize="0.875rem"
          mb={['1rem', '1rem', 'unset', 'unset', 'unset']}
        >
          Set Size
        </Span>
        <Div
          width={['fill-available', '13.5rem', '13.5rem', '13.5rem', '13.5rem']}
        >
          <Tabs
            defaultTabIndex={1}
            items={WIDGET_ITEMS}
            onChangeTab={handleWidgetSize}
          />
        </Div>
      </Div>
      <Div
        zIndex={10}
        width="auto"
        height="auto"
        display="flex"
        position="fixed"
        {...getAlignment(iconPosition)}
        {...(iconPosition ? positionStyles[iconPosition] : {})}
      >
        <Div
          p="0.4rem"
          my="0.8rem"
          bg="#171F28"
          display="flex"
          width={widgetSize}
          height={widgetSize}
          cursor="pointer"
          nHover={{
            bg: '#1f2833',
          }}
          borderRadius="50%"
          alignItems="center"
          onClick={handleClick}
          justifyContent="center"
          border="1px solid #171F28"
        >
          {!isModalOpen ? (
            <SuiCoinsLogoSVG maxHeight="100%" maxWidth="100%" width="100%" />
          ) : iconPosition?.includes('top') ? (
            <ChevronBottomSVG
              color="#fff"
              width="100%"
              maxWidth="100%"
              maxHeight="100%"
            />
          ) : (
            <ChevronUpSVG
              color="#fff"
              width="100%"
              maxWidth="100%"
              maxHeight="100%"
            />
          )}
        </Div>
        {isModalOpen && (
          <Div bg="#171f28" height="40rem" display="flex" borderRadius="1rem">
            <SwapTerminal />
          </Div>
        )}
      </Div>
    </Div>
  );
};

export default WidgetTerminal;
