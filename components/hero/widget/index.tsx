import { Div, P, Span } from '@stylin.js/elements';

import {
  ArrowBottomLeftSVG,
  ArrowBottomRightSVG,
  ArrowTopLeftSVG,
  ArrowTopRightSVG,
} from '@/components/svg';
import { Tabs } from '@/components/tabs';

import { WIDGET_ITEMS } from '../hero.data';

const HeroWidget = () => {
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
          />
          <ArrowTopRightSVG
            width="3rem"
            maxWidth="3rem"
            maxHeight="3rem"
            cursor="pointer"
          />
        </Div>
        <Div width="15.75rem" textAlign="center">
          <P
            px={['2rem', '2rem', '2rem', 'unset', 'unset']}
            color="#B6B8BB"
            fontSize={['0.75rem', '0.75rem', '0.75rem', '0.75rem', '0.75rem']}
            fontWeight="500"
            lineHeight="1.875rem"
          >
            Click on the arrows to see how the Jupiter Widget will appear on
            your web browser.Click on the logo to view the Jupiter Swap Modal.
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
          />
          <ArrowBottomRightSVG
            width="3rem"
            maxWidth="3rem"
            maxHeight="3rem"
            cursor="pointer"
          />
        </Div>
      </Div>
      <Div
        display="flex"
        alignItems="center"
        flexDirection={['column', 'column', 'row', 'row', 'row']}
        justifyContent="space-between"
      >
        <Span
          mb={['1rem', '1rem', 'unset', 'unset', 'unset']}
          fontSize="0.875rem"
          fontWeight="700"
          color="#fff"
        >
          Set Size
        </Span>
        <Div
          width={['fill-available', '13.5rem', '13.5rem', '13.5rem', '13.5rem']}
        >
          <Tabs items={WIDGET_ITEMS} />
        </Div>
      </Div>
    </Div>
  );
};

export default HeroWidget;
