
import styled from "styled-components";


export const Total = styled.div`
    display:flex;
    justify-content:space-between;
    margin:0 30px 20px;
    border-top: solid 1px #333333;
    font-family: 'Tenor Sans';
    color: #333333;
    font-size: 14px;
    line-height: 34px;
    letter-spacing: 2px;
    text-transform: uppercase;
    p:nth-child(2){
        font-family: 'Tenor Sans';
        font-size: 16px;
        letter-spacing: 3px;
        color: #DD8560;
    }
`
export const NoItemText = styled.h2`
    text-align:center;
    margin:50% 0;
    font-family: 'Tenor Sans';
    font-style: normal;
    font-size: 16px;
    line-height: 20px;
    color: #888888;
`
export const Header = styled.div`
    position:fixed;
    top:0;
    display: flex;
    width: 100vw;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    background-color: #000;

    ion-icon{
        font-size: 25px;
        margin-left:20px;
        color: #fff;
    }

    a{
        color: #fff;
    }
`
export const CartTitle = styled.h1`
    margin:20px 30px;
    color: #333333;
    text-align:left;
    font-family:'Tenor Sans', Courier, monospace;
    font-style: normal;
    font-size: 14px;
    letter-spacing: 3px;
`

export const Conteiner = styled.div`
    min-height:100vh;
    width:100vw;
    background-color: #FFF;
    padding: 50px 0 46px;
    
    button {
        width: 100vw;
        position: fixed;
        z-index:2;
        bottom: 0;
        height: 46px;
        display: flex;
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
        font-size: 16px;
        line-height: 23px;
        color: #fff;

        ion-icon {
            margin: 0 25px;
        }
}
`