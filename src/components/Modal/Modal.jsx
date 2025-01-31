import s from "./Modal.module.css";

const Modal = ({ onClick, children }) => {
  return (
    <div onClick={onClick} className={s.modalOverlay}>
      {children}
    </div>
  );
};

export default Modal;