import React, { useState } from "react";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({});
  const credentialsHarcoded = { user: "usuarioG17", password: "password" };
  /**
   * Si las credenciales son correctas, login exitoso
   * Harcodear 👀 credenciales con
   *    user: usuarioG17
   *    password: password
   */

  const handleFormValue = ({ target: { name, value } }) =>
    setCredentials({ ...credentials, [name]: value });

  const submitForm = () => {
    const { user, password } = credentialsHarcoded;
    if (credentials.user === user && credentials.password === password) {
      console.log("credentials EXITOSAS ✅");
    }
  };

  return (
    <div>
      LoginForm Component
      <div>
        <input
          type="text"
          name="user"
          value={credentials.user}
          onChange={handleFormValue}
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleFormValue}
        />

        <button onClick={() => submitForm()}>Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
