import styled from "styled-components"


export const ProductsConteiner = styled.ul`
width:100vw;
max-width:412px;
display: grid;
position:relative;
inset:0;
margin: 20px auto;
padding: 20px 0;
background-color:#FFF;
grid-template-columns: auto auto;
gap: 20px;
`

export const TopMenu = styled.div`
position:fixed;
top:0;
height:50px;
width:412px;
max-width:100vw;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0 20px;
align-items: center;
background-color:#000;
display:flex;
justify-content:space-between;
align-items:center;
color:#fff;
font-family: 'Tenor Sans', sans-serif;
letter-spacing: 3px;

ion-icon{
    font-size: 25px;
    color: #fff;
}

a{
    color: #fff;
}
`