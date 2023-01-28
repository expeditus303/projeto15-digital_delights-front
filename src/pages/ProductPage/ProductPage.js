import { useParams } from "react-router-dom";
import {
  AddBasket,
  ProductContainer,
  ProductDisplay,
  ProductImage,
  ProductInfo,
  SuggestedProducts,
  TopMenu,
} from "./ProductCss";
import { RxDotFilled, RxDot } from "react-icons/rx";
import { HiOutlinePlusCircle, HiOutlineHeart } from "react-icons/hi";
import { useState } from "react";

export default function ProductPage() {
  const product_ = {
    _id: "63d2c287bcf8a249caf2b7a3",
    id: 81,
    title: "Round Silver Frame Sun Glasses",
    description:
      "A pair of sunglasses can protect your eyes from being hurt. For car driving, vacation travel, outdoor activities, social gatherings,",
    price: 19,
    discountPercentage: 10.1,
    rating: 4.94,
    stock: 78,
    brand: "Designer Sun Glasses",
    category: "sunglasses",
    thumbnail: "https://i.dummyjson.com/data/products/81/thumbnail.jpg",
    images: [
      "https://i.dummyjson.com/data/products/81/1.jpg",
      "https://i.dummyjson.com/data/products/81/2.jpg",
      "https://i.dummyjson.com/data/products/81/3.jpg",
      "https://i.dummyjson.com/data/products/81/4.webp",
      "https://i.dummyjson.com/data/products/81/thumbnail.jpg",
    ],
  };

  const params = useParams();

  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("params abaixo");
  console.log(params);

  return (
    <>
      <TopMenu>
        Digital
        <br />
        Delights
      </TopMenu>
      <ProductContainer>
        <ProductDisplay>
          <div className="image">
            <img src={product_.images[currentIndex]} alt="" />
          </div>
          <ProductImage>
            {product_.images.map((image, index) => (
              <button onClick={() => setCurrentIndex(index)} key={index}>
                {currentIndex === index ? <RxDotFilled id="dot" /> : <RxDot />}
              </button>
            ))}
          </ProductImage>

          <ProductInfo>
            <h2>{product_.title}</h2>
            <p>{product_.description}</p>
            <h3>
              {Number(product_.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
          </ProductInfo>
        </ProductDisplay>

        <AddBasket>
          <div>
            <HiOutlinePlusCircle />
            <h2>Adicionar ao carrinho</h2>
          </div>
          <HiOutlineHeart />
        </AddBasket>
              
        <h3>Você também pode gostar</h3>
        <SuggestedProducts>
          <div>
            <img src={product_.images[0]} alt="" />
            <h2>{product_.title}</h2>
            <h3>
              {Number(product_.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
          </div>

          <div>
            <img src={product_.images[0]} alt="" />
            <h2>{product_.title}</h2>
            <h3>
              {Number(product_.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
          </div>

          <div>
            <img src={product_.images[0]} alt="" />
            <h2>{product_.title}</h2>
            <h3>
              {Number(product_.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
          </div>

          <div>
            <img src={product_.images[0]} alt="" />
            <h2>{product_.title}</h2>
            <h3>
              {Number(product_.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
          </div>
        </SuggestedProducts>
      </ProductContainer>
    </>
  );
}
