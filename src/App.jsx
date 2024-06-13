// App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="root">
      <NavBar />
      <main>
       <p>HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA</p>
       <h1>ALo</h1>
       <h1>ALo</h1>
       <h1>ALo</h1>
       <h1>ALo</h1>
       <h1>ALo</h1>
       <h1>ALo</h1>

      </main>
      <Footer />
    </div>
  );
}

export default App;
