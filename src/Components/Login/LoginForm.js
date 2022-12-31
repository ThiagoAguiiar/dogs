import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { userContext } from "../../Context/UserContext";

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  const { userLogin, error, loading } = React.useContext(userContext);

  // Fetch API
  async function handleSubmit(e) {
    e.preventDefault();

    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }

  return (
    <div className="animeLeft">
      <h1 className="title">Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" id="username" {...username} />

        <Input label="Senha" type="password" id="password" {...password} />

        <Button disabled={loading ? true : false} type="submit">
          {loading ? "Carregando..." : "Entrar"}
        </Button>
        {error && <p>{error}</p>}
        <Link to="criar">Cadastre-se</Link>
      </form>
    </div>
  );
};

export default LoginForm;
