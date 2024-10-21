import { Div } from '@stylin.js/elements';
import { useState } from 'react';

import { ChevronBottomSVG, SuiCoinsLogoSVG } from '@/components/svg';

const SwapModalTerminal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Div
      top="2rem"
      zIndex={99}
      right="2rem"
      width="auto"
      height="auto"
      display="flex"
      position="absolute"
      alignItems="flex-end"
      flexDirection="column"
      justifyContent="flex-end"
    >
      <Div
        p="0.5rem"
        mb="0.8rem"
        bg="#171F28"
        width="3.5rem"
        display="flex"
        height="3.5rem"
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
        ) : (
          <ChevronBottomSVG
            color="#fff"
            width="100%"
            maxWidth="100%"
            maxHeight="100%"
          />
        )}
      </Div>
      <Div
        bg="#171f28"
        width="25rem"
        height="30rem"
        borderRadius="1rem"
        transition="opacity 0.3s ease, transform 0.3s ease"
        opacity={isModalOpen ? 1 : 0}
        transform={isModalOpen ? 'translateY(0)' : 'translateY(20px)'}
        visibility={isModalOpen ? 'visible' : 'hidden'}
      ></Div>
    </Div>
  );
};

export default SwapModalTerminal;
