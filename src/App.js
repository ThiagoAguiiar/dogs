import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import LoginForm from "./Components/Login/LoginForm";
import LoginCreate from "./Components/Login/LoginCreate";
import LoginPasswordReset from "./Components/Login/LoginPasswordReset";
import LoginPasswordLost from "./Components/Login/LoginPasswordLost";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}>
            <Route path='' element={<LoginForm />} />
            <Route path='criar' element={<LoginCreate />} />
            <Route path='forgot' element={<LoginPasswordLost />} />
            <Route path='reset' element={<LoginPasswordReset />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
