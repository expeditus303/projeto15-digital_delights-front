import styled from "styled-components";
import { useState } from "react"

export default function CartCard({ image, price, title, id, description,total,setTotal }) {
    const [quantity,setQuantity] = useState(0)
    function addQuantity(inc) {
        if (quantity<1 && inc ===-1) return
        setTotal(total + inc*(Number(price)))
        setQuantity(quantity+inc)
    }
    return (
        <Conteiner>
            <img src={image} alt={title} />
            <div>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <Counter>
                    <ion-icon onClick={()=>addQuantity(-1)} name="remove-circle-outline"></ion-icon>
                    <h3>{quantity}</h3>
                    <ion-icon onClick={()=>addQuantity(1)} name="add-circle-outline"></ion-icon>
                </Counter>
                <h4>{(Number(price)*quantity).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h4>
            </div>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    margin:15px 20px;
    display:flex;
    h1, h2, h3, h4 {
        margin: 10px;
    }
    h1 {
        font-family: 'Tenor Sans';
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #000000;
    }
    h2 {
        font-family: 'Tenor Sans';
        font-size: 12px;
        line-height: 18px;
        color: #555555;
    }
    img {
        width:100px;
        height:133px;
        object-fit:scale-down;
    }
    h4 {
        font-family: 'Tenor Sans';
        font-size: 15px;
        line-height: 24px;
        color: #DD8560;
    }
`
const Counter = styled.div`
    display:flex;
    margin: 10px;
    align-items:center;
`