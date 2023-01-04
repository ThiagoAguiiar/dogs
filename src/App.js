import React from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Login from "./Components/Login/Login";
import LoginForm from "./Components/Login/LoginForm";
import LoginCreate from "./Components/Login/LoginCreate";
import LoginPasswordReset from "./Components/Login/LoginPasswordReset";
import LoginPasswordLost from "./Components/Login/LoginPasswordLost";
import { userContext, UserStorage } from "./Context/UserContext";
import User from "./Components/User/User";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/login" element={<Login />}>
              <Route path="" element={<LoginForm />} />
              <Route path="criar" element={<LoginCreate />} />
              <Route path="forgot" element={<LoginPasswordLost />} />
              <Route path="reset" element={<LoginPasswordReset />} />
            </Route>

            <Route
              path="/conta"
              element={
                <PrivateRoutes>
                  <User />
                </PrivateRoutes>
              }
            ></Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export const PrivateRoutes = ({ children }) => {
  const { login } = React.useContext(userContext);

  return login ? children : <Navigate to="/login" />;
};

export default App;
