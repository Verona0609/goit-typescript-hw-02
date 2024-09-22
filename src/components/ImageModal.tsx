import { useEffect } from "react";
import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import React from "react";

Modal.setAppElement("#root");

type ImageModalProps = {
  modalIsOpen: boolean;
  closeModal: () => void;
  image: string | null;
};

const ImageModal: React.FC<ImageModalProps> = ({
  modalIsOpen,
  closeModal,
  image,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [closeModal]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Image Modal"
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.modalcontent}>
        {image ? (
          <img src={image} alt="Large" className={styles.largeimage} />
        ) : (
          <p>No image available</p> // Якщо image є null
        )}
      </div>
    </Modal>
  );
};

export default ImageModal;
