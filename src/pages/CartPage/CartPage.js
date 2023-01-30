// import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
// import Loading from "../../components/Loading";
// import { UserContext } from "../../context/UserContext";
// import CartCard from "../../components/CartCard";
import { CartTitle, Conteiner, Header } from "./CartCss";
// import apiCart from "../../services/apiCart";
import CartList from "../../components/CarList";


export default function CartPage({ listProducts }) {
    // const { user } = useContext(UserContext)
    // const [cartProducts, setCartProducts] = useState(undefined)
    // const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    
    
    // useEffect(() => {
        
    //     if (listProducts !== undefined) {
    //         apiCart.getCart(user)
    //             .then((res) => {
    //                 const cartProducts = res.data
    //                 let sumTotal = 0
    //                 cartProducts.forEach(p => {
    //                     const product = listProducts.find(el => el._id === p.productId)
    //                     p.product = { ...product }
    //                     sumTotal += Number(p.quantity) * Number(p.price)
    //                 });
    //                 setTotal(sumTotal)
    //                 setCartProducts(cartProducts)
    //             })
    //             .catch((err) => console.log(err))
    //     }
    // }, [listProducts])

    // if (cartProducts === undefined) return <Loading></Loading>

    return (
        <Conteiner>
            <Header>
                <ion-icon onClick={() => navigate("/")} name="close-outline"></ion-icon>
            </Header>
            <CartTitle>CART</CartTitle>
            <CartList listProducts={listProducts} ></CartList>
            {/* {cartProducts.length === 0 ? <NoItemText>You have no items in your Shopping Bag.</NoItemText> : cartProducts.map((p) => (
                <CartCard
                    key={p.productId}
                    id={p.productId}
                    number={p.quantity}
                    image={p.product.images[0]}
                    title={p.product.title}
                    price={p.price}
                    description={p.product.description}
                    total={total}
                    setTotal={setTotal}
                />
            ))}
            {cartProducts.length === 0 ? <></> :
                <Total>
                    <p>Sub Total</p>
                    <p>{Number(total).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p>
                </Total>} */}


            <button onClick={() => navigate('/payment-method')}>
                <ion-icon name="bag-handle-outline"></ion-icon>
                <p> Buy now </p>
            </button>
        </Conteiner>
    )
}
