import React, { useContext } from "react";
import { Contexto } from "../../../Contexto/Contexto";

function Cabecera() {
  const { temaActivo } = useContext(Contexto);
  return (
    <div className="text-3xl md:text-5xl my-10 underline underline-offset-8 decoration-naranjaO">
      {temaActivo}
    </div>
  );
}

export default Cabecera;
