import Styles from './modal.module.css'

const Modal = (props) => {
    const closeModalHandler = () => {
        props.closeModal()
    }
    return (
        <div className={Styles.modal}>
            <div className={Styles.modalContent}>
                <p>Выбранный товар "{props.title}" помещен в корзину</p>
                <button onClick={ closeModalHandler }>Закрыть</button>
            </div>
        </div>
    )
}

export default Modal;