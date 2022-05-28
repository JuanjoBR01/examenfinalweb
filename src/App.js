import Spaces from "./components/spaces/spaces"
import * as ReactDOMClient from "react-dom/client";
import './App.css';

function App() {

  return (
    <div className="App" id = "app">
      <h1> My Spaces</h1>
      <Spaces/>
    </div>
  );
}

export default App;
