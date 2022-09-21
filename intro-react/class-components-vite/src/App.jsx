import { Component, Fragment } from "react";
import "./App.css";

// 1 extender de Component
class App extends Component {
  state = {
    counter: 0,
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
    // JSX
    return (
      // React fragment
      <>
        <h3>React con clas components 👴🏽</h3>
        <div className="App">
          <span>
            Contador <b>{this.state.counter}</b>{" "}
          </span>

          <div className="btn-section">
            <button onClick={() => this.handleClick("inc")}>Incrementar</button>
            <button onClick={() => this.handleClick("dec")}>Decrementar</button>
          </div>
        </div>
      </>
    );
  }
}

export default App;
