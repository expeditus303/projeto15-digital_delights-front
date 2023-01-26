import axios from "axios"
import { useEffect, useState } from "react"
import Loading from "../../components/Loading"
import ProductCard from "../../components/ProductCard"
import { ProductsConteiner, TopMenu } from "./HomePageCss"

export default function HomePage() {
    const [listProducts, setListProducts] = useState(undefined)
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/`)
            .then((res) => setListProducts(res.data))
            .catch((err) => console.log(err))
    }, [])

    if (listProducts === undefined) return <Loading></Loading>
    return (
        <>
            <TopMenu>Digital<br />Delights</TopMenu>
            <ProductsConteiner>
                {listProducts.map(e => (
                    <ProductCard
                        key={e.id}
                        image={e.images[0]}
                        title={e.title}
                        price={e.price}
                        description={e.description}>
                    </ProductCard>))}
            </ProductsConteiner>
        </>
    )
}

