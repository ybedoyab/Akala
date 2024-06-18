import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Views/Home/Home";
import NotFound from "./Views/NotFound/NotFound";

function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Ruta para el formulario de inicio de sesión */}
        <Route path="/*" element={<NotFound />} /> {/* Ruta para el resto de la aplicación */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
