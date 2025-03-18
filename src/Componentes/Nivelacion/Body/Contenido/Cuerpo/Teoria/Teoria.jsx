import React, { useContext, useEffect } from "react";
import { Contexto } from "../../../../Contexto/Contexto";
import VideosTeo from "./VideosTeo";

function Teoria() {
  const {
    listaTeoria,
    listaSubTemas,
    listaTemas,
    temaActivo,
    subTemaActivo,
    indice,
    setIndice,
  } = useContext(Contexto);
  let temaIndex;
  for (let i = 0; i < listaTemas.length; i++) {
    if (temaActivo === listaTemas[i]) {
      temaIndex = i;
      break;
    }
  }
  let subTemaIndex;
  for (let i = 0; i < listaSubTemas[temaIndex].length; i++) {
    if (subTemaActivo === listaSubTemas[temaIndex][i]) {
      subTemaIndex = i;
      break;
    }
  }
  let conten = listaTeoria[temaIndex][0][0];
  if (listaTeoria[temaIndex][subTemaIndex]) {
    conten = listaTeoria[temaIndex][subTemaIndex][indice];
  } else {
    conten = listaTeoria[temaIndex][0][0];
  }
  let btn;
  if (listaTeoria[temaIndex][subTemaIndex]) {
    btn = listaTeoria[temaIndex][subTemaIndex];
  } else {
    btn = listaTeoria[temaIndex][0];
  }
  const btnTeo = btn.map((v, index) => {
    let nombreClase =
      indice === index
        ? "w-6 h-6 my-2 bg-enfasis rounded-full border-2 border-texto "
        : "w-5 h-5 my-2 bg-fondoPrincipal rounded-full border-1 border-texto hover:bg-enfasis";

    return (
      <span
        key={index}
        id={index}
        className={nombreClase}
        onClick={(e) => {
          setIndice(index);
          document
            .querySelectorAll(".btnTeoActiva")
            .forEach((el) => el.classList.remove("btnTeoActiva"));
          e.currentTarget.classList.add("btnTeoActiva");
        }}
      ></span>
    );
  });

  return (
    <div className="w-full max-w-300 h-150 ">
      <div className=" flex justify-center  h-full max-h-125 w-full m-auto ">
        <VideosTeo indice={conten} />
      </div>
      <div className="flex justify-center">
        <div className="flex justify-evenly w-1/2 ">{btnTeo}</div>
      </div>
    </div>
  );
}

export default Teoria;
