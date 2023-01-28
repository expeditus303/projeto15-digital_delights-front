import styled from "styled-components";

export const TopMenu = styled.div`
  height: 60px;
  width: 412px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  height: 100%;
  /* max-height: ; */
  width: 100vw;
  max-width: 412px;
  position: relative;
  margin: 20px auto;
  font-family: "Tenor Sans", Courier, monospace;

  h3 {
    font-size: 16px;
    line-height: 40px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: #000000;
    margin-top: 10px;
  }
`;

export const ProductDisplay = styled.div`
  width: 100%;
  margin: 0px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 0px;

  .image {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    background-color: white;
    margin-top: 0px;
  }

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const ProductImage = styled.div`
  margin-top: 5px;
  background-color: yellow;
  display: flex;

  button {
    border-style: none;
    font-size: 1em;
  }
`;

export const ProductInfo = styled.div`
  margin: 30px 0px 0px;
  width: 100%;

  h2 {
    text-transform: uppercase;
    color: #000000;
    font-size: 16px;
  }

  p {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: lighter;
    margin-top: 8px;
    line-height: 19px;
    color: #555555;
    letter-spacing: 1.5px;
    font-size: 13px;
  }

  h3 {
    margin-top: 8px;
    color: #dd8560;
    font-size: 18px;
  }
`;

export const AddBasket = styled.div`
  width: 100%;
  background-color: black;
  height: 60px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 18px;
  margin-bottom: 20px;
  font-size: 1.3em;

  div {
    display: flex;
    align-items: center;
  }

  h2 {
    font-size: 15px;
    color: #fcfcfc;
    margin-left: 8px;
  }
`;

export const SuggestedProducts = styled.div`
  padding: 16px;
  padding: 25px 25px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  div {
    width: 165px;
    margin-bottom: 25px;

    img {
      width: 100%;
    }

    h2 {
      font-size: 12px;
      line-height: 18px;
      color: #000000;
    }

    h3 {
      font-size: 15px;
      line-height: 24px;
      color: #dd8560;
    }
  }
`;
