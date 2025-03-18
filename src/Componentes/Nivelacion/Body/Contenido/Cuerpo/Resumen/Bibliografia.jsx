import React, { useContext, useState } from "react";
import { Contexto } from "../../../../Contexto/Contexto";

function Bibliografia() {
  const {
    temaActivo,
    subTemaActivo,
    listaBibliografia,
    listaTemas,
    listaSubTemas,
  } = useContext(Contexto);
  const [diapo, setDiapo] = useState(0);
  const [btnDiapo, setBtnDiapo] = useState(0);
  let temaIndex;
  for (let i = 0; i < listaTemas.length; i++) {
    temaActivo == listaTemas[i] && (temaIndex = i);
  }
  let subTemaIndex;
  for (let i = 0; i < listaSubTemas[temaIndex].length; i++) {
    subTemaActivo == listaSubTemas[temaIndex][i] && (subTemaIndex = i);
  }
  const formulas = (diapo) => {
    diapo > listaBibliografia[temaIndex][subTemaIndex][1].length - 1 &&
      setDiapo(0);
    diapo < 0 &&
      setDiapo(listaBibliografia[temaIndex][subTemaIndex][1].length - 1);
    return (
      <div className="w-95/100 md:w-full">
        {listaBibliografia[temaIndex][subTemaIndex][1][diapo]}
      </div>
    );
  };
  const bibliogragia = listaBibliografia[temaIndex][subTemaIndex][2].map(
    (v, index) => {
      return (
        <div key={index}>
          {listaBibliografia[temaIndex][subTemaIndex][2][index]}
        </div>
      );
    }
  );
  let btn;
  if (listaBibliografia[temaIndex][subTemaIndex]) {
    btn = listaBibliografia[temaIndex][subTemaIndex][1];
  } else {
    btn = listaBibliografia[temaIndex][0][1];
  }
  const btnTeo = btn.map((v, index) => {
    let nombreClase =
      btnDiapo === index
        ? "w-6 h-6 my-2 bg-enfasis rounded-full border-2 border-texto cursor-pointer  "
        : "w-5 h-5 my-2 bg-fondoPrincipal rounded-full border-1 border-texto hover:bg-enfasis cursor-pointer ";

    return (
      <div
        key={index}
        id={index}
        className={nombreClase}
        onClick={(e) => {
          setBtnDiapo(index);
          setDiapo(index);
          document
            .querySelectorAll(
              "w-6 h-6 my-2 bg-enfasis rounded-full border-2 border-texto"
            )
            .forEach((el) =>
              el.classList.remove(
                "w-6 h-6 my-2 bg-enfasis rounded-full border-2 border-texto"
              )
            );
          e.currentTarget.classList.add(
            "w-6 h-6 my-2 bg-enfasis rounded-full border-2 border-texto"
          );
        }}
      ></div>
    );
  });
  return (
    <>
      <div className="text-xl max-w-300 mx-auto w-full h-150">
        <div className=" h-10 flex items-center justify-center text-2xl my-4 underline underline-offset-8 decoration-naranjaO ">
          {listaBibliografia[temaIndex][subTemaIndex][0]}
        </div>
        <div className="md:flex  h-140">
          <div className=" w-full h-110 md:w-3/4 md:h-140 flex flex-col relative justify-center sm:justify-stretch  items-center">
            {formulas(diapo)}
            <div className="absolute bottom-0  h-10 w-1/3 flex justify-evenly  items-center">
              {btnTeo}
            </div>
          </div>
          <div className=" w-full h-30 md:h-140 md:w-1/4 p-4 text-left ">
            {bibliogragia}
          </div>
        </div>
      </div>
    </>
  );
}

export default Bibliografia;
