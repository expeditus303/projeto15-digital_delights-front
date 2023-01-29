import { Header, CheckoutContainer, Title, Subtitle, Text, Line, CheckOutButton,CartOverall, Product } from "./CheckOutCss";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import apiCheckout from "../../services/apiCheckOut";
import { useState } from "react";


export default function CheckOutPage() {
    const [products, setProducts] = useState([]);  

    useEffect(() => {
        apiCheckout.getPaymentMethod()
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err));
    }, [])

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

            <CartOverall>
                <Product>

                </Product>
            </CartOverall>

            <CheckOutButton>
                CHECKOUT
            </CheckOutButton>

        </CheckoutContainer>

    )
}