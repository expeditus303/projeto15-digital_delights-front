import {
    PaymentContainer,
    Header,
    Title,
    CardImage,
    Subtitle,
    PaymentData,
    UpperBoxes,
    LowerBoxes,
  } from "./PaymentCss";
  import { Link, useNavigate } from "react-router-dom";
  import { useState } from "react";
  import apiCheckOut from "../../services/apiCheckOut.js";
  import { useContext } from "react";
  import { UserContext } from "../../context/UserContext.js";
  import Mastercard from "../../assets/MasterCard.png";
  import Visa from "../../assets/Visa.png";
  
  export default function PaymentPage({ paymentInfo, setPaymentInfo }) {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
  
    const [form, setForm] = useState({
      name: paymentInfo?.name || "",
      cardNumber: paymentInfo?.cardNumber || "",
      securityCode: paymentInfo?.cvv || "",
      expDate: paymentInfo?.expDate || "",
    });
  
    let firstDigit = form.cardNumber.substring(0, 1);
  
    let cardLogo = undefined;
  
    if (firstDigit == "4") {
      console.log("É visa!");
      cardLogo = Visa;
    } else if (firstDigit == "5") {
      console.log("É master!");
      cardLogo = Mastercard;
    }
  
    // if (firstDigit === 4) {
    //     console.log("é visa!")
    //     setCardLogo(Visa)
    // }
  
    function handleForm(e) {
      setForm({
        ...form,
        [e.target.id]: e.target.value,
      });
    }
  
    function sendPaymentMethod(e) {
      e.preventDefault();
      console.log(user);
      //body data
      const body = {
        name: form.name,
        cardNumber: form.cardNumber,
        cvv: form.securityCode,
        expDate: form.expDate,
      };
      setPaymentInfo(body);
      navigate("/checkout");
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
              <br />
              Delights
            </Title>
          </Link>
  
          <Link to="/cart">
            <ion-icon name="cart-outline"></ion-icon>
          </Link>
        </Header>
  
        <Subtitle>PAYMENT METHOD</Subtitle>
  
        <CardImage>
          <div className="cardLogo">
            <img src={cardLogo} alt="" />
          </div>
          <div>
            <h2>{form.name}</h2>
            <h4>{form.expDate}</h4>
          </div>
          <h3>{form.cardNumber}</h3>
        </CardImage>
  
        <PaymentData>
          <form onSubmit={sendPaymentMethod}>
            <UpperBoxes>
              <input
                id="name"
                type="text"
                value={form.name}
                placeholder=" Name"
                onChange={handleForm}
                required
              />
              <input
                id="cardNumber"
                type="number"
                inputMode="numeric"
                pattern="[0-9\s]{13,16}"
                autoComplete="cc-number" 
                maxLength="16" 
                placeholder="xxxx xxxx xxxx xxxx"
                value={form.cardNumber}
                onChange={handleForm}
                required
              />
            </UpperBoxes>
  
            <LowerBoxes>
              <input
                id="securityCode"
                type="number"
                value={form.securityCode}
                placeholder=" CCV"
                onChange={handleForm}
                required
              />
              <input
                id="expDate"
                type="text"
                pattern="\d{2}\/\d{2}" 
                placeholder="MM/YY"
                maxLength="5"
                value={form.expDate}
                onChange={handleForm}
                required
              />
            </LowerBoxes>
  
            <button type="submit">ADD CARD</button>
          </form>
        </PaymentData>
      </PaymentContainer>
    );
  }
  