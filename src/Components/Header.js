import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
// Importando imagem como um componente
import { ReactComponent as Dogs } from "../assets/img/dogs.svg";
import { userContext } from "../Context/UserContext";

const Header = () => {
  const { data, userLogout } = React.useContext(userContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" aria-label="Dogs - Home" className={styles.logo}>
          <Dogs />
        </Link>
        {data && data.email}
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          {data !== null ? (
            <button onClick={() => userLogout()}>Sair</button>
          ) : null}
          {data !== null ? (
            <Link to="/account" className={styles.login}>
              {data.nome}
            </Link>
          ) : (
            <Link to="/login" className={styles.login}>
              Login / Criar
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
