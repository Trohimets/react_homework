import { useState } from 'react'
import Card from '../Card/Card'
import Modal from '../Modal/Modal'


const state = {
    isOpen: false,
}

const Main = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [cardTitle, setCardTitle] = useState('')
    const openModalHandler = () => {
        setIsModalOpen(true);
    };
    const closeModalHandler = () => {
        setIsModalOpen(false);
    };

    return (<main>
    <Card openModal={openModalHandler} setTitle={setCardTitle} title="Яблоки Грин Кинг Делишес" desc="Производство Турция" image="https://avatars.mds.yandex.net/i?id=ccebe3ae84c445dd52635817a71fc7b62e8beb29-9040073-images-thumbs&n=13"></Card>
    <Card openModal={openModalHandler} setTitle={setCardTitle} title="Гамбургер с беконом" desc="Прямиком из 'Вкусно и точка" image="https://avatars.mds.yandex.net/i?id=066c70ac631ab4433c535b50a9901872_sr-10119934-images-thumbs&n=13"></Card>
    <Card openModal={openModalHandler} setTitle={setCardTitle} title="Лимонад Миринда" desc="1 л пластиковая бутылка" image="https://avatars.mds.yandex.net/i?id=ec5b51aa7ca8e64f7de5059cf851f078_sr-4450973-images-thumbs&n=13"></Card>
    <Card openModal={openModalHandler} setTitle={setCardTitle} title="Форель слабосоленая" desc="200 грамм, вакуумная упаковка" image="https://avatars.mds.yandex.net/i?id=7a03725e6eb65d93bb5d6b6026e5d553_sr-4012652-images-thumbs&n=13"></Card>
    <Card openModal={openModalHandler} setTitle={setCardTitle} title="Паштет мясной" desc="175 грамм. Стеклянная тара" image="https://avatars.mds.yandex.net/i?id=5af25ce3cacfccc18e44a4ced0de9a96_sr-7054219-images-thumbs&n=13"></Card>
    <button onClick={() => setIsModalOpen(true)}>Открыть модалку</button>
    {isModalOpen === true && <Modal closeModal={closeModalHandler} title={cardTitle}></Modal>}
    </main>
    )
}

export default Main;