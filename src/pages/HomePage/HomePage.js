import { useContext } from "react";
import { Link } from "react-router-dom"
import Loading from "../../components/Loading"
import ProductCard from "../../components/ProductCard"
import { UserContext } from "../../context/UserContext";
import { ProductsConteiner, TopMenu } from "./HomePageCss"

export default function HomePage({listProducts}) {

    const { user } = useContext(UserContext);

    if (listProducts === undefined) return <Loading></Loading>
    return (
        <>

            <ProductsConteiner>
                <TopMenu>
                    Digital<br />Delights
                    <Link to={user === null ? "/sign-in" : "/cart" }>
                        {user === null ? <ion-icon name="person-circle-outline"/> : <ion-icon name="cart-outline" />}
                    </Link>
                </TopMenu>
                {listProducts.map(e => (
                    <ProductCard
                        key={e._id}
                        id={e._id}
                        image={e.images[0]}
                        title={e.title}
                        price={e.price}
                        description={e.description}
                        >
                    </ProductCard>))}
            </ProductsConteiner>
        </>
    )
}

