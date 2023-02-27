// src/App.js
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
      <div className="icons">
        <img src={logo} alt="ironhack-logo-xs" />
        <img src={menu} alt="menu-top-xs.png" />
      </div>
      <div className="text">
        <h1>Say Hello to ReactJS</h1>
        <h2>
          You will learn how to use the most popular front-end library, and become a super Ninja developer.
        </h2>
        <div className ="awesome">
        <h2>Awesome!</h2>
      </div>
      </div>
    
      </header>
      <div className = "block">
      <div className ="boxes">
      <img src={icon1} alt="icon1.png" />
      <h2><strong>Declarative!</strong></h2>
      <p>React makes it painless to create interactive UIs</p>
      </div>
      <div className ="boxes">
        <img src={icon2} alt="icon2.png" />
        <h2><strong>Components!</strong></h2>
        <p>Build encapsulated components that manage their state.</p>
      </div>
      <div className ="boxes">
        <img src={icon3} alt="icon3.png" />
        <h2><strong>Single way!</strong></h2>
        <p>A set of inmutable values are passed to the component's</p>
      </div>
      <div className ="boxes">
      <img src={icon4} alt="icon4.png" />
      <h2><strong>JSX</strong></h2>
      <p>Statically-typed, designed to run on modern browsers</p>
      </div>
        
      </div>
    </div>
  );
}
export default App;