import React from "react";
import { Outlet } from "react-router-dom";
import { userContext } from "../../Context/UserContext";
import { Navigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = React.useContext(userContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <div className={styles.login}>
      <div className={styles.forms}>
        <Outlet />
      </div>
    </div>
  );
};

export default Login;
