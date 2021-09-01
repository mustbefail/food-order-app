import ReactDOM from 'react-dom';

import styles from './Modal.module.css';

const Backdrop = ({ onHideCart }) => (
  <div className={styles.backdrop} onClick={onHideCart}></div>
);

const ModalOverlay = ({ children }) => (
  <div className={styles.modal}>
    <div className={styles.content}>{children}</div>
  </div>
);

const overlayElem = document.querySelector('#overlay');

const Modal = ({ onHideCart, children }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHideCart={onHideCart} />, overlayElem)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        overlayElem
      )}
    </>
  );
};

export default Modal;
