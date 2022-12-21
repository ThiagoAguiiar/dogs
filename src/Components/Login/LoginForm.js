import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [user, setUser] = React.useState({
    username: "",
    password: "",
  });

  // Pegar valores do input
  function handleChange({ target }) {
    const { id, value } = target;
    setUser({ ...user, [id]: value });
  }

  // Fetch API
  function handleSubmit(e) {
    e.preventDefault();

    fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => console.log(response.json()))
      .then((json) => console.log(json));
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.username}
          id="username"
          onChange={handleChange}
        />

        <input
          type="password"
          value={user.password}
          id="password"
          onChange={handleChange}
        />

        <button type="submit">Login</button>
        <Link to="criar">Cadastre-se</Link>
      </form>
    </div>
  );
};

export default LoginForm;
