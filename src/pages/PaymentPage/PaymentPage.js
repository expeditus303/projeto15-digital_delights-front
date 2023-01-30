import { PaymentContainer, Header, Title, CardImage, Subtitle, PaymentData, UpperBoxes, LowerBoxes } from "./PaymentCss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiCheckOut from '../../services/apiCheckOut.js';
import { useContext } from "react";
import { UserContext } from "../../context/UserContext.js";

export default function PaymentPage({paymentInfo, setPaymentInfo}) {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);

    const [form, setForm] = useState({
        name: paymentInfo?.name || "",
        cardNumber: paymentInfo?.cardNumber || "",
        securityCode: paymentInfo?.cvv || "",
        expDate: paymentInfo?.expDate || ""
    });

    function handleForm(e) {
        setForm({
            ...form, [e.target.id]: e.target.value
        })
    }

    function sendPaymentMethod(e) {
        e.preventDefault();
        console.log(user)
        //body data
        const body = {

            name: form.name,
            cardNumber: form.cardNumber,
            cvv: form.securityCode,
            expDate: form.expDate

        }
        setPaymentInfo(body)
        navigate("/checkout")
        // apiCheckOut
        //     .sendPaymentMethod(body, user)
        //     .then((res) => {
        //         console.log(res.data);
        //         navigate("/checkout");
        //     })
        //     .catch((err) => {
        //         console.log(err.response.data);
        //     })
    }


    return (
        <PaymentContainer>

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
                PAYMENT METHOD
            </Subtitle>

            <CardImage>
            </CardImage>

            <PaymentData>
                <form onSubmit={sendPaymentMethod}>
                    <UpperBoxes>
                        <input
                            id='name'
                            type='text'
                            value={form.name}
                            placeholder=' Name'
                            onChange={handleForm}
                            required
                        />
                        <input
                            id='cardNumber'
                            type='number'
                            value={form.cardNumber}
                            placeholder=' Card Number'
                            onChange={handleForm}
                            required
                        />
                    </UpperBoxes>

                    <LowerBoxes>
                        <input
                            id='securityCode'
                            type='number'
                            value={form.securityCode}
                            placeholder=' CCV'
                            onChange={handleForm}
                            required
                        />
                        <input
                            id='expDate'
                            type='text'
                            value={form.expDate}
                            placeholder=' Exp. Date'
                            onChange={handleForm}
                            required
                        />
                    </LowerBoxes>

                    <button type='submit'>ADD CARD</button>
                </form>
            </PaymentData>

        </PaymentContainer>
    )
}