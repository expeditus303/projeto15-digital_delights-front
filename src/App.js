import SignUpPage from './pages/SignUpPage/SignUpPage';

import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { useState } from 'react';
import { UserContext } from './context/UserContext.js';
import SignInPage from './pages/SignInPage/SignInPage';


function App() {
  const [user, setUser] = useState('');

  return (
    <BrowserRouter>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
