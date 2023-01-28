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
import { useEffect, useState } from "react";
import Loading from "../../components/Loading";

export default function ProductPage({ listProducts }) {
  const { id } = useParams();

  const [currentIndex, setCurrentIndex] = useState(0);

  const [suggestedProducts, setSuggestedProducts] = useState([])

  useEffect(() => {
    if (listProducts != undefined) {

      const productsWithoutSelected = listProducts.filter((p) => p._id != id)

      const randomProducts = productsWithoutSelected.sort(random);
  
      setSuggestedProducts(randomProducts.slice(0, 4))
    }
  }, [listProducts]);

  if (listProducts === undefined) return <Loading />;

  const productSelectedArr = listProducts.filter((p) => p._id == id);
  const productSelected = productSelectedArr[0];

  function random() {
    return Math.random() - 0.5;
  }

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
            <img src={productSelected.images[currentIndex]} alt="" />
          </div>
          <ProductImage>
            {productSelected.images.map((image, index) => (
              <button onClick={() => setCurrentIndex(index)} key={index}>
                {currentIndex === index ? <RxDotFilled id="dot" /> : <RxDot />}
              </button>
            ))}
          </ProductImage>

          <ProductInfo>
            <h2>{productSelected.title}</h2>
            <p>{productSelected.description}</p>
            <h3>
              {Number(productSelected.price).toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
          </ProductInfo>
        </ProductDisplay>

        <AddBasket>
          <div>
            <HiOutlinePlusCircle />
            <h2>Add to basket</h2>
          </div>
          <HiOutlineHeart />
        </AddBasket>

        <h3>You may also like</h3>
        <SuggestedProducts>
          {suggestedProducts.map((e) => (
            <div key={e._id}>
              <div className="image">
                <img src={e.images[0]} alt="" />
              </div>
              <h2>{e.title}</h2>
              <h3>
                {Number(e.price).toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </h3>
            </div>
          ))}
        </SuggestedProducts>
      </ProductContainer>
    </>
  );
}
