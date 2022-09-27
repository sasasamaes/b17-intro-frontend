import { Component, Fragment } from "react";
import "./App.css";
import ChildComponent from "./components/ChildComponent";
import Button from "./components/Button";
import TeenagerComponent from "./components/TeenagerComponent";
import PersonComponent from "./components/PersonComponent";

// 1 extender de Component
class App extends Component {
  state = {
    counter: 0,
    darkMode: false,
    team: "Dev.f"
  };

  
  

  handleClick = (type) => {
    if (type === "inc") this.setState({ counter: this.state.counter + 1 });
    else {
      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter - 1,
        });
      }
    }
  };

  // 2 poner el metodo de render()
  render() {
    const stylesDiv = {
      fontSize: 25, 
      color: "yellow"
    }
    // JSX
    return (
      // React fragment
      <>
        <h3
          style={!this.state.darkMode ? { color: "white" } : { color: "red" }}
        >
          React con class components 👴🏽
        </h3>
        <div className="App">
          <div style={stylesDiv}>
            {/* Objeto */}
            Ingresa tu edad: <b>{this.state.counter}</b>{" "}
          </div>

          <div className="btn-section">
            <button onClick={() => this.handleClick("inc")}>Incrementar</button>
            <button onClick={() => this.handleClick("dec")}>Decrementar</button>
          </div>
        </div>

        {/* Conditional IF 
         if(state.counter > 4) {} 
        {this.state.counter > 4 && <p>Ya puedes ir al kinder</p>}

        {/* CONDITIONAL IF ELSE 
        {/* condicion ? verdadero : false 

        {this.state.counter > 12 ? (
          <>
            <h4> Ya pasas a secundaria</h4>
          </>
        ) : (
          <h5> Estas pequeño</h5>
        )}
        */}

        {/* EJERCICIO 
          MOSTRAR EL SIG MENSAJE CUANDO SEAS MAYOR DE EDAD (>+ 18) YA ERES MAYOR DE EDAD
          MOSTRAR EL SIG MENSAJE CUANDO TENGAS ENTRE 18 Y 12 AñOS O MAS  ERES UN ADOLESCENTE
          MOSTRAR EL SIG MENSAJE CUANDO TENGAS MENOS 12 Años  ERES UN NIñO
          USAR CONDITIONAL RENDERING : )
        */}

        {this.state.counter >= 18 ? (
          <PersonComponent />
        ) : this.state.counter < 18 && this.state.counter >= 12 ? (
          <PersonComponent test={true}/>
        ) : (
          <>
            <ChildComponent />
            {/* propHtml = valor */}
            {/* propCualquierNombre = 'hola' || state */}
            <Button
              age={this.state.counter}
              style={this.state.darkMode}
              incrementCounter={(value) =>
                console.log(`valor de incremento ${value}`)
              }
            />
            {/* <button>Boton de html</button> */}
          </>
        )}
        {/*  IF ELSE IF ELSE */}
      </>
    );
  }
}

export default App;
