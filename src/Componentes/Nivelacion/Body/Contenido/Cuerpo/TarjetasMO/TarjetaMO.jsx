import React, { useContext, useState, useEffect } from "react";
import { Contexto } from "../../../Contexto/Contexto";
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
  const clase = `tmo tmo${index}`;
  return (
    <>
      <div className={clase}>
        <div className="enunciadoMO">
          <div>{contenido[0]}</div>
          <div>{contenido[1]}</div>
        </div>
        <div className="rbtnMO">
          <div className="opcionMO">
            <label htmlFor="a">Opcion a:</label>
            <input
              type="radio"
              name={di}
              id="a"
              value="a"
              checked={seleccionado === "a"}
              onChange={cambio}
            />
          </div>
          <div className="opcionMO">
            <label htmlFor="b">Opcion b:</label>
            <input
              type="radio"
              name={di}
              id="b"
              value="b"
              checked={seleccionado === "b"}
              onChange={cambio}
            />
          </div>
          <div className="opcionMO">
            <label htmlFor="c">Opcion c:</label>
            <input
              type="radio"
              name={di}
              id="c"
              value="c"
              checked={seleccionado === "c"}
              onChange={cambio}
            />
          </div>
          <div className="opcionMO">
            <label htmlFor="d">Opcion d:</label>
            <input
              type="radio"
              name={di}
              id="d"
              value="d"
              checked={seleccionado === "d"}
              onChange={cambio}
            />
          </div>
        </div>
        <div className="contenedorExplicacionMO">
          {corregirVF && (
            <div className="explicacionMO">
              <div>{resolucion}</div>
              <div>{contenido[3]}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default TarjetaMO;
