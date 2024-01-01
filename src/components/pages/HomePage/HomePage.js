import { Link } from 'react-router-dom'


export const HomePage = () => {
    return (
    <>
        <h1>Железная воля!</h1>
        <h2>Делаем домашку 1 января</h2>
        <li>
        <Link to="./contacts">На страницу контактов</Link>
        </li>
        <li>
        <Link to="./catalog">Перейти в каталог</Link>
        </li>
    </>
    )
}