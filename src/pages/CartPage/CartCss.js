
import styled from "styled-components";

export const Conteiner = styled.div`
    min-height:100vh;
    width:100vw;
    max-width:412px;
    background-color: #FFF;
    padding: 50px 0 46px;
    
    button {
        width: 100vw;
        max-width: 412px;
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
        border-style: none;
        &:hover {
            background: grey;
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
            margin: 0 10px;
        }
}
`

export const Header = styled.div`
    position:fixed;
    top:0;
    display: flex;
    width: 100%;
    max-width: 412px;
    height: 50px;
    justify-content: space-between;
    align-items: center;
    background-color: #000;

    ion-icon{
        font-size: 25px;
        margin-left:20px;
        color: #fff;

        :hover {
            cursor: pointer;
        }
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

