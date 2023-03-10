import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: ${(props) => (props.showSuccess ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  /* height: 100vh; */
  padding: 50px 0 46px;
  min-height: 100vh;
  width: 100vw;
  max-width: 412px;
  position: relative;
`;
export const Header = styled.div`
  position: fixed;
  top: 0;
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
  font-size: 35px;
  color: #000;
  margin-top: 50px;
`;
export const Text = styled.div`
  display: flex;
  flex-direction: column;
  width: 315px;
  margin: 30px auto;
  justify-content: center;

  h3 {
    font-family: Tenor Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #000;
    line-height: 22px;
}
`

export const Line = styled.div`
  margin: 0 auto;
  display: flex;
  background-color: #000;
  width: 250px;
  height: 0.7px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

export const CheckOutButton = styled.button`
  width: 100vw;
  max-width: 412px;
  margin: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
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
  font-size: 18px;
  line-height: 23px;
  color: #fff;
`;

export const CartOverall = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  flex-wrap: wrap;
`;
export const Product = styled.div`
  display: flex;
  width: 100px;
  height: 115px;
`;

export const SuccessContainer = styled.div`
  display: ${(props) => (props.showSuccess ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  /* height: 100vh; */
  padding: 50px 0 46px;
  min-height: 100vh;
  width: 100vw;
  max-width: 412px;

  .icon {
    font-size: 100px;
    color: green;
  }
  div {
    width: 343px;
    height: 374px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-family: "Tenor Sans";
      font-weight: 400;
      font-size: 18px;
      line-height: 40px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #000000;
      margin-bottom: 50px;
    }

    button {
      width: 180px;
      height: 60px;
      background-color: black;
      color: white;
      font-family: "Tenor Sans";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
      text-transform: uppercase;
      border-style: none;

      :hover {
        cursor: pointer;
      }
    }

    h2 {
      font-family: "Tenor Sans";
      font-weight: 400;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: #333333;
    }

    p {
      font-family: "Tenor Sans";
      font-weight: 400;
      font-size: 15px;
      line-height: 24px;
      color: #555555;
    }

    .container {
        justify-content: center;
    }
  }
`;
