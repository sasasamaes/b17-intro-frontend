import { useState } from "react";
import "./App.css";
import LoginForm from "./components/LoginForm";

function App() {
  const [isUserLogged, setisUserLogged] = useState(false);
  return (
    <div className="App">
      <h3>React Login 👤</h3>
      <div className="card">
        {!isUserLogged ? (
          <LoginForm userLogged={(value) => setisUserLogged(value)} />
        ) : (
          <h2>Componente login exitoso</h2>
        )}
      </div>
    </div>
  );
}

export default App;
