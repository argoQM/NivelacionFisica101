import React, { useContext } from "react";
import { Contexto } from "../../../Contexto/Contexto";
import Secciones from "./Secciones";

function NavbarSecciones() {
  const { btnSecciones } = useContext(Contexto);
  const seccion = btnSecciones.map((v, index) => {
    return <Secciones key={index} nombre={v} />;
  });
  return <div className="flex justify-evenly my-8">{seccion}</div>;
}

export default NavbarSecciones;
