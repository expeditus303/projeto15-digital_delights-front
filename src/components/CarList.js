import { useContext, useEffect, useState } from "react"
import Loading from "../components/Loading";
import { UserContext } from "../context/UserContext";
import CartCard from "./CartCard";
import apiCart from "../services/apiCart";
import styled from "styled-components";

export default function CartList({ listProducts }) {
    const [cartProducts, setCartProducts] = useState(undefined)
    const [total, setTotal] = useState(0)
    const { user } = useContext(UserContext)

    useEffect(() => {

        if (listProducts !== undefined) {
            console.log(user)
            apiCart.getCart(user)
                .then((res) => {
                    const cartProducts = res.data
                    let sumTotal = 0
                    cartProducts.forEach(p => {
                        const product = listProducts.find(el => el._id === p.productId)
                        p.product = { ...product }
                        sumTotal += Number(p.quantity) * Number(p.price)
                    });
                    setTotal(sumTotal)
                    setCartProducts(cartProducts)
                })
                .catch((err) => console.log(err))
        }
    }, [listProducts])

    if (cartProducts === undefined) return <Loading></Loading>
    return (
        <>
            {cartProducts.length === 0 ? <NoItemText>You have no items in your Shopping Bag.</NoItemText> : cartProducts.map((p) => (
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
                </Total>}
        </>
    )
}

const NoItemText = styled.h2`
    text-align:center;
    margin:50% 0;
    font-family: 'Tenor Sans';
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    color: #888888;
`

const Total = styled.div`
    display:flex;
    justify-content:space-between;
    margin:0 30px 20px;
    border-top: solid 1px #333333;
    font-family: 'Tenor Sans';
    color: #333333;
    font-size: 14px;
    line-height: 34px;
    letter-spacing: 2px;
    text-transform: uppercase;
    p:nth-child(2){
        font-family: 'Tenor Sans';
        font-size: 16px;
        letter-spacing: 3px;
        color: #DD8560;
    }
`