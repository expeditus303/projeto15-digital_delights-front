import styled from "styled-components";

export const PaymentContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #FFF;
height: 100vh;
max-height: 100vh;
width: 100vw;
max-width: 412px;
position: relative;
`
export const Header = styled.div`
display: flex;
width: 100vw;
height: 50px;
flex-direction: row;
justify-content: space-between;
padding: 0 20px;
align-items: center;
background-color: #000;

ion-icon{
    font-size: 25px;
    color: #fff;
}

a{
    color: #fff;
}
`
export const Title = styled.h1`
font-family: Tenor Sans;
font-style: normal;
font-weight: 400;
font-size: 16px;
color: #fff;
`
export const Subtitle = styled.h2`
font-family: Tenor Sans;
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #000;
margin-top: 30px;
`

export const PaymentData = styled.div`
display: flex;
width: 100vw;
max-width: 412px;
align-items: center;
justify-content: center;
background-color: green;
button{
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 46px;
    display: flex;
    margin-top: 50px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    pointer-events: ${(props) => (props.disabled ? "none" : "all")};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    background: #000;
    &:hover {
        background: #E8EBEF;
    }
    s &:active {
        background: #E8EBEF;
    }
    &:focus {
        outline: none;
    }
    font-family: Tenor Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 23px;
    color: #fff;
}

`

export const UpperBoxes = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width:100vw;
max-width: 412px;
input{
    width: 300px;
    height: 52px;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    border-color: #000;
    background-color: #fff;
    font-size: 18px;
    font-family: Tenor Sans;
    margin-bottom: 10px;
    ::placeholder{
        color: #7e7e7e;
        font-size: 14px;
        font-weight: 400;
        font-style: italic;
        align-text: center;
    }
}
`

export const LowerBoxes = styled.div`
display: flex;
flex-direction: row;
margin: 0px auto 0px;
width:300px;
justify-content: space-between;
input{
    width: 145px;
    height: 52px;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    border-color: #000;
    background-color: #fff;
    font-size: 18px;
    font-family: Tenor Sans;
    ::placeholder{
        color: #7e7e7e;
        font-size: 14px;
        font-weight: 400;
        font-style: italic;
        align-text: center;
    }
}
`