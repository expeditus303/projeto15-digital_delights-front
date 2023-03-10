import { Link, useNavigate, useParams } from "react-router-dom";
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
import { useContext, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { UserContext } from "../../context/UserContext";
import apiCart from "../../services/apiCart";

export default function ProductPage({
  listProducts,
  setListProducts,
  setSelectedProductBeforeLogin,
}) {
  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const [currentIndex, setCurrentIndex] = useState(0);

  const [suggestedProducts, setSuggestedProducts] = useState([]);

  const [useEffectControl, setUseEffectControl] = useState(0);

  useEffect(() => {
    if (listProducts !== undefined) {
      const listProductsWithoutSelected = listProducts.filter(
        (p) => p._id !== id
      );

      const randomProducts = listProductsWithoutSelected.sort(random);

      setSuggestedProducts(randomProducts.slice(0, 4));
    }
  }, [listProducts, useEffectControl]);

  if (listProducts === undefined) return <Loading />;

  const productSelectedArr = listProducts.filter((p) => p._id === id);
  const productSelected = productSelectedArr[0];

  function random() {
    return Math.random() - 0.5;
  }

  async function addToBasket() {
    if (user === null) {
      alert("Please login to continue");
      setSelectedProductBeforeLogin(id);
      return navigate("/sign-in");
    }

    const price = productSelected.price;

    try {
      await apiCart.addProduct(user, id, price);

      navigate("/cart");
    } catch (error) {
      console.log(error);
    }
  }

  function openSuggestedProduct(_id) {
    navigate(`/product/${_id}`);
    window.scrollTo(0, 0);
    const refresh = useEffectControl + 1;
    setUseEffectControl(refresh);
  }

  return (
    <>
      <ProductContainer>
        <TopMenu>
          <Link to={"/"}>
            Digital
            <br />
            Delights
          </Link>
          <Link to={user === null ? "/sign-in" : "/cart"}>
            {user === null ? (
              <ion-icon name="person-circle-outline" />
            ) : (
              <ion-icon name="cart-outline" />
            )}
          </Link>
        </TopMenu>
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
          <button onClick={addToBasket}>
            <HiOutlinePlusCircle />
            <h2>Add to basket</h2>
          </button>
          <HiOutlineHeart />
        </AddBasket>

        <h3>You may also like</h3>
        <SuggestedProducts>
          {suggestedProducts.map((e) => (
            <button onClick={() => openSuggestedProduct(e._id)} key={e._id}>
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
            </button>
          ))}
        </SuggestedProducts>
      </ProductContainer>
    </>
  );
}
