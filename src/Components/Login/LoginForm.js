import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";
import { userContext } from "../../Context/UserContext";
import Error from "../Forms/Error";
import styles from './LoginForm.module.css';
import stylesButton from '../Forms/Button.module.css';

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
      <form className={styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" id="username" {...username} />

        <Input label="Senha" type="password" id="password" {...password} />

        <Button disabled={loading ? true : false} type="submit">
          {loading ? "Carregando..." : "Entrar"}
        </Button>
        <Error error={error} />
      </form>
      <Link className={styles.forgot} to='/login/perdeu'>Esqueceu sua senha?</Link>

      <div className={styles.cadastro}>
        <h2 className={styles.subtitle}>Cadastro</h2>
        <p>Crie uma conta gratuitamente!</p>
        <Link className={stylesButton.button} to='/login/criar'>Cadastre-se</Link>
      </div>
    </div>
  );
};

export default LoginForm;
