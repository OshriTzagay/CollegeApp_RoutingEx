import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/HomeCompo/Home";
import { BrowserRouter, Link } from "react-router-dom";
import Nav from "./Components/NavCompo/Nav";
import Routing from "./Components/Routing/Routing";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Nav/>
        </header>

        <Home />
        <Routing/>
      <img id="pic" src="https://edsurge.imgix.net/uploads/post/image/13610/diverse_students_for_workforce-1597255295.jpg?auto=compress%2Cformat&w=640&h=259&fit=crop"></img>
      </div>
    </BrowserRouter>
  );
}

export default App;
