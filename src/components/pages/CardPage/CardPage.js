import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Spinner from '../../Spinner/Spinner.js'

export const CardPage = () => {
    const [good, setGood] = useState()
    const { goodId } = useParams();

    useEffect(() => {
        fetch(`https://658c6840859b3491d3f6081d.mockapi.io/api/v1/item/${goodId}`)
        .then((res) => res.json())
        .then((data)=> setGood(()=> data))
    }, []);

    return (
    <>
    {good==='' && <Spinner></Spinner>}
        <h2>{good.title}</h2>
        <div> {good.desc}</div>
        <img src={good.image}/> 
    </>
    );
};

