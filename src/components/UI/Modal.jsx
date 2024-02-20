import { createPortal } from 'react-dom';

const Modal = ({children, isOpen, className = ''}) => {
  const dialog = useRef()
  useEffect(() => {
    if (isOpen) {
      dialog.current.showModal()
    }
  
    return () => {
      
    }
  }, [isOpen])
  

	return createPortal(
		<dialog ref={dialog} className={`modal ${className}`}>{children}</dialog>,
		document.getElementById('modal')
	);
};

export default Modal;
