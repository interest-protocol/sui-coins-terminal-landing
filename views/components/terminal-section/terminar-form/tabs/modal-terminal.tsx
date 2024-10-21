import { Button, Div, Span } from '@stylin.js/elements';

import SwapTerminal from '@/components/swap-terminal';
import { useModal } from '@/hooks/use-modal';

const ModalTerminal = () => {
  const { setModal, handleClose } = useModal();

  const handleModal = () => {
    setModal(<SwapTerminal />, {
      isOpen: true,
      custom: true,
      onClose: handleClose,
    });
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
