import { useState } from "react";
import styles from "./ProductModal.module.css";

export const ProductModal = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setModalOpen(true)} className={styles.openButton}>
        Open Modal
      </button>
      {modalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            modal
            <button onClick={() => setModalOpen(false)}>Close modal</button>
          </div>
        </div>
      )}
    </div>
  );
};
