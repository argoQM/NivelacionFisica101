import React, { useContext } from "react";
import "./Fisica101.css";
import { ContextoFisica101, Datos } from "./ContextoFisica101";
import ListaVideosTeoricos from "./Contenido/ListaVideosTeoricos";
import ListaVideosPracticosA from "./Contenido/ListaVideosPracticosA";
import ListaVideosPracticosB from "./Contenido/ListaVideosPracticosB";
import VideoActivo from "./Contenido/VideoActivo";
function Body2() {
  const {
    tema,
    setTema,
    listaTemas,
    listaTemasAbreviados,
    setIndiceTema,
    indiceTema,
  } = useContext(ContextoFisica101);
  const temasCompletos = listaTemas.map((v, index) => {
    return (
      <div
        key={index}
        className="text-texto cursor-pointer text-2xl  hover:text-naranjaC hover:border-b-texto rounded-3xl border-b-naranjaC border-b-2 text-center w-4/5 mx-auto  flex justify-center place-items-center"
        onClick={() => {
          setTema(listaTemas[index]);
          setIndiceTema(index);
        }}
      >
        {v}
      </div>
    );
  });
  const temasAbreviados = listaTemasAbreviados.map((v, index) => {
    return (
      <div
        key={index}
        className="text-texto cursor-pointer text-2xl hover:text-naranjaC hover:border-b-texto hover:font-bold rounded-3xl border-b-naranjaC border-b-2 text-center"
        onClick={() => {
          setTema(listaTemas[index]);
          setIndiceTema(index);
        }}
      >
        {v}
      </div>
    );
  });
  return (
    <>
      <div className=" w-full max-w-300 mx-auto">
        <Datos>
          <div className="flex justify-around my-8">
            <div className="w-full grid grid-cols-4 gap-4  sm:hidden">
              {temasAbreviados}
            </div>
            <div className="w-full grid-cols-1 md:grid-cols-4  gap-4 hidden items-center sm:grid">
              {temasCompletos}
            </div>
          </div>
          <div className="">
            <h1 className="text-texto  text-center py-8 text-3xl sm:text-5xl underline underline-offset-4 decoration-naranjaC font-bold">
              {tema}
            </h1>
            <div className="flex ">
              <div className=" w-1/3 hidden md:block pr-4">
                <h2 className="text-center text-texto underline text-3xl decoration-naranjaC py-4">
                  Videos de las clases teoricas
                </h2>
                <ListaVideosTeoricos nombre={indiceTema} />
              </div>
              <div className="w-full pl-4 md:w-2/3">
                <div className=" aspect-video">
                  <VideoActivo />
                </div>
                <div className=" md:hidden">
                  <h2 className="text-center text-texto underline text-3xl decoration-naranjaC py-4">
                    Videos de las clases teoricas
                  </h2>
                  <ListaVideosTeoricos nombre={indiceTema} />
                </div>
                <div className="text-center text-texto underline text-3xl decoration-naranjaC py-4">
                  <h2 className="">Videos de las clases practicas</h2>
                  <h3 className="py-4">Practico A</h3>
                  <div className="">
                    <ListaVideosPracticosA nombre={indiceTema} />
                  </div>
                  <h3 className="py-4">Practico B</h3>
                  <div className="">
                    <ListaVideosPracticosB nombre={indiceTema} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Datos>
      </div>
    </>
  );
}

export default Body2;
