import React, { useContext } from "react";
import { Contexto } from "../../../Contexto/Contexto";
import Tema from "./Tema";

function NavbarTemas() {
  const { listaTemas } = useContext(Contexto);
  const temas = listaTemas.map((v) => {
    return <Tema key={v} nombreTema={v} />;
  });
  return (
    <div className=" w-full max-w-300 mx-auto  grid grid-cols-1  gap-8 text-2xl sm:grid-cols-2 sm:grid-rows-2 md:flex md:justify-around p-4 my-8 ">
      {temas}
    </div>
  );
}

export default NavbarTemas;
