import React from "react";
import Cabecera from "./Contenido/Cabecera/Cabecera";
import NavbarSubtemas from "./Contenido/Subtemas/NavbarSubtemas";
import Cuerpo from "./Contenido/Cuerpo/Cuerpo";
import NavbarSecciones from "./Contenido/Secciones/NavbarSecciones";
import NavbarTemas from "./Contenido/Temas/NavbarTemas";
import { Datos } from "../Contexto/Contexto";

function Body() {
  return (
    <>
      <div className="box-borderw-full max-w-300 mx-auto">
        <Datos>
          <div className="select-none">
            <Cabecera nombreTema={"titulo"} />
          </div>
          <div className="select-none">
            <NavbarSubtemas />
          </div>
          <div className=" w-full h-auto block">
            <Cuerpo />
            <NavbarSecciones />
          </div>
          <div className="select-none">
            <NavbarTemas />
          </div>
        </Datos>
      </div>
    </>
  );
}

export default Body;
