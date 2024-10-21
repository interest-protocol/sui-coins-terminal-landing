import { SwapTerminal } from '@interest-protocol/sui-coins-terminal';
import { Button, Div, Span } from '@stylin.js/elements';

import { useModal } from '@/hooks/use-modal';

const ModalTerminal = () => {
  const { setModal, handleClose } = useModal();

  const handleModal = () => {
    setModal(
      <SwapTerminal
        typeIn="0x2::sui::SUI" // SUI address
        projectAddress="0xdb3a22be6a37c340c6fd3f67a7221dfb841c818442d856f5d17726f4bcf1c8af" // Project DAO address
        typeOut="0x07ab9ba99abd9af0d687ae55079601192be5a12d1a21c8c4cd9f1a17519111e0::emoji::EMOJI" // Target coin address
      />,
      {
        isOpen: true,
        custom: true,
        onClose: handleClose,
      }
    );
  };
  return (
    <Div
      display="flex"
      width="21.813rem"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
    >
      <Button
        mb="1rem"
        bg="#28282F"
        border="none"
        cursor="pointer"
        height={['9rem', '9rem', '9rem', '12.688rem', '12.688rem']}
        borderRadius="1rem"
        nHover={{
          opacity: '0.7',
        }}
        width={['50%', '50%', '16.5rem', '16.5rem', '16.5rem']}
        onClick={handleModal}
      />
      <Span color="#fff" fontWeight="700" fontSize="0.875rem">
        Click to Launch Terminal Modal
      </Span>
    </Div>
  );
};

export default ModalTerminal;
