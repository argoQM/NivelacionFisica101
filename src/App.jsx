import "./App.css";
import React from "react";
import Nivelacion from "./Componentes/Nivelacion/Nivelacion";
import Fisica101 from "./Componentes/Fisica101/Fisica101";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nivelacion />}></Route>
          <Route path="/*" element={<Fisica101 />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
