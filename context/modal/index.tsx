import { Modal } from '@interest-protocol/ui-kit';
import { ModalProps } from '@interest-protocol/ui-kit/dist/components/modal/modal.types';
import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react';

export interface ModalContext {
  handleClose: () => void;
  setModal: (node: ReactNode, props?: Partial<ModalProps>) => void;
}

const modalContext = createContext({} as ModalContext);

export const ModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = modalContext;
  const [component, setComponent] = useState<ReactNode>(null);
  const [modalProps, setModalProps] = useState<Omit<ModalProps, 'isOpen'>>({});

  const handleClose = () => {
    modalProps?.onClose?.();
    setComponent(null);
  };

  const setModal = (node: ReactNode, props = {} as Partial<ModalProps>) => {
    setComponent(node);
    setModalProps(props);
  };

  const value: ModalContext = {
    setModal,
    handleClose,
  };

  return (
    <Provider value={value}>
      <Modal
        {...(modalProps as ModalProps)}
        isOpen={!!component}
        onClose={handleClose}
        appElement={undefined}
      >
        {component}
      </Modal>
      {children}
    </Provider>
  );
};

export default modalContext;
