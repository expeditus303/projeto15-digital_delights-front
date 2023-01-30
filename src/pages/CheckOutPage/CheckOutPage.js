import {
  Header,
  CheckoutContainer,
  Title,
  Subtitle,
  Text,
  Line,
  CheckOutButton,
  CartOverall,
  Product,
  SuccessContainer,
} from "./CheckOutCss";
import { Link, useNavigate } from "react-router-dom";
import apiCheckout from "../../services/apiCheckOut";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext.js";
import apiCart from "../../services/apiCart";
import CartList from "../../components/CarList";
import { BsCheck2Circle } from "react-icons/bs";

export default function CheckOutPage({ paymentInfo, listProducts, userName }) {
    const { user } = useContext(UserContext);
    const navigate = useNavigate()
    console.log(paymentInfo)



    async function submitOrder() {


        try {
            const checkPayment = await apiCheckout.sendPaymentMethod(paymentInfo, user)
            console.log(checkPayment.data);
            console.log(user)

        } catch (error) {
            console.log(user)
            return console.log(error)
        }

    try {
      const checkPayment = await apiCheckout.sendPaymentMethod(
        paymentInfo,
        user
      );
      console.log(checkPayment.data);
      console.log(user);
    } catch (error) {
      console.log(user);
      return console.log(error);
    }

    try {
      const checkEmpty = await apiCart.emptyCart(user);
      console.log(checkEmpty.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <SuccessContainer showSuccess={showSuccess}>
        <div>
          <h1>Payment success</h1>
          <BsCheck2Circle className="icon" />
          <div className="container">
            <h2>Your payment was success</h2>
            <p>Payment ID {}</p>
          </div>
          <Link to="/">
            <button>Back to home</button>
          </Link>
        </div>
      </SuccessContainer>
      <CheckoutContainer showSuccess={showSuccess}>
        <Header>
          <Link to="/">
            <Title>
              Digital
              <br />
              Delights
            </Title>
          </Link>

          <Link to="/cart">
            <ion-icon name="cart-outline"></ion-icon>
          </Link>
        </Header>

        <Subtitle>CHECKOUT</Subtitle>

            <Text>
                <h3>
                    Hello, {userName}!
                    <br />
                    <br />
                    Please, confirm all the information below before submitting your purchase:
                    <br />
                    <br />
                    Payment Method:
                    <br />
                    Name: {paymentInfo.name}
                    <br />
                    Credit Card ending in {paymentInfo.cardNumber.slice(-4)}


                </h3>

          <Line></Line>

          <h3>Your cart overall:</h3>
        </Text>

        <CartList listProducts={listProducts}></CartList>

        <CheckOutButton onClick={() => submitOrder()}>CHECKOUT</CheckOutButton>
      </CheckoutContainer>
    </>
  );
}
