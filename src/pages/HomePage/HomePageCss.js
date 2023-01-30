import styled from "styled-components"


export const ProductsConteiner = styled.ul`
width:100vw;
max-width:412px;
position:relative;
inset:0;
margin: 20px auto;
padding: 40px 0;
background-color:#FFF;
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

export const Grid = styled.div`
display: grid;
grid-template-columns: auto auto;
gap: 20px;
`

export const Search = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
gap: 10px;
input{
    border-radius: 10px;
    border: 1px solid #000;
    padding-left: 11px;
    height: 25px;
    border-style: none;
    &:focus{
        outline: none;
    }
    &::placeholder{
        font-family: 'Tenor Sans', sans-serif;

    }
}
`