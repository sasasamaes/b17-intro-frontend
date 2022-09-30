import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

const LoginForm = ({ userLogged }) => {
  const [credentials, setCredentials] = useState({}); // usuario: "", password: ""  1ER FORMA PARA WUITAR WARNING
  const credentialsHarcoded = { user: "usuarioG17", password: "password" };
  const navigate = useNavigate();
  /**

   * Harcodear 👀 credenciales con
   *    user: usuarioG17
   *    password: password
   */

  const handleFormValue = ({ target: { name, value } }) =>
    setCredentials({ ...credentials, [name]: value });

  const submitForm = () => {
    const { user, password } = credentialsHarcoded;
    if (credentials.user === user && credentials.password === password) {
      userLogged(true);
      navigate('/dashboard')
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        name="user"
        value={credentials.user || ""}
        onChange={handleFormValue}
      />
      <input
        type="password"
        name="password"
        value={credentials.password || ""}
        onChange={handleFormValue}
      />

      <button onClick={() => submitForm()}>Login</button>
    </div>
  );
};

export default LoginForm;
