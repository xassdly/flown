import type { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './modal.css';
import { useEffect } from 'react';

type ModalProps = {
  children: ReactNode;
  onClose: () => void;
  isOpen: boolean;
};

const Modal = ({ children, onClose, isOpen }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`);
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('--scrollbar-width');
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.removeProperty('--scrollbar-width');
    };
  }, [isOpen]);
  
  return ReactDOM.createPortal(
    <div className="modal-overlay" onClick={onClose}>
      {children}
    </div>,
    document.body
  );
};

export default Modal;
