import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import axios from "axios"
import { UserContext } from "../../context/UserContext";
import CartCard from "../../components/CartCard";
import { CartTitle, Conteiner, Header, NoItemText, Total } from "./CartCss";
import { MOCKCART } from "../../constants/mockdata";


export default function CartPage() {
    const { user } = useContext(UserContext)
    const [cartProducts, setCartProducts] = useState(undefined)
    const [total, setTotal] = useState(0)
    const navigate = useNavigate()
    useEffect(() => {

        setCartProducts(MOCKCART)
        let sumTotal = 0
        MOCKCART.forEach(p => sumTotal += Number(p.quantity) * Number(p.price))
        setTotal(sumTotal)

        // const config = {
        //     headers: {
        //         "Authorization": `Bearer ${user}`
        //     }
        // }
        // axios.get(`${process.env.REACT_APP_API_URL}/cart`, config)
        //     .then((res) => {
        //         return setCartProducts(res.data)
        //     })
        //     .catch((err) => console.log(err))
    }, [])
    if (cartProducts === undefined) return <Loading></Loading>
    return (
        <Conteiner>
            <Header>
                <ion-icon onClick={() => navigate("/")} name="close-outline"></ion-icon>
            </Header>
            <CartTitle>CART</CartTitle>
            {cartProducts.length === 0 ? <NoItemText>You have no items in your Shopping Bag.</NoItemText> : cartProducts.map((p) => (
                <CartCard
                    key={p._id}
                    id={p._id}
                    quantity={p.quantity}
                    image={p.image}
                    title={p.title}
                    price={p.price}
                    description={p.description}
                    total={total}
                    setTotal={setTotal}
                />
            ))}
            {cartProducts.length === 0 ? <></> :
                <Total>
                    <p>Sub Total</p> 
                    <p>{Number(total).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</p> 
                </Total>}


            <button>
                <ion-icon name="bag-handle-outline"></ion-icon>
                <p> Buy now </p>
            </button>
        </Conteiner>
    )
}
