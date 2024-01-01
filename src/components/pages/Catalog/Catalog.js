import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Card from '../../Card/Card.jsx'
import styles from './catalog.module.css'
import Spinner from '../../Spinner/Spinner.js'


export const Catalog = () => {
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        fetch('https://658c6840859b3491d3f6081d.mockapi.io/api/v1/item')
        .then((res) => res.json())
        .then((data)=> {
            setGoods(()=> data);
        })
    }, []);


    return (
        <>
        {goods.length===0 && <Spinner></Spinner>}
            <h1>Я страница с каталогом</h1>
            <Link to="/">На главную страницу</Link>
            <h2>Список товаров</h2>
            <main style={{display:'flex', flexWrap: 'wrap', gap: '5%'}}>
                <ul className={styles.list__wrapper} >
                    {goods.length > 0 && 
                    goods.map(({image, title, desc, id}) => {
                    return (<Card
                    id={id}
                    image={image} 
                    title={title} 
                    desc={desc}
                    />);
                    })
                    }
                </ul>
            </main>
        </>
            )
    }