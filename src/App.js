import Main from './pages/main/main';
import Catalogue from './pages/catalogue/catalogue'
import Contact from './pages/contact/contact';
import Login from './pages/auth/login/login';
import Help from './pages/help/help';
import Footer from './components/footer/footer'
import SignUp from './pages/auth/register/signup';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Err404 from './pages/404/404'
import Navbar from './components/navbar/navbar';
import Dasboard from './pages/dashboard/dashboard'
import Checkout from './pages/checkout/checkout';

function App() {
  const [refCounter,setRefcounter]= useState(0)
  return (
      <BrowserRouter>
        <Navbar refCountNumber={refCounter}></Navbar>
        <Routes>
          <Route exact path="/" element={<Main />}></Route>
          <Route exact path="/catalogue" element={<Catalogue setTotal={setRefcounter} />}></Route>
          <Route exact path="/dashboard" element={<Dasboard  />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/help" element={<Help />}></Route>
          <Route exact path="/auth/login" element={<Login />}></Route>
          <Route exact path="/auth/signup" element={<SignUp/>}></Route>
          <Route exact path="dashboard/checkout" element={<Checkout/>}></Route>
          <Route path="*" element={<Err404/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
  );
}

export default App;
