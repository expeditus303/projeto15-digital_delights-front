import { useNavigate } from "react-router-dom";
import { CartTitle, Conteiner, Header } from "./CartCss";
import CartList from "../../components/CarList";

export default function CartPage({ listProducts }) {
    const navigate = useNavigate()

    return (
        <Conteiner>
            <Header>
                <ion-icon onClick={() => navigate("/")} name="close-outline"></ion-icon>
            </Header>
            <CartTitle>CART</CartTitle>
            <CartList listProducts={listProducts} ></CartList>
            <button onClick={() => navigate('/payment-method')}>
                <ion-icon name="bag-handle-outline"></ion-icon>
                <p> Buy now </p>
            </button>
        </Conteiner>
    )
}
