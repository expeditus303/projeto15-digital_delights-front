import { PaymentContainer, Header, Title, Subtitle, PaymentData, UpperBoxes, LowerBoxes } from "./PaymentCss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";



export default function PaymentPage() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        cardNumber: "",
        securityCode: "",
        expDate: ""
    });

    function handleForm(e) {
        setForm({
            ...form, [e.target.id]: e.target.value
        })
    }

    function sendPaymentMethod(e) {
        e.preventDefault();
        navigate("/checkout");
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
                    MÉTODO DE PAGAMENTO
                </Subtitle>

                <PaymentData>
                    <form onSubmit={sendPaymentMethod}>
                        <UpperBoxes>
                            <input
                                id='name'
                                type='text'
                                value={form.name}
                                placeholder='Nome'
                                onChange={handleForm}
                                required
                            />
                            <input
                                id='cardNumber'
                                type='number'
                                value={form.cardNumber}
                                placeholder='Digitos do cartão'
                                onChange={handleForm}
                                required
                            />
                        </UpperBoxes>

                        <LowerBoxes>
                            <input
                                id='securityCode'
                                type='number'
                                value={form.securityCode}
                                placeholder='Cód. de segurança'
                                onChange={handleForm}
                                required
                            />
                            <input
                                id='expDate'
                                type='text'
                                value={form.expDate}
                                placeholder='Validade'
                                onChange={handleForm}
                                required
                            />
                        </LowerBoxes>

                        <button type='submit'>ADICIONAR CARTÃO</button>
                    </form>
                </PaymentData>

            </PaymentContainer>
    )
}