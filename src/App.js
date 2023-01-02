import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Presentacion from "./components/Presentacion/Presentacion";

function App() {
  return (
    <BrowserRouter>
      <Presentacion />
    </BrowserRouter>
  );
}

export default App;
