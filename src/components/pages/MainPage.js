import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import products from '../../products.json'
import { addProducts, deleteSingleProduct } from '../../store/productsSlice'
import { getProducts } from '../../store/productsSelectors'


export const MainPage = () => {
    const dispatch = useDispatch()
    const storeProducts = useSelector(getProducts)
    console.log(products)
    useEffect(() => {
        dispatch(addProducts(products))
    }, [])

    const deleteSingleProductHandler = (id) => () => {
        dispatch(deleteSingleProduct({id}))
    }

    return (<div>
        {storeProducts.length > 0 &&storeProducts.map((product) => {
            return (<>
            <h2>{product.title}</h2>
            <div>{product.price}</div>
            <button onClick={deleteSingleProductHandler(product.id)}>Удалить товар</button>
            </>
            )
        })}
    </div>)
}