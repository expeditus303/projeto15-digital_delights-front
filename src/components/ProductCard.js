import { useNavigate } from "react-router-dom"
import styled from "styled-components"

export default function ProductCard({ image, title, price, description ,id}) {
    const navigate = useNavigate()
    const descriptionCropped = description.toLowerCase().startsWith(title.toLowerCase()) ?
        description.slice(title.length, title.length + 45) + "..." :
        description.slice(0,45)

    function openProduct() {
        navigate(`product/${id}`)
        window.scrollTo(0, 0);
    }
    
    return (
        <Card onClick={openProduct}>
            <div>
                <img src={image} alt={title} />
            </div>
            <Info>
                <li>{title}</li>
                <li>{descriptionCropped}</li>
                <li>{Number(price).toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</li>
            </Info>
        </Card>
    )

}


const Card = styled.li`
    display:flex;
    flex-direction:column;
    align-items:left;
    margin: auto;
    padding:0 10px;
    gap:5px;
    max-width:165px;
    min-height:267px;
    img {
        max-width:100%;
        height:200px;
        object-fit:scale-down;
    }

    :hover {
        cursor: pointer;
    }

`

const Info = styled.ul`
    li {
        font-family: 'Tenor Sans', Courier, monospace;
        color: #000;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;  
        max-width:180px;
    }
    li:nth-child(2) {
        color:#555555;
    }
    li:nth-child(3) {
        font-size: 15px;
        line-height: 24px;
        color:#DD8560;
    }
`
