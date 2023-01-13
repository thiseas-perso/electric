import { motion } from 'framer-motion';
import Backdrop from '../Backdrop';
const Modal = ({ handleClose, children, open }) => {
  if (!open) return null;
  return (
    <>
      <Backdrop onClick={handleClose} />
      <div className="fixed top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-20">
        {children}
        <button onClick={handleClose}>Close</button>
      </div>
    </>
  );
};

export default Modal;
