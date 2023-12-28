import { useEffect, useState } from 'react'
import Card from '../Card/Card.jsx'
import Spinner from '../Spinner/Spinner.js'

import styles from './main.module.css'

const Main = () => {
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
    <h2>Список товаров</h2>
    <main style={{display:'flex', flexWrap: 'wrap', gap: '5%'}}>


        <ul className={styles.list__wrapper} >
        {goods.length > 0 && 
            goods.map(({image, title, desc}, id) => {
                return (<Card
                key={id}
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

export default Main;