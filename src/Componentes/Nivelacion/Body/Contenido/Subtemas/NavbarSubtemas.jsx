import React, { useContext } from "react";
import { Contexto } from "../../../Contexto/Contexto";
import SubTemas from "./SubTemas";

function NavbarSubtemas() {
  const { listaSubTemas, temaActivo, listaTemas } = useContext(Contexto);
  let st;
  for (let i = 0; i < listaTemas.length; i++) {
    listaTemas[i] == temaActivo && (st = listaSubTemas[i]);
  }
  const subtemas = st.map((v) => {
    return <SubTemas key={v} nombre={v} />;
  });
  return (
    <div className="my-8 text-xl   grid grid-cols-1  gap-4  sm:grid-cols-2  sm:grid-rows-2 md:text-xl md:flex md:justify-around ">
      {subtemas}
    </div>
  );
}

export default NavbarSubtemas;
