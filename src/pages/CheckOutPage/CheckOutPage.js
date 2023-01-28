import { Header, CheckoutContainer, Title, Subtitle, Text, Line, CheckOutButton,CartOverall, Product } from "./CheckOutCss";
import { Link } from "react-router-dom";


export default function CheckOutPage() {

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
                    Thank you for shopping with us, Rafaela Oliveira!
                    <br />
                    <br />
                    We really appreciate it. Enjoy 10% off your next purchase with this coupon code: THANKYOU10
                </h3>
            </Text>

            <Line></Line>

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