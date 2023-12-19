import Styles from './modal.module.css'

const Modal = () => {
    return (
        <div className={Styles.modal}>
            <div className={Styles.modalContent}>
                <p>Выбранный товар помещен в корзину</p>
                <button>Закрыть</button>
            </div>
        </div>
    )
}

export default Modal;