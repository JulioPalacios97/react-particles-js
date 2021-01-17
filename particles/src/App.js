import Particles from "react-particles-js";
import particlesConfig from "./config/particlesConfig";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="particles-style">
        <Particles height="100vh" width="100vw" params={particlesConfig} />
      </div>
      <header className="App-header">
        <h1>React Particles</h1>
      </header>
    </div>
  );
}

export default App;
