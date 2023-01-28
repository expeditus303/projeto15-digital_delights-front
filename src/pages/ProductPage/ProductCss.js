import styled from "styled-components";

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

ion-icon{
    font-size: 25px;
    color: #fff;
}

a{
    color: #fff;
}
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
  margin: 50px auto 20px;
  font-family: "Tenor Sans", Courier, monospace;

  button:hover {
    cursor: pointer;
  }

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
  margin: 0px 16px 5px;
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
    margin-top: 0px;
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
  margin-bottom: 30px;
  font-size: 1.3em;

  button {
    display: flex;
    align-items: center;
    border-style: none;
    background-color: black;
    color: white;
    font-size: 1em;
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

  button {
    width: 165px;
    margin-bottom: 25px;
    border-style: none;
    font-family: "Tenor Sans", Courier, monospace;
    display: flex;
    flex-direction: column;

    img {
      width: 100%;
    }

    :hover {
      cursor: pointer;
    }

    .image {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    background-color: white;
    margin-top: 0px;
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
