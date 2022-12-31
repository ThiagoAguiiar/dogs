import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "../api";
import { useNavigate } from "react-router-dom";

// Salvar dados do usuário para que possa ser utilizado por toda a aplicação

export const userContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const responseToken = await fetch(url, options).catch((error) =>
      console.log(error)
    );

    const json = await responseToken.json();

    // Ver erros no console
    console.log(json);

    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);

      const { url, options } = TOKEN_POST({ username, password });

      const responseToken = await fetch(url, options).catch((error) =>
        console.log(error)
      );

      if (!responseToken.ok) throw new Error(`Erro: usuário inválido`);

      const { token } = await responseToken.json();
      window.localStorage.setItem("token", token);
      await getUser(token);
      navigate("/conta");
    } catch (error) {
      setError(error.message);
    } finally {
      setLogin(false);
      setLoading(false);
    }
  }

  // Reset nos valores
  const userLogout = React.useCallback(
    async function () {
      setData(null);
      setError(null);
      setLoading(false);
      setLogin(false);
      navigate("/login");

      // Removendo Token do LocalStorage (encerrandoa a sessão)
      window.localStorage.removeItem("token");
    },
    [navigate]
  );

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("token");

      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token inválido");
          await getUser(token);
        } catch (error) {
          userLogout();
          // Finaly sempre é executado
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);

  return (
    <userContext.Provider
      value={{ userLogin, userLogout, data, loading, login, error }}
    >
      {children}
    </userContext.Provider>
  );
};
