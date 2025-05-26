import { XIcon } from "@phosphor-icons/react/dist/ssr";
import type { ReactNode } from "react";
import ReactModal from "react-modal";

import './custom-modal.css';

interface ICustomModal {
  isOpen: boolean;
  closeModal: () => void;
  className?: string;
  modalTitle?: string;
  children: ReactNode | ReactNode[];
  shouldCloseOnEsc?: boolean;
  shouldCloseOnOverlayClick?: boolean;
}

export default function CustomModal({
  isOpen,
  className = '',
  modalTitle,
  children,
  shouldCloseOnEsc = false,
  shouldCloseOnOverlayClick = false,
  closeModal
}: ICustomModal) {
  return (
    <ReactModal
      isOpen={isOpen}
      className={`custom-modal ${className}`}
      shouldCloseOnEsc={shouldCloseOnEsc}
      shouldCloseOnOverlayClick={shouldCloseOnOverlayClick}
    >
      <section className="custom-modal-container">
        <div className="custom-modal-header">
          {modalTitle && <h1>{modalTitle}</h1>}
          <button type="button" onClick={closeModal}>
            <XIcon size={18} color="#f4f4f4"  weight="bold"/>
          </button>
        </div>
        <div className="custom-modal-content">
          {children}
        </div>
      </section>
    </ReactModal>
  );
}