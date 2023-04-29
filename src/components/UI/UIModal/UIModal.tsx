import React, { ReactElement, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';

import CloseModal from '../../Icons/CloseModal';

import * as S from './style';

type PropsPortal = {
  children: ReactElement | false;
};

type PropsModal = {
  children: ReactElement | false;
  toggle: () => void;
  open: boolean;
};

const Portal = ({ children }: PropsPortal) => {
  const mount = document.getElementById('modal');
  const el = document.createElement('div');

  useEffect(() => {
    mount?.appendChild(el);
    return () => {
      mount?.removeChild(el);
    };
  }, [mount, el]);

  return createPortal(children, el);
};

const UIModal = ({ children, toggle, open }: PropsModal) => (
  <Portal>
    {open && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <S.ModalWrapper>
          <S.ModalCard>
            <S.CloseButton onClick={toggle}>
              <CloseModal />
            </S.CloseButton>
            {children}
          </S.ModalCard>
          <S.Background onClick={toggle} />
        </S.ModalWrapper>
      </motion.div>
    )}
  </Portal>
);

export default UIModal;
