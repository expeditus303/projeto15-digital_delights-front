import SignUpPage from './pages/SignUpPage/SignUpPage.js';
import SignInPage from './pages/SignInPage/SignInPage.js';
import HomePage from './pages/HomePage/HomePage.js';
import ProductPage from './pages/ProductPage/ProductPage.js';
import CartPage from './pages/CartPage/CartPage.js';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage.js';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import { UserContext } from './context/UserContext.js';




function App() {
  const [user, setUser] = useState('');


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
