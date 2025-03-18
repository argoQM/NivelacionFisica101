import React, { useContext } from "react";
import { Contexto } from "../../../Contexto/Contexto";

function Secciones({ nombre }) {
  const { setSeccionActivo, setCorregirVF, seccionActivo } =
    useContext(Contexto);
  let nombreClase =
    seccionActivo === nombre[1]
      ? "text-[#0e0036] border-1 border-texto rounded-b-3xl w-18 h-10 flex justify-center items-center bg-naranjaC text-xl md:w-44 md:h-14 cursor-pointer select-none"
      : " border-1 border-texto rounded-3xl w-18 h-10 flex justify-center items-center hover:border-enfasis hover:text-[#0e0036] hover:bg-gradient-to-b from-white from-15% via-white via-75% to-naranjaO to-95% hover:border-1 hover:text-xl text-xl transirtion-color duration-300 ease-in-out md:w-44 md:h-14 cursor-pointer select-none";
  return (
    <div
      className={nombreClase}
      title={nombre[2]}
      onClick={(e) => {
        setSeccionActivo(nombre[1]);
        setCorregirVF(false);
        document
          .querySelectorAll(".seccionActiva")
          .forEach((el) => el.classList.remove("seccionActiva"));
        e.currentTarget.classList.add("seccionActiva");
      }}
    >
      {nombre[0]}
    </div>
  );
}

export default Secciones;
