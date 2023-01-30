import { useContext } from "react";
import { Link } from "react-router-dom"
import Loading from "../../components/Loading"
import ProductCard from "../../components/ProductCard"
import { UserContext } from "../../context/UserContext";
import { ProductsConteiner, TopMenu, Grid, Search } from "./HomePageCss";
import { useState } from "react";
import { useMemo } from "react";

export default function HomePage({ listProducts }) {

    const { user } = useContext(UserContext);
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState(false);
    const filteredProducts = useMemo(() => {
        return listProducts?.filter(product => product.title.toLowerCase().includes(query.toLowerCase()))
    }, [query])

    function handleChange(e) {
        setQuery(e.target.value);
    }

    if (listProducts === undefined) return <Loading></Loading>
    return (
        <>

            <ProductsConteiner>
                <TopMenu>
                    Digital<br />Delights
                    <Search>
                        {search && <input
                            type='search'
                            value={query}
                            onChange={(e) => handleChange(e)}
                            placeholder='Search' />}
                        <ion-icon name="search-outline" onClick={() => setSearch(!search)}></ion-icon>
                        <Link to={user === null ? "/sign-in" : "/cart"}>
                            {user === null ? <ion-icon name="person-circle-outline" /> : <ion-icon name="cart-outline" />}
                        </Link>
                    </Search>

                </TopMenu>


                <Grid>
                    {filteredProducts.map(e => (
                        <ProductCard
                            key={e._id}
                            id={e._id}
                            image={e.images[0]}
                            title={e.title}
                            price={e.price}
                            description={e.description}
                        >
                        </ProductCard>))}
                </Grid>
            </ProductsConteiner>
        </>
    )
}

