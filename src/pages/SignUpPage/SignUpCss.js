import styled from "styled-components";

export const SignUpContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #000;
height: 100vh;
max-height: 100vh;
width: 100vw;
max-width: 412px;
position: relative;
padding: 25px 25px;
`

export const Title = styled.h1`
font-family: Tenor Sans;
font-style: normal;
font-weight: 400;
font-size: 40px;
color: #fff;
`
export const FormContainer = styled.div`
display: flex;
margin: 30px 0 25px;
flex-direction: column;
align-items: center;
width: 326px;
height:446px;

input{
    font-family: Tenor Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    width: 326px;
    height: 58px;
    margin-bottom: 13px;
    padding: 10px;
    border: none;
    border-radius: 5px;  
    pointer-events: ${(props) => (props.disabled ? "none" : "all")};
    background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
    color: ${(props) => (props.disabled ? "#AFAFAF" : "#666666")};

    &::placeholder {
        font-family: Tenor Sans;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
    font-family: Tenor Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
}
button{
    width: 326px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    pointer-events: ${(props) => (props.disabled ? "none" : "all")};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    background: #fff;
    margin-top: 40px;
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
    font-size: 20px;
    line-height: 23px;
    color: #000;
}
`
export const TextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-top: 15px;
h3{
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: #ffffff;
    font-family: Tenor Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
}
a{
        color: #fff;
    }
`