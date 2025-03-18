import React, { useContext, useEffect } from "react";
import { Contexto } from "../../../Contexto/Contexto";

function Tema({ nombreTema }) {
  const {
    setTemaActivo,
    setSubTemaActivo,
    setSeccionActivo,
    setIndice,
    listaSubTemas,
    listaTemas,
    temaActivo,
    subTemaActivo,
    btnSecciones,
    setCorregirVF,
  } = useContext(Contexto);

  useEffect(() => {
    const temaIndex = listaTemas.indexOf(temaActivo);
    if (!listaSubTemas[temaIndex]?.includes(subTemaActivo)) {
      setSubTemaActivo(listaSubTemas[temaIndex][0]);
    }
  }, [temaActivo, listaSubTemas, subTemaActivo, setSubTemaActivo]);

  return (
    <div
      className="cursor-pointer  border-b-texto border-b-2 hover:border-b-naranjaO hover:border-b-2 rounded-2xl w-full sm:max-w-75 mx-auto hover:bg-gradient-to-b from-[#fff] from-15% via-[#fff] via-75% to-naranjaO to-95% hover:text-[#0e0036] transition-color duration-300 ease-in-out text-3xl"
      onClick={() => {
        setTemaActivo(nombreTema);
        setSeccionActivo(btnSecciones[0][1]);
        setIndice(0);
        setCorregirVF(false);
      }}
    >
      {nombreTema}
    </div>
  );
}

export default Tema;
