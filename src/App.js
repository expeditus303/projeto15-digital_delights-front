import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import { UserContext } from './context/UserContext.js';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import PaymentPage from './pages/PaymentPage/PaymentPage';


function App() {
  const [user, setUser] = useState('');

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path='/payment' element={<PaymentPage />} />
       
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
