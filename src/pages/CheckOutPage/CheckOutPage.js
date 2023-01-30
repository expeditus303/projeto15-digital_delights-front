import { Header, CheckoutContainer, Title, Subtitle, Text, Line, CheckOutButton, CartOverall, Product } from "./CheckOutCss";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import apiCheckout from "../../services/apiCheckOut";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.js";
import apiCart from "../../services/apiCart";
import CartList from "../../components/CarList";


export default function CheckOutPage({ paymentInfo, listProducts }) {
    // const [payment, setPayment] = useState([]);
    const { user } = useContext(UserContext);
    const navigate = useNavigate()

    // useEffect(() => {
    //     setPayment(paymentInfo)
    // }, [])

    function submitOrder() {
        console.log(user)
        apiCheckout
            .sendPaymentMethod(paymentInfo, user)
            .then((res) => {
                console.log(res.data);
                navigate("/checkout");
            })
            .catch((err) => {
                console.log(err.response.data);
            })
        apiCart.emptyCart(user)
    }

    return (
        <CheckoutContainer>

            <Header>
                <Link to="/">
                    <Title>
                        Digital
                        <br />Delights
                    </Title>
                </Link>

                <Link to="/cart">
                    <ion-icon name="cart-outline"></ion-icon>
                </Link>
            </Header>

            <Subtitle>
                CHECKOUT
            </Subtitle>

            <Text>
                <h3>
                    Hello, Rafaela Oliveira!
                    <br />
                    <br />
                    Please, confirm all the information below before submitting your purchase:
                    <br />
                    <br />
                    Payment Method:
                    <br />
                    Credit Card ending in 4242
                </h3>

                <Line></Line>

                <h3>Your cart overall:</h3>
            </Text>

            <CartList listProducts={listProducts}></CartList>

            <CheckOutButton onClick={() => submitOrder()}>
                CHECKOUT
            </CheckOutButton>

        </CheckoutContainer>

    )
}