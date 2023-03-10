import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 412px;
  position: relative;
`;
export const Header = styled.div`
  display: flex;
  width: 100vw;
  max-width: 412px;
  height: 50px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  background-color: #000;

  ion-icon {
    font-size: 25px;
    color: #fff;
  }

  a {
    color: #fff;
  }
`;
export const Title = styled.h1`
  font-family: Tenor Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
`;
export const Subtitle = styled.h2`
  font-family: Tenor Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  color: #000;
  margin-top: 40px;
`;
export const CardImage = styled.div`

  width: 316px;
  height: 190px;
  border-radius: 16px;
  background: linear-gradient(90deg, #434343 0%, #000000 100%);
  margin-top: 30px;
  font-family: "Tenor Sans";
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  color: #ffffff;
  letter-spacing: 1.5px;
  padding: 15px;

  .cardLogo {
    width: 100%;
    margin: 10px 0px 0px 0px;
    display: flex;
    justify-content: end;
    
    img {
      height: 35px;
    }
  }

  div {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 65px 0px 0px 0px;
  }

  h3 {
    margin: 10px 0px 0px 0px;
  }
`;

export const PaymentData = styled.div`
  display: flex;
  width: 100vw;
  max-width: 412px;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  button {
    width: 100vw;
    max-width: 412px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 46px;
    display: flex;
    margin: 50px auto 0px;
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
      background: grey;
      border-style: none;
    }
    s &:active {
      background: #e8ebef;
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
`;

export const UpperBoxes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  max-width: 412px;
  input {
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
    ::placeholder {
      color: #7e7e7e;
      font-size: 14px;
      font-weight: 400;
      font-style: italic;
      /* align-text: center; // da erro pois aparece que n??o existe a align-text */
    }
  }
`;

export const LowerBoxes = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px auto 0px;
  width: 300px;
  justify-content: space-between;
  input {
    width: 145px;
    height: 52px;
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    border-color: #000;
    background-color: #fff;
    font-size: 18px;
    font-family: Tenor Sans;
    ::placeholder {
      color: #7e7e7e;
      font-size: 14px;
      font-weight: 400;
      font-style: italic;
      /* align-text: center; // da erro pois aparece que n??o existe a align-text */
    }
  }
`;
