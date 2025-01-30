import s from "./Modal.module.css";

const Modal = ({children}) => {
    return (
        <div className={s.modalOverlay}>
            {children}
        </div>
    );
}

export default Modal;