// CommonModal.jsx
import React from 'react';
import styles from  "../CommanModal/CommanModalStyles.module.css"
import { IoMdClose } from "react-icons/io"; 
const CommonModal = ({ isOpen, onClose, children }) => {
  return (
    
    isOpen && (
      <div className={styles.modal}>
        <div className={styles.modalContent}>
          <div className={styles.close} onClick={onClose}><IoMdClose /></div>
          {children}
        </div>
      </div>
    )
    
  );
};

export default CommonModal;
