import React, { useContext, useState, useEffect } from "react";
import { Contexto } from "../../../../Contexto/Contexto";

function TarjetaMO({ contenido, index }) {
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
  seleccionado === contenido[2]
    ? (resolucion = `Correcto `)
    : (resolucion = `Incorrecto: La opcion correcta es la ${contenido[2]}. `);
  const clase = `text-pretty w-75 min-h-125   tmo${index}`;
  return (
    <div>
      <div className={clase}>
        <div className="text-xl border-1 rounded-2xl min-h-50  flex items-center flex-wrap">
          <div className="text-xl   flex items-center text-left ">
            {contenido[0]}
          </div>
          {/* <div className="text-xl  h-1/5 flex justify-around w-full flex-wrap">
            {contenido[1]}
          </div> */}
        </div>
        <div className="text-xl  flex justify-around w-full min-h-50  items-center my-2 flex-wrap">
          <div className="min-w-1/2  max-w-full">
            <label className="mx-1 text-base " htmlFor="a">
              {contenido[1][0]}
            </label>
            <input
              className="accent-enfasis w-4 h-4 ml-4 hover:accent-texto accent-border-pink-500"
              type="radio"
              name={di}
              id="a)"
              value="a)"
              checked={seleccionado === "a)"}
              onChange={cambio}
            />
          </div>
          <div className="min-w-1/2  max-w-full">
            <label className="mx-1 text-base " htmlFor="b">
              {contenido[1][1]}
            </label>
            <input
              className="accent-enfasis w-4 h-4 ml-4 hover:accent-texto accent-border-pink-500"
              type="radio"
              name={di}
              id="b)"
              value="b)"
              checked={seleccionado === "b)"}
              onChange={cambio}
            />
          </div>
          <div className="min-w-1/2  max-w-full">
            <label className="mx-1 text-base " htmlFor="c">
              {contenido[1][2]}
            </label>
            <input
              className="accent-enfasis w-4 h-4 ml-4 hover:accent-texto accent-border-pink-500"
              type="radio"
              name={di}
              id="c)"
              value="c)"
              checked={seleccionado === "c)"}
              onChange={cambio}
            />
          </div>
          <div className="min-w-1/2  max-w-full">
            <label className="mx-1 text-base " htmlFor="d">
              {contenido[1][3]}
            </label>
            <input
              className="accent-enfasis w-4 h-4 ml-4 hover:accent-texto accent-border-pink-500"
              type="radio"
              name={di}
              id="d)"
              value="d)"
              checked={seleccionado === "d)"}
              onChange={cambio}
            />
          </div>
        </div>
        <div className="text-xl mt-4  flex justify-around min-h-25  items-center ">
          {corregirVF && (
            <div className="explicacionMO">
              <div>{resolucion}</div>
              <div>{contenido[3]}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default TarjetaMO;
