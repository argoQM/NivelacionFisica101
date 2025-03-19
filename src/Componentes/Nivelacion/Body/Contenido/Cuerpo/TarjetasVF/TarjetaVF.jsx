import React, { useContext, useState, useEffect } from "react";
import { Contexto } from "../../../../Contexto/Contexto";

function TarjetaVF({ contenido, index }) {
  const { corregirVF } = useContext(Contexto);
  const [seleccionado, setSeleccionado] = useState("");
  const [di, setDi] = useState(0);

  useEffect(() => {
    setDi(Math.floor(Math.random() * 10000));
  }, []);

  const cambio = (e) => {
    setSeleccionado(e.target.value);
  };

  let resolucion = "";
  seleccionado === contenido[1]
    ? (resolucion = `Correcto`)
    : (resolucion = `Incorrecto: `);
  const clase = `text-pretty w-75 h-125  tvf${index}`;
  return (
    <div className="">
      <div className={clase}>
        <div className="text-xl border-1 rounded-2xl h-2/5 flex items-center">
          {contenido[0]}
        </div>
        <div className="text-xl  flex justify-around w-full h-1/5  items-center my-2">
          <div className="opcionVF">
            <label className="mx-1" htmlFor="">
              Verdadero
            </label>
            <input
              // className="w-4 h-4 ml-4 appearance-none border-1 border-enfasis rounded-full checked:bg-enfasis hover:bg-texto transition-colors duration-300 ease-in-out"
              className="accent-enfasis w-4 h-4 ml-4 hover:accent-texto "
              type="radio"
              name={di}
              id="verdadero"
              value="verdadero"
              checked={seleccionado === "verdadero"}
              onChange={cambio}
            />
          </div>
          <div className="opcionVF">
            <label className="mx-1" htmlFor="">
              Falso
            </label>
            <input
              className="accent-enfasis w-4 h-4 ml-4 hover:accent-texto accent-border-pink-500"
              type="radio"
              name={di}
              id="falso"
              value="falso"
              checked={seleccionado === "falso"}
              onChange={cambio}
            />
          </div>
        </div>
        <div className="text-xl  flex justify-around h-2/5  items-center ">
          {corregirVF && (
            <div className="">
              <div>{resolucion}</div>
              <div>{contenido[2]}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TarjetaVF;
