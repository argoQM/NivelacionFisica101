import React, { useContext } from "react";
import { Contexto } from "../../../Contexto/Contexto";

function SubTemas({ nombre }) {
  const {
    setSubTemaActivo,
    subTemaActivo,
    btnSecciones,
    setSeccionActivo,
    setIndice,
    setCorregirVF,
  } = useContext(Contexto);
  let nombreClase =
    subTemaActivo === nombre
      ? "cursor-pointer mx-auto w-75 h-15 flex justify-center items-center text-[#0e0036] font-bold italic border-b-2 rounded-b-2xl border-b-enfasis px-4 bg-white"
      : "cursor-pointer mx-auto w-75 h-15 flex justify-center items-center border-b-texto border-b-2 hover:border-b-enfasis hover:border-b-2 rounded-2xl px-4 hover:bg-gradient-to-b from-white from-15% via-white via-75% to-naranjaO to-95% hover:text-[#0e0036] transition-color duration-300 ease-in-out ";
  return (
    <div
      className={nombreClase}
      onClick={(e) => {
        setSubTemaActivo(nombre);
        setSeccionActivo(btnSecciones[0][1]);
        setIndice(0);
        setCorregirVF(false);
        document
          .querySelectorAll(".subtemaActiva")
          .forEach((el) => el.classList.remove("subtemaActiva"));
        e.currentTarget.classList.add("subtemaActiva");
      }}
    >
      {nombre}
    </div>
  );
}

export default SubTemas;
