import React, { useContext, useState, useEffect } from "react";
import { Contexto } from "../../../../Contexto/Contexto";
import TarjetaVF from "./TarjetaVF";

function VerdaderoFalso() {
  const {
    listaTemas,
    listaSubTemas,
    listaPreguntasVF,
    temaActivo,
    subTemaActivo,
    actualizarVF,
    setCorregirVF,
    setActualizarVF,
  } = useContext(Contexto);
  const [conten, setConten] = useState([[], [], []]);
  useEffect(() => {
    const seleccionarPregunta = () => {
      let indiceTemas = listaTemas.indexOf(temaActivo);
      let subTemaIndex = listaSubTemas[indiceTemas]?.indexOf(subTemaActivo);

      if (indiceTemas === -1 || subTemaIndex === -1) return;

      let nuevasPreguntas = [];
      for (let i = 0; i < 3; i++) {
        let indicePregunta = Math.floor(
          Math.random() * listaPreguntasVF[indiceTemas][subTemaIndex]?.length
        );
        let nuevaPregunta =
          listaPreguntasVF[indiceTemas][subTemaIndex][indicePregunta];
        nuevasPreguntas.push(nuevaPregunta);
      }
      setConten(nuevasPreguntas);
    };

    if (actualizarVF || conten[0].length === 0) {
      seleccionarPregunta();
      setActualizarVF(false);
    }
  }, [
    actualizarVF,
    listaTemas,
    listaSubTemas,
    listaPreguntasVF,
    temaActivo,
    subTemaActivo,
  ]);
  return (
    <div className="flex justify-center flex-wrap ">
      <div className=" w-full grid grid-cols-1 gap-1 sm:grid-cols-2 lg:grid-cols-3  place-items-center mb-8 ">
        {conten.map((contenido, index) => (
          <TarjetaVF key={index} contenido={contenido} index={index} />
        ))}
      </div>
      <div className="flex justify-around  w-1/2 my-4 ">
        <button
          className="border-2 border-texto p-1 rounded-2xl px-2 hover:bg-gradient-to-b from-white from-15% via-white via-75% to-naranjaO to-95% hover:text-[#0e0036] hover:border-enfasis hover:border-2 select-none"
          onClick={() => {
            setCorregirVF(true);
          }}
        >
          Corregir
        </button>
        <button
          className="border-2 border-texto p-1 rounded-2xl px-2  hover:bg-gradient-to-b from-white from-15% via-white via-75% to-naranjaO to-95% hover:text-[#0e0036] hover:border-enfasis hover:border-2 select-none"
          onClick={() => {
            setActualizarVF(!actualizarVF);
            setCorregirVF(false);
          }}
        >
          Actualizar
        </button>
      </div>
    </div>
  );
}

export default VerdaderoFalso;
