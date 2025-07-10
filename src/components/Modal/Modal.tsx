import type { ReactNode } from 'react';
import styles from './Modal.module.css';

interface Props {
    children: ReactNode;
    onClose(): void;
}

function Modal({ children, onClose }: Props) {

    return (
        <div className={styles.backDrop} onClick={onClose}>
            <div
                className={styles.dialog}
                onClick={e => e.stopPropagation()}
            >
                <button className={styles.close} onClick={onClose}>
                    ×
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal;