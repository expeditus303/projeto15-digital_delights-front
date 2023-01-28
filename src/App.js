import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { useEffect, useState } from 'react';
import { UserContext } from './context/UserContext.js';
import SignInPage from './pages/SignInPage/SignInPage';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';
import CartPage from './pages/CartPage/CartPage.js';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage.js';
import apiProducts from './services/apiProducts.js';


function App() {
  const [user, setUser] = useState(sessionStorage.getItem("tokenLocal"));
  const [listProducts, setListProducts] = useState(undefined)
    useEffect(() => {
        apiProducts.getAllProducts()
            .then((res) => setListProducts(res.data))
            .catch((err) => console.log(err))
    }, [])
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/" element={<HomePage listProducts={listProducts}/>} />
          {/* <Route path="/product/:id" element={<ProductPage listProducts={listProducts} />} /> */}
          <Route path="/cart" element={<CartPage />} />
          <Route path='/payment-method' element={<PaymentPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
