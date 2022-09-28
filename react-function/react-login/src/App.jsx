import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import LoginForm from "./components/LoginForm";

function App() {
  const [isUserLogged, setisUserLogged] = useState(false);
  return (
    <div className="App">
      <h2>React app 📝</h2>
      <div className="card">
        {!isUserLogged ? (
          <LoginForm userLogged={(value) => setisUserLogged(value)} />
        ) : (
          <Dashboard />
        )}
      </div>
    </div>
  );
}

export default App;
