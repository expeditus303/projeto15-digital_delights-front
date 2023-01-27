import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import { UserContext } from './context/UserContext.js';
import SignInPage from './pages/SignInPage/SignInPage';
import HomePage from './pages/HomePage/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';


function App() {
  const [user, setUser] = useState(sessionStorage.getItem("tokenLocal"));

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/product/:id" element={<ProductPage />} /> */}
          {/* <Route path="/cart" element={<CartPage />} /> */}
          <Route path='/payment-method' element={<PaymentPage />} />
          {/* <Route path="/checkout" element={<CheckOutPage />} /> */}
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
