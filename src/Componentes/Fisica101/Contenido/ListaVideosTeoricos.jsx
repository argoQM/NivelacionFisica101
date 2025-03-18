import React, { useContext } from "react";
import { ContextoFisica101 } from "../ContextoFisica101";

function ListaVideosTeoricos({ nombre }) {
  const { listaMiniaturas, listaVideos, setVideoActivo } =
    useContext(ContextoFisica101);
  const temaind = listaMiniaturas[nombre].map((v) => {
    return v;
  });
  const clasesListado = temaind.map((v, index) => {
    return (
      <div
        key={v[1]}
        className="flex-col bg-naranjaC m-4 flex justify-center cursor-pointer overflow-hidden rounded-3xl w-4/5 mx-auto hover:bg-naranjaO"
        onClick={() => {
          setVideoActivo(listaVideos[nombre][index][0]);
          location.href = "#video";
        }}
      >
        <img src={v[0]} alt="jaj" className="aspect-video" />

        <span className="text-texto text-2xl text-center">{v[1]}</span>
      </div>
    );
  });
  return (
    <>
      <div className="">{clasesListado}</div>
    </>
  );
}

export default ListaVideosTeoricos;
