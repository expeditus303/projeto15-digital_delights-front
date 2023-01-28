import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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

            <ProductsConteiner>
                <TopMenu>
                    Digital<br />Delights
                    <Link to="/cart">
                        <ion-icon name="cart-outline"></ion-icon>
                    </Link>
                </TopMenu>
                {listProducts.map(e => (
                    <ProductCard
                        key={e._id}
                        id={e._id}
                        image={e.images[0]}
                        title={e.title}
                        price={e.price}
                        description={e.description}>
                    </ProductCard>))}
            </ProductsConteiner>
        </>
    )
}

